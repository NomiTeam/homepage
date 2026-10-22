'use strict';

(() => {
  const root = document.documentElement;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  // Native cross-document transitions handle history navigation where available.
  const nativeTransitions = 'onpagereveal' in window && typeof CSS !== 'undefined'
    && CSS.supports('view-transition-name', 'root');
  let leaving = false;
  let resetTimer;
  const reset = () => {
    leaving = false;
    window.clearTimeout(resetTimer);
    root.classList.remove('page-leaving', 'page-entering');
  };
  window.addEventListener('pageshow', () => {
    reset();
    if (!nativeTransitions && !reducedMotion.matches) {
      root.classList.add('page-entering');
    }
  });
  document.addEventListener('click', (event) => {
    if (nativeTransitions || reducedMotion.matches || event.defaultPrevented
      || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const link = event.target instanceof Element ? event.target.closest('a[href]') : null;
    if (!link || link.hasAttribute('download') || (link.target && link.target !== '_self')) return;
    const destination = new URL(link.href, window.location.href);
    const current = new URL(window.location.href);
    if (destination.origin !== current.origin
      || !['http:', 'https:', 'file:'].includes(destination.protocol)
      || destination.pathname === current.pathname) return;
    // Only enhance the two real documents; all other links retain browser behavior.
    const page = destination.pathname.split('/').pop();
    if (!['', 'index.html', 'wiki.html'].includes(page)) return;
    event.preventDefault();
    if (leaving) return;
    leaving = true;
    root.classList.remove('page-entering');
    root.classList.add('page-leaving');
    window.setTimeout(() => {
      window.location.assign(destination.href);
      // Restore the current document if navigation is cancelled or fails.
      resetTimer = window.setTimeout(reset, 1000);
    }, 140);
  });
})();
