/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ProcessedResult {
  base64_16: string;
  base64_2048: string;
  gridSize: number;
  detectedDimensions: { w: number; h: number };
}

export async function processAiTexture(blob: Blob): Promise<ProcessedResult> {
  const img = await loadImage(blob);
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d', { willReadFrequently: true });
  if (!ctx) throw new Error('Could not get canvas context');

  canvas.width = img.width;
  canvas.height = img.height;
  ctx.drawImage(img, 0, 0);

  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;
  const width = canvas.width;
  const height = canvas.height;

  // 1. Advanced Background Removal (Flood Fill)
  const mask = new Uint8Array(width * height);
  const visited = new Uint8Array(width * height);
  const queue: [number, number][] = [];

  const cornerIdxs = [0, (width - 1) * 4, (height - 1) * width * 4, (height * width - 1) * 4];
  let bgR = 0, bgG = 0, bgB = 0;
  cornerIdxs.forEach(idx => { bgR += data[idx]; bgG += data[idx+1]; bgB += data[idx+2]; });
  bgR /= 4; bgG /= 4; bgB /= 4;

  const seeds: [number, number][] = [[0, 0], [width - 1, 0], [0, height - 1], [width - 1, height - 1]];
  for (const [sx, sy] of seeds) {
    queue.push([sx, sy]);
    visited[sy * width + sx] = 1;
  }

  while (queue.length > 0) {
    const [currX, currY] = queue.shift()!;
    const idx = (currY * width + currX) * 4;
    const diff = Math.abs(data[idx] - bgR) + Math.abs(data[idx + 1] - bgG) + Math.abs(data[idx + 2] - bgB);
    
    if (diff < 70) { 
      mask[currY * width + currX] = 1;
      const neighbors = [[currX + 1, currY], [currX - 1, currY], [currX, currY + 1], [currX, currY - 1]];
      for (const [nx, ny] of neighbors) {
        if (nx >= 0 && nx < width && ny >= 0 && ny < height && !visited[ny * width + nx]) {
          visited[ny * width + nx] = 1;
          queue.push([nx, ny]);
        }
      }
    }
  }

  // 1.5 Robust Bounding Box with Density Filtering to Ignore Stray Noise
  let minX = width, minY = height, maxX = 0, maxY = 0;
  let rawHasContent = false;
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (mask[y * width + x] === 0) {
        rawHasContent = true;
        if (x < minX) minX = x; if (x > maxX) maxX = x;
        if (y < minY) minY = y; if (y > maxY) maxY = y;
      }
    }
  }

  if (!rawHasContent) throw new Error('No content detected');

  // Trim edges with very low pixel density (prevents single noise pixels from expanding the container)
  const getDensity = (dim: 'x' | 'y', pos: number) => {
    let count = 0;
    if (dim === 'y') {
      for (let x = minX; x <= maxX; x++) if (mask[pos * width + x] === 0) count++;
      return count / (maxX - minX + 1);
    } else {
      for (let y = minY; y <= maxY; y++) if (mask[y * width + pos] === 0) count++;
      return count / (maxY - minY + 1);
    }
  };

  const TRIM_THRESHOLD = 0.08; // 8% density threshold to be considered "part of core"
  while (minY < maxY && getDensity('y', minY) < TRIM_THRESHOLD) minY++;
  while (maxY > minY && getDensity('y', maxY) < TRIM_THRESHOLD) maxY--;
  while (minX < maxX && getDensity('x', minX) < TRIM_THRESHOLD) minX++;
  while (maxX > minX && getDensity('x', maxX) < TRIM_THRESHOLD) maxX--;

  const subjectW = maxX - minX + 1;
  const subjectH = maxY - minY + 1;

  // 2. Ultra-Precision Grid Detection
  const findFundamentalSize = () => {
    const counts: Record<number, number> = {};
    const samples = 40;
    
    // Sample horizontal runs
    for (let i = 0; i < samples; i++) {
      const sy = Math.floor(minY + subjectH * (0.1 + 0.8 * (i / samples)));
      let len = 0;
      let lastColorIdx = -1;
      for (let x = minX; x <= maxX; x++) {
        const idx = (sy * width + x) * 4;
        if (mask[sy * width + x] === 1) {
          if (len > 3) counts[len] = (counts[len] || 0) + 1;
          len = 0; continue;
        }
        if (lastColorIdx === -1) { lastColorIdx = idx; len = 1; }
        else {
          const diff = Math.abs(data[idx] - data[lastColorIdx]) + Math.abs(data[idx+1] - data[lastColorIdx+1]) + Math.abs(data[idx+2] - data[lastColorIdx+2]);
          if (diff < 30) len++;
          else { if (len > 3) counts[len] = (counts[len] || 0) + 1; len = 1; lastColorIdx = idx; }
        }
      }
      if (len > 3) counts[len] = (counts[len] || 0) + 1;
    }

    // Sample vertical runs to reinforce squareness
    for (let i = 0; i < samples; i++) {
      const sx = Math.floor(minX + subjectW * (0.1 + 0.8 * (i / samples)));
      let len = 0;
      let lastColorIdx = -1;
      for (let y = minY; y <= maxY; y++) {
        const idx = (y * width + sx) * 4;
        if (mask[y * width + sx] === 1) {
          if (len > 3) counts[len] = (counts[len] || 0) + 1;
          len = 0; continue;
        }
        if (lastColorIdx === -1) { lastColorIdx = idx; len = 1; }
        else {
          const diff = Math.abs(data[idx] - data[lastColorIdx]) + Math.abs(data[idx+1] - data[lastColorIdx+1]) + Math.abs(data[idx+2] - data[lastColorIdx+2]);
          if (diff < 30) len++;
          else { if (len > 3) counts[len] = (counts[len] || 0) + 1; len = 1; lastColorIdx = idx; }
        }
      }
      if (len > 3) counts[len] = (counts[len] || 0) + 1;
    }

    const fuzzyCounts: Record<number, number> = {};
    Object.entries(counts).forEach(([sizeStr, count]) => {
      const size = Number(sizeStr);
      for (let offset = -2; offset <= 2; offset++) {
        const target = size + offset;
        fuzzyCounts[target] = (fuzzyCounts[target] || 0) + count * (3 - Math.abs(offset));
      }
    });

    let bestSize = Math.max(subjectW, subjectH) / 16;
    let maxV = 0;
    Object.entries(fuzzyCounts).forEach(([s, v]) => { if (v > maxV) { maxV = v; bestSize = Number(s); } });
    return bestSize;
  };

  const detectedBaseGrid = findFundamentalSize();
  
  // Exact rounding with no bias 
  const gridW = Math.min(16, Math.max(1, Math.round(subjectW / detectedBaseGrid)));
  const gridH = Math.min(16, Math.max(1, Math.round(subjectH / detectedBaseGrid)));

  const cellW = subjectW / gridW;
  const cellH = subjectH / gridH;

  // 3. Perfect Alignment
  const offsetX = Math.floor((16 - gridW) / 2);
  const offsetY = 16 - gridH; // Bottom align items

  const canvas16 = document.createElement('canvas');
  canvas16.width = 16;
  canvas16.height = 16;
  const ctx16 = canvas16.getContext('2d', { alpha: true })!;
  ctx16.clearRect(0, 0, 16, 16);

  for (let gy = 0; gy < gridH; gy++) {
    for (let gx = 0; gx < gridW; gx++) {
      const targetX = gx + offsetX;
      const targetY = gy + offsetY;
      if (targetX < 0 || targetX >= 16 || targetY < 0 || targetY >= 16) continue;

      const centerX = minX + (gx + 0.5) * cellW;
      const centerY = minY + (gy + 0.5) * cellH;
      
      let rTotal = 0, gTotal = 0, bTotal = 0, aTotal = 0, count = 0;
      const radius = Math.max(1, Math.floor(Math.min(cellW, cellH) * 0.1));
      
      for (let dy = -radius; dy <= radius; dy++) {
        for (let dx = -radius; dx <= radius; dx++) {
          const sx = Math.floor(centerX + dx);
          const sy = Math.floor(centerY + dy);
          if (sx < 0 || sx >= width || sy < 0 || sy >= height) continue;
          if (mask[sy * width + sx] === 1) continue;

          const idx = (sy * width + sx) * 4;
          const a = data[idx + 3];
          if (a < 80) continue; 

          rTotal += data[idx];
          gTotal += data[idx + 1];
          bTotal += data[idx + 2];
          aTotal += a;
          count++;
        }
      }
      
      if (count > 0 && aTotal / count > 80) {
        const finalR = Math.round(rTotal / count);
        const finalG = Math.round(gTotal / count);
        const finalB = Math.round(bTotal / count);
        ctx16.fillStyle = `rgb(${finalR}, ${finalG}, ${finalB})`;
        ctx16.fillRect(targetX, targetY, 1, 1);
      }
    }
  }

  // 4. Upscale for display
  const canvas2048 = document.createElement('canvas');
  canvas2048.width = 2048;
  canvas2048.height = 2048;
  const ctx2048 = canvas2048.getContext('2d')!;
  ctx2048.imageSmoothingEnabled = false;
  ctx2048.drawImage(canvas16, 0, 0, 2048, 2048);

  return {
    base64_16: canvas16.toDataURL('image/png'),
    base64_2048: canvas2048.toDataURL('image/png'),
    gridSize: detectedBaseGrid,
    detectedDimensions: { w: gridW, h: gridH }
  };
}

function loadImage(blob: Blob): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = URL.createObjectURL(blob);
  });
}

function getPixel(data: Uint8ClampedArray, x: number, y: number, width: number) {
  const idx = (y * width + x) * 4;
  return { r: data[idx], g: data[idx + 1], b: data[idx + 2], a: data[idx + 3] };
}
