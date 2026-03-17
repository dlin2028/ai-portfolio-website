export function inView(node: Element, options: { threshold?: number } = {}) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          node.dispatchEvent(new CustomEvent('inview'));
          observer.unobserve(node);
        }
      });
    },
    { threshold: options.threshold ?? 0.15 }
  );

  observer.observe(node);

  return {
    destroy() {
      observer.disconnect();
    }
  };
}
