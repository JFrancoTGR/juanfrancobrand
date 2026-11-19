export function initMobileSideNav() {
  const root = document.querySelector<HTMLElement>('#mobile-side-nav');

  const toggle =
    document.querySelector<HTMLButtonElement>('#mobile-nav-toggle');

  const backdrop = document.querySelector<HTMLButtonElement>(
    '#mobile-nav-backdrop',
  );

  const nav = document.querySelector<HTMLElement>('#mobile-nav-links');

  if (!root || !toggle || !backdrop || !nav) return;

  const mobileQuery = window.matchMedia('(max-width: 780px)');

  const links = Array.from(nav.querySelectorAll<HTMLAnchorElement>('a'));

  const setExpanded = (expanded: boolean, restoreFocus = false) => {
    const nextState = expanded && mobileQuery.matches;

    root.dataset.expanded = String(nextState);

    toggle.setAttribute('aria-expanded', String(nextState));

    toggle.setAttribute(
      'aria-label',
      nextState ? 'Colapsar menú' : 'Expandir menú',
    );

    document.documentElement.classList.toggle('mobile-nav-expanded', nextState);

    if (restoreFocus) {
      toggle.focus({ preventScroll: true });
    }
  };

  /* TOGGLE */

  toggle.addEventListener('click', () => {
    const expanded = root.dataset.expanded === 'true';

    setExpanded(!expanded);
  });

  /* OUTSIDE CLICK */

  backdrop.addEventListener('click', () => {
    setExpanded(false, true);
  });

  /* NAVIGATION */

  links.forEach((link) => {
    link.addEventListener('click', () => {
      setExpanded(false);
    });
  });

  /* KEYBOARD */

  document.addEventListener('keydown', (event) => {
    if (root.dataset.expanded !== 'true') return;

    if (event.key === 'Escape') {
      setExpanded(false, true);
      return;
    }

    if (event.key !== 'Tab') return;

    const first = toggle;
    const last = links[links.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last?.focus();
    }

    if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });

  /* RESPONSIVE RESET */

  mobileQuery.addEventListener('change', () => {
    setExpanded(false);
  });
}
