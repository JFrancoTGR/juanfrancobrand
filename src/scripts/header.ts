import { navigation } from '../data/site';

export function initHeader() {
  const header = document.querySelector<HTMLElement>('#site-header');
  const toggle = document.querySelector<HTMLButtonElement>('#menu-toggle');
  const nav = document.querySelector<HTMLElement>('#nav-links');
  const progress = document.querySelector<HTMLElement>('#top-progress');
  if (!header || !toggle || !nav || !progress) return;

  const setMenuOpen = (open: boolean) => {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    nav.classList.toggle('open', open);
  };
  toggle.addEventListener('click', () =>
    setMenuOpen(toggle.getAttribute('aria-expanded') !== 'true'),
  );
  nav
    .querySelectorAll<HTMLAnchorElement>('a')
    .forEach((link) =>
      link.addEventListener('click', () => setMenuOpen(false)),
    );
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setMenuOpen(false);
  });

  const sections = navigation
    .map((item) => document.querySelector<HTMLElement>(item.href))
    .filter((el): el is HTMLElement => !!el);
  let scheduled = false;
  const renderScroll = () => {
    const y = window.scrollY;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = `${max > 0 ? Math.min(100, Math.max(0, (y / max) * 100)) : 0}%`;
    header.classList.toggle('scrolled', y > 20);
    const probe = y + window.innerHeight * 0.36;
    let active = '';
    for (const section of sections)
      if (probe >= section.offsetTop) active = section.id;
    nav
      .querySelectorAll<HTMLAnchorElement>('.nav-link')
      .forEach((link) =>
        link.classList.toggle('active', link.hash === `#${active}`),
      );
    scheduled = false;
  };
  window.addEventListener(
    'scroll',
    () => {
      if (!scheduled) {
        scheduled = true;
        requestAnimationFrame(renderScroll);
      }
    },
    { passive: true },
  );
  window.addEventListener('resize', renderScroll, { passive: true });
  renderScroll();
}
