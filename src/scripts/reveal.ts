export function initReveals() {
  const elements = document.querySelectorAll<HTMLElement>('[data-reveal]');
  if (
    window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
    !('IntersectionObserver' in window)
  ) {
    elements.forEach((el) => el.classList.add('visible'));
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries)
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
    },
    { threshold: 0.07, rootMargin: '0px 0px -35px 0px' },
  );
  elements.forEach((el) => observer.observe(el));
}
