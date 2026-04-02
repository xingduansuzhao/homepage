// Simple runtime feature flags (no build step).
// Set to `false` to disable the homepage entry (keeps the tool page accessible via direct URL).
window.__ENV__ = window.__ENV__ || {};
window.__ENV__.ENABLE_PIXEL_CONVERTER_ENTRANCE = false;

