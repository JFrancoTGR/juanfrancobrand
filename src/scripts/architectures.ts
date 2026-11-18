import { architectures } from '../data/architectures';

export function initArchitectureExplorers() {
  document
    .querySelectorAll<HTMLElement>('[data-architecture-explorer]')
    .forEach((root) => {
      const buttons = root.querySelectorAll<HTMLButtonElement>('[data-flow]');
      const nodes = root.querySelectorAll<HTMLElement>('[data-flow-node]');
      const caption = root.querySelector<HTMLElement>('[data-flow-caption]');
      const pattern = root.querySelector<HTMLElement>('[data-flow-pattern]');
      if (!caption || !pattern) return;
      buttons.forEach((button) =>
        button.addEventListener('click', () => {
          const scenario = architectures.find(
            (item) => item.id === button.dataset.flow,
          );
          if (!scenario || scenario.nodes.length !== nodes.length) return;
          nodes.forEach((node, index) => {
            const label = node.querySelector('[data-flow-label]');
            const value = node.querySelector('[data-flow-name]');
            if (label) label.textContent = scenario.nodes[index].eyebrow;
            if (value) value.textContent = scenario.nodes[index].title;
          });
          caption.textContent = scenario.caption;
          pattern.textContent = scenario.label;
          buttons.forEach((btn) =>
            btn.setAttribute('aria-pressed', String(btn === button)),
          );
        }),
      );
    });
}
