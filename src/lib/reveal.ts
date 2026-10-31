/** IntersectionObserver scroll reveal — once, threshold .15, honors reduced motion.
 *  Content is visible without JS: the hidden start state only applies under html.js. */
export function reveal(node: HTMLElement, opts: { delay?: number } = {}) {
  const reduce = typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || typeof IntersectionObserver === 'undefined') { node.classList.add('in'); return {}; }
  node.classList.add('rv');
  if (opts.delay) node.style.transitionDelay = `${opts.delay}ms`;
  const io = new IntersectionObserver((es) => {
    for (const e of es) if (e.isIntersecting) { node.classList.add('in'); io.disconnect(); }
  }, { threshold: 0.15 });
  io.observe(node);
  return { destroy: () => io.disconnect() };
}
