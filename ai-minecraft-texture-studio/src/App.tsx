/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useCallback, useRef, DragEvent, ChangeEvent, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Upload, 
  Download, 
  RefreshCcw, 
  CheckCircle2, 
  AlertCircle, 
  Image as ImageIcon,
  Grid3X3,
  Globe,
  Monitor,
  Info
} from 'lucide-react';
import { processAiTexture, ProcessedResult } from './lib/imageProcessor';

type Language = 'zh-CN' | 'zh-TW' | 'en';

const translations = {
  'zh-CN': {
    title: 'MC 像素材质工作室',
    subtitle: '让 AI 灵感 完美对齐',
    heroBadge: '精准像素处理技术',
    heroDesc: '我们的中心采样算法能够从 AI 生成的像素艺术中提取真实意图，消除模糊和错位，生成生产级别的 Minecraft 材质。',
    dropZoneTitle: '将图片拖放到此处',
    dropZoneSub: '或点击浏览文件',
    processing: '像素处理中...',
    complete: '处理完成。像素边缘锐利。',
    analysisDetails: '分析详情',
    gridSize: '检测网格大小',
    detectedSize: '物品逻辑尺寸',
    startNew: '开始新项目',
    noPreview: '暂无预览',
    previewSub: '上传图片即可实时见证像素提取魔法。',
    inputMedia: '原始媒介',
    aiGenerated: 'AI 生成',
    outputResult: '处理结果',
    gridAligned: '网格对齐',
    zoomView: '2048x 缩放视图',
    trueItem: '真实 16x16 物品',
    active: '系统活跃',
    gpu: 'GPU 加速',
    tip1Title: '自动抠图',
    tip1Desc: '自动识别四个角颜色背景并瞬间移除，防止误伤主体内部颜色。',
    tip2Title: '智能重心对齐',
    tip2Desc: '根据 Minecraft 物品标准，自动计算偏移量，确保物品在 16x16 网格内完美居中或贴边。',
    tip3Title: '无损导出',
    tip3Desc: '使用最近邻采样算法放大到 2048x，适合小红书及社交媒体展示。',
  },
  'zh-TW': {
    title: 'MC 像素材質工作室',
    subtitle: '讓 AI 靈感 完美對齊',
    heroBadge: '精準像素處理技術',
    heroDesc: '我們的中心採樣算法能夠從 AI 生成的像素藝術中提取真實意圖，消除模糊和錯位，生成生產級別的 Minecraft 材質。',
    dropZoneTitle: '將圖片拖放到此处',
    dropZoneSub: '或點擊瀏覽文件',
    processing: '像素處理中...',
    complete: '處理完成。像素邊緣銳利。',
    analysisDetails: '分析詳情',
    gridSize: '檢測網格大小',
    detectedSize: '物品邏輯尺寸',
    startNew: '開始新項目',
    noPreview: '暫無預覽',
    previewSub: '上傳圖片即可實時見證像素提取魔法。',
    inputMedia: '原始媒介',
    aiGenerated: 'AI 生成',
    outputResult: '處理結果',
    gridAligned: '網格對齊',
    zoomView: '2048x 縮放視圖',
    trueItem: '真實 16x16 物品',
    active: '系統活躍',
    gpu: 'GPU 加速',
    tip1Title: '自動摳圖',
    tip1Desc: '自動識別四個角顏色背景並瞬間移除，防止誤傷主體內部顏色。',
    tip2Title: '智能重心對齊',
    tip2Desc: '根據 Minecraft 物品標準，自動計算偏移量，確保物品在 16x16 網格內完美居中或貼邊。',
    tip3Title: '無損導出',
    tip3Desc: '使用最近鄰採樣算法放大到 2048x，適合社交媒體展示。',
  },
  'en': {
    title: 'MC Texture Studio AI',
    subtitle: 'Align AI Noise into Perfect Pixels',
    heroBadge: 'Precision Pixel Processing',
    heroDesc: 'Our center-sampling algorithm extracts the true intent from AI-generated pixel art, eliminating blur and misalignment for production-ready Minecraft textures.',
    dropZoneTitle: 'Drop your image here',
    dropZoneSub: 'or click to browse from files',
    processing: 'Processing Pixels...',
    complete: 'Processing complete. Results are crisp.',
    analysisDetails: 'Analysis Details',
    gridSize: 'Grid Size',
    detectedSize: 'Detected Size',
    startNew: 'Start New Project',
    noPreview: 'No Preview Available',
    previewSub: 'Upload an image to see the pixel extraction magic in real-time.',
    inputMedia: 'Input Media',
    aiGenerated: 'AI Generated',
    outputResult: 'Output Result',
    gridAligned: 'Grid Aligned',
    zoomView: '2048x Zoom View',
    trueItem: 'True 16x16 Item',
    active: 'System Active',
    gpu: 'GPU Accelerate',
    tip1Title: 'Auto Transparency',
    tip1Desc: 'Background detected from corner colors and removed instantly without affecting interior pixels.',
    tip2Title: 'Smart Centering',
    tip2Desc: 'Items are automatically aligned based on MC standards to be perfectly centered or bottom-fixed.',
    tip3Title: 'Crisp Export',
    tip3Desc: 'Lossless nearest-neighbor upscaling for high-quality social media presentation.',
  }
};

export default function App() {
  const [lang, setLang] = useState<Language>('zh-CN');
  const t = useMemo(() => translations[lang], [lang]);

  const [isDragging, setIsDragging] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<ProcessedResult | null>(null);
  const [originalUrl, setOriginalUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleProcess = useCallback(async (file: File) => {
    if (!file.type.startsWith('image/')) {
      setError(lang === 'en' ? 'Please upload a valid image file.' : '请上传有效的图片文件。');
      return;
    }

    setIsLoading(true);
    setError(null);
    if (originalUrl) URL.revokeObjectURL(originalUrl);
    setOriginalUrl(URL.createObjectURL(file));

    try {
      const processed = await processAiTexture(file);
      setResult(processed);
    } catch (err) {
      console.error(err);
      setError(err instanceof Error ? err.message : 'An error occurred during processing.');
    } finally {
      setIsLoading(false);
    }
  }, [lang, originalUrl]);

  const onDrop = useCallback((e: DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleProcess(e.dataTransfer.files[0]);
    }
  }, [handleProcess]);

  const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleProcess(e.target.files[0]);
    }
  };

  const reset = () => {
    setResult(null);
    setError(null);
    if (originalUrl) URL.revokeObjectURL(originalUrl);
    setOriginalUrl(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const download = (url: string, filename: string) => {
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#1A1A1A] font-sans selection:bg-orange-100 selection:text-orange-900">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 py-4 px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="bg-orange-500 p-1.5 rounded-lg active:rotate-12 transition-transform cursor-pointer" onClick={reset}>
            <Grid3X3 className="w-5 h-5 text-white" />
          </div>
          <h1 className="font-bold tracking-tight text-xl hidden sm:block">
            {t.title.split(' ')[0]} <span className="text-orange-500">{t.title.split(' ').slice(1).join(' ')}</span>
          </h1>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex bg-gray-100 p-1 rounded-xl">
            {(['zh-CN', 'zh-TW', 'en'] as Language[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider rounded-lg transition-all ${lang === l ? 'bg-white text-orange-600 shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}
              >
                {l === 'zh-CN' ? '简体中文' : l === 'zh-TW' ? '繁体中文' : 'English'}
              </button>
            ))}
          </div>
          
          <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-500">
            <a href="#" className="hover:text-orange-500 transition-colors flex items-center gap-1.5"><Monitor className="w-4 h-4" /> Showcase</a>
            <a href="#" className="hover:text-orange-500 transition-colors flex items-center gap-1.5"><Info className="w-4 h-4" /> Docs</a>
          </nav>
        </div>
      </header>

      <main className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Left Column: Info & Upload */}
          <div className="lg:w-2/5 flex flex-col gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <span className="inline-block px-3 py-1 bg-orange-50 text-orange-600 text-xs font-bold uppercase tracking-widest rounded-full mb-2">
                {t.heroBadge}
              </span>
              <h2 className="text-4xl md:text-5xl font-black leading-tight tracking-tight">
                {t.subtitle.split(' ').slice(0, -1).join(' ')} <br />
                <span className="text-orange-500 italic">{t.subtitle.split(' ').slice(-1)}</span>
              </h2>
              <p className="text-gray-500 leading-relaxed max-w-md">
                {t.heroDesc}
              </p>
            </motion.div>

            <AnimatePresence mode="wait">
              {!result ? (
                <motion.div
                  key="upload"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                  onDragLeave={() => setIsDragging(false)}
                  onDrop={onDrop}
                  className={`
                    relative group cursor-pointer
                    border-2 border-dashed rounded-3xl p-12
                    flex flex-col items-center justify-center gap-6
                    transition-all duration-300
                    ${isDragging ? 'border-orange-500 bg-orange-50 scale-[1.02]' : 'border-gray-300 bg-white hover:border-gray-400 hover:bg-gray-50'}
                  `}
                  onClick={() => fileInputRef.current?.click()}
                >
                  <input 
                    type="file" 
                    ref={fileInputRef} 
                    className="hidden" 
                    accept="image/*" 
                    onChange={onFileChange}
                  />
                  
                  <div className={`
                    p-6 rounded-full transition-all duration-300
                    ${isDragging ? 'bg-white text-orange-500 shadow-xl' : 'bg-gray-100 text-gray-400 group-hover:bg-white group-hover:text-orange-500 group-hover:shadow-lg'}
                  `}>
                    <Upload className="w-10 h-10" />
                  </div>

                  <div className="text-center">
                    <p className="text-lg font-bold">{t.dropZoneTitle}</p>
                    <p className="text-sm text-gray-400">{t.dropZoneSub}</p>
                  </div>

                  {isLoading && (
                    <div className="absolute inset-0 bg-white/80 backdrop-blur-sm rounded-3xl flex flex-col items-center justify-center gap-4 z-10 transition-all">
                      <RefreshCcw className="w-10 h-10 text-orange-500 animate-spin" />
                      <p className="font-bold text-orange-500 tracking-wider uppercase text-xs">{t.processing}</p>
                    </div>
                  )}
                </motion.div>
              ) : (
                <motion.div
                  key="controls"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm space-y-6"
                >
                  <div className="flex items-center gap-3 text-green-600 bg-green-50 p-4 rounded-2xl">
                    <CheckCircle2 className="w-5 h-5 shrink-0" />
                    <p className="text-sm font-medium">{t.complete}</p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-bold text-gray-400 uppercase tracking-widest text-xs">{t.analysisDetails}</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-4 rounded-xl border border-gray-100/50">
                        <p className="text-[10px] text-gray-400 font-black uppercase tracking-tight mb-1">{t.gridSize}</p>
                        <p className="text-xl font-black">{Math.round(result.gridSize)}px</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-xl border border-gray-100/50">
                        <p className="text-[10px] text-gray-400 font-black uppercase tracking-tight mb-1">{t.detectedSize}</p>
                        <p className="text-xl font-black">{result.detectedDimensions.w}x{result.detectedDimensions.h}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button 
                      onClick={() => download(result.base64_16, 'texture_16x16.png')}
                      className="flex-1 bg-[#1A1A1A] text-white py-4 rounded-2xl font-bold hover:bg-orange-500 transition-all active:scale-95 flex items-center justify-center gap-2 group"
                    >
                      <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" /> 16x16
                    </button>
                    <button 
                      onClick={() => download(result.base64_2048, 'texture_2048x2048.png')}
                      className="flex-1 bg-white border border-gray-200 text-[#1A1A1A] py-4 rounded-2xl font-bold hover:bg-gray-50 transition-all active:scale-95 flex items-center justify-center gap-2 group"
                    >
                      <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" /> 2048x2048
                    </button>
                  </div>

                  <button 
                    onClick={reset}
                    className="w-full text-gray-400 font-bold text-sm hover:text-orange-500 transition-colors py-2 flex items-center justify-center gap-2"
                  >
                    <RefreshCcw className="w-4 h-4" /> {t.startNew}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            {error && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 text-red-600 bg-red-50 p-4 rounded-2xl"
              >
                <AlertCircle className="w-5 h-5 shrink-0" />
                <p className="text-sm font-bold">{error}</p>
              </motion.div>
            )}
          </div>

          {/* Right Column: Visualization */}
          <div className="lg:w-3/5">
            <div className={`
              relative min-h-[500px] bg-white rounded-[40px] border border-gray-100 shadow-xl overflow-hidden
              flex flex-col transition-all duration-500
            `}>
              {!result && !isLoading ? (
                <div className="flex-1 flex flex-col items-center justify-center gap-6 p-12 text-center opacity-40">
                  <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center">
                    <ImageIcon className="w-12 h-12" />
                  </div>
                  <div className="max-w-xs">
                    <p className="text-xl font-black">{t.noPreview}</p>
                    <p className="text-sm">{t.previewSub}</p>
                  </div>
                </div>
              ) : (
                <div className="flex-1 flex flex-col md:flex-row">
                  {/* Original View */}
                  <div className="flex-1 border-r border-gray-100 flex flex-col">
                    <div className="p-6 border-b border-gray-50 flex justify-between items-center bg-gray-50/50">
                      <span className="text-[10px] font-black uppercase tracking-tighter opacity-30">{t.inputMedia}</span>
                      <span className="text-xs font-bold text-gray-400">{t.aiGenerated}</span>
                    </div>
                    <div className="flex-1 flex items-center justify-center p-8 bg-[#EFEEF1]">
                      <div className="relative group perspective-1000">
                        <motion.img 
                          layoutId="preview-img"
                          src={originalUrl || ''} 
                          alt="Input" 
                          className="max-w-full max-h-[300px] shadow-2xl rounded-sm transition-transform duration-500 group-hover:rotate-y-12"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Processed View */}
                  <div className="flex-1 flex flex-col">
                    <div className="p-6 border-b border-gray-50 flex justify-between items-center bg-gray-50/50">
                      <span className="text-[10px] font-black uppercase tracking-tighter text-orange-500">{t.outputResult}</span>
                      <span className="text-xs font-bold text-orange-500">{t.gridAligned}</span>
                    </div>
                    <div className="flex-1 flex items-center justify-center p-8 relative overflow-hidden bg-checkered">
                      <AnimatePresence mode="wait">
                        {isLoading ? (
                           <motion.div 
                            key="loader"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex flex-col items-center gap-3"
                          >
                            <div className="w-12 h-12 border-4 border-orange-500/20 border-t-orange-500 rounded-full animate-spin" />
                          </motion.div>
                        ) : result ? (
                          <motion.div
                            key="result"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="flex flex-col items-center gap-8 w-full"
                          >
                            {/* The 2048x Preview */}
                            <div className="flex flex-col items-center gap-3">
                              <div className="p-6 bg-white rounded-3xl shadow-xl border border-gray-100 group relative overflow-hidden">
                                <img 
                                  src={result.base64_2048} 
                                  alt="Result Zoom" 
                                  className="w-48 h-48 image-pixelated"
                                />
                                <div className="absolute inset-0 border-[20px] border-orange-500/5 opacity-0 group-hover:opacity-100 transition-all pointer-events-none" />
                              </div>
                              <span className="text-[10px] font-black tracking-widest text-gray-300 uppercase">{t.zoomView}</span>
                            </div>

                            {/* The True 16x16 */}
                            <div className="flex flex-col items-center gap-3">
                              <div className="p-4 bg-white rounded-xl shadow-md border border-gray-100">
                                <img 
                                  src={result.base64_16} 
                                  alt="Result 16x16" 
                                  className="w-8 h-8"
                                />
                              </div>
                              <span className="text-[10px] font-black tracking-widest text-gray-300 uppercase">{t.trueItem}</span>
                            </div>
                          </motion.div>
                        ) : null}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              )}

              {/* Footer bar for the preview card */}
              <div className="p-4 bg-gray-50 border-t border-gray-100 flex items-center justify-between px-8">
                <div className="flex items-center gap-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-green-400" /> {t.active}</div>
                  <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-orange-400" /> {t.gpu}</div>
                </div>
                <div className="flex gap-2">
                   <div className="w-1.5 h-1.5 rounded-full bg-gray-200" />
                   <div className="w-1.5 h-1.5 rounded-full bg-gray-200" />
                   <div className="w-1.5 h-1.5 rounded-full bg-gray-200" />
                </div>
              </div>
            </div>

            {/* Quick Tips */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: t.tip1Title, desc: t.tip1Desc },
                { title: t.tip2Title, desc: t.tip2Desc },
                { title: t.tip3Title, desc: t.tip3Desc }
              ].map((tip, i) => (
                <div key={i} className="flex flex-col gap-2 p-4 rounded-2xl hover:bg-white hover:shadow-sm transition-all border border-transparent hover:border-gray-100">
                  <h4 className="font-bold text-sm flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                    {tip.title}
                  </h4>
                  <p className="text-xs text-gray-500 leading-relaxed pl-3.5 border-l border-gray-100">{tip.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Decorative patterns */}
      <div className="fixed bottom-0 left-0 -z-10 w-96 h-96 bg-orange-200/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="fixed top-20 right-0 -z-10 w-64 h-64 bg-blue-100/30 blur-[100px] rounded-full pointer-events-none" />
    </div>
  );
}

