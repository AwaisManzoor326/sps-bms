let chartJsLoadPromise = null;

export default function loadChartJs() {
  if (window.Chart) return Promise.resolve();
  if (chartJsLoadPromise) return chartJsLoadPromise;

  chartJsLoadPromise = new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/chart.js';
    script.async = true;
    script.onload = resolve;
    script.onerror = reject;
    document.body.appendChild(script);
  });

  return chartJsLoadPromise;
}
