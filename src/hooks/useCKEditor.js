import { useEffect, useRef } from 'react';

let ckeditorLoadPromise = null;

function loadCKEditorScript(src) {
  if (window.CKEDITOR) return Promise.resolve();
  if (ckeditorLoadPromise) return ckeditorLoadPromise;

  ckeditorLoadPromise = new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    script.onload = resolve;
    script.onerror = reject;
    document.body.appendChild(script);
  });

  return ckeditorLoadPromise;
}

/**
 * Loads CKEditor 4 from the CDN (same version/CDN the original PHP pages used)
 * and replaces the textarea with the given id, using the given config.
 * Cleans up the instance on unmount.
 */
export default function useCKEditor(editorId, config, scriptSrc = 'https://cdn.ckeditor.com/4.22.1/standard/ckeditor.js') {
  const initialized = useRef(false);

  useEffect(() => {
    let cancelled = false;
    initialized.current = false;

    loadCKEditorScript(scriptSrc).then(() => {
      if (cancelled || !window.CKEDITOR) return;
      if (window.CKEDITOR.instances[editorId]) {
        window.CKEDITOR.instances[editorId].destroy(true);
      }
      window.CKEDITOR.replace(editorId, config);
      initialized.current = true;
    });

    return () => {
      cancelled = true;
      if (window.CKEDITOR && window.CKEDITOR.instances[editorId]) {
        window.CKEDITOR.instances[editorId].destroy(true);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editorId]);
}
