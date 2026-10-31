/** Scroll reveal — once, threshold .15, rootMargin 80px; honors reduced motion.
 *  Hidden start state only applies under html.js (see app.css), so no-JS shows all content. */
export function reveal(node: HTMLElement, opts: { delay?: number } = {}) {
  const reduce = typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches;
  const show = () => node.classList.add('in');
  if (reduce || typeof IntersectionObserver === 'undefined') { show(); return {}; }
  const near = () => { const r = node.getBoundingClientRect(); return r.top < innerHeight + 80 && r.bottom > -80; };
  if (near()) { show(); return {}; }
  node.classList.add('rv');
  if (opts.delay) node.style.transitionDelay = `${opts.delay}ms`;
  const io = new IntersectionObserver((es) => {
    for (const e of es) if (e.isIntersecting) { show(); io.disconnect(); }
  }, { threshold: 0.15, rootMargin: '80px 0px' });
  io.observe(node);
  requestAnimationFrame(() => { if (near()) { show(); io.disconnect(); } });
  return { destroy: () => io.disconnect() };
}
