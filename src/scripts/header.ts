import { navigation } from '../data/site';

export function initHeader() {
  const header = document.querySelector<HTMLElement>('#site-header');

  const progress = document.querySelector<HTMLElement>('#top-progress');

  if (!header || !progress) return;

  const sections = navigation
    .map((item) => document.querySelector<HTMLElement>(item.href))
    .filter((element): element is HTMLElement => !!element);

  const navLinks = document.querySelectorAll<HTMLAnchorElement>(
    '.nav-link, .mobile-nav-link',
  );

  let scheduled = false;

  const renderScroll = () => {
    const y = window.scrollY;

    const max = document.documentElement.scrollHeight - window.innerHeight;

    progress.style.width = `${
      max > 0 ? Math.min(100, Math.max(0, (y / max) * 100)) : 0
    }%`;

    header.classList.toggle('scrolled', y > 20);

    const probe = y + window.innerHeight * 0.36;

    let active = '';

    for (const section of sections) {
      if (probe >= section.offsetTop) {
        active = section.id;
      }
    }

    navLinks.forEach((link) => {
      const isActive = link.hash === `#${active}`;

      link.classList.toggle('active', isActive);

      if (isActive) {
        link.setAttribute('aria-current', 'location');
      } else {
        link.removeAttribute('aria-current');
      }
    });

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
