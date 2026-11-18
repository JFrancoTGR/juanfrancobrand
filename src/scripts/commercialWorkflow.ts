import { commercialWorkflow } from '../data/commercialWorkflow';

export function initCommercialWorkflows() {
  const workflows = document.querySelectorAll<HTMLElement>(
    '[data-commercial-workflow]',
  );

  workflows.forEach((root) => {
    const buttons = root.querySelectorAll<HTMLButtonElement>(
      '[data-workflow-step]',
    );

    const counter = root.querySelector<HTMLElement>('[data-workflow-counter]');

    const headline = root.querySelector<HTMLElement>(
      '[data-workflow-headline]',
    );

    const context = root.querySelector<HTMLElement>('[data-workflow-context]');

    const automation = root.querySelector<HTMLElement>(
      '[data-workflow-automation]',
    );

    const human = root.querySelector<HTMLElement>('[data-workflow-human]');

    const technology = root.querySelector<HTMLElement>(
      '[data-workflow-technology]',
    );

    const outcome = root.querySelector<HTMLElement>('[data-workflow-outcome]');

    if (
      !counter ||
      !headline ||
      !context ||
      !automation ||
      !human ||
      !technology ||
      !outcome
    ) {
      return;
    }

    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        const index = commercialWorkflow.findIndex(
          (step) => step.id === button.dataset.workflowStep,
        );

        if (index === -1) return;

        const step = commercialWorkflow[index];

        // UPDATE CONTENT

        counter.textContent =
          `${String(index + 1).padStart(2, '0')} / ` +
          `${String(commercialWorkflow.length).padStart(2, '0')}`;

        headline.textContent = step.headline;
        context.textContent = step.context;

        automation.textContent = step.automation;
        human.textContent = step.human;
        technology.textContent = step.technology;
        outcome.textContent = step.outcome;

        // UPDATE ACTIVE STATE

        buttons.forEach((item) => {
          item.setAttribute('aria-pressed', String(item === button));
        });
      });
    });
    // NEXT STEP CONTROL

    const nextButton = root.querySelector<HTMLButtonElement>(
      '[data-workflow-next]',
    );

    nextButton?.addEventListener('click', () => {
      if (!buttons.length) return;

      // Find current active step

      const currentIndex = Array.from(buttons).findIndex(
        (button) => button.getAttribute('aria-pressed') === 'true',
      );

      // Calculate next step

      const nextIndex = (currentIndex + 1) % buttons.length;

      const nextStep = buttons[nextIndex];

      if (!nextStep) return;

      // Reuse existing tab interaction

      nextStep.click();

      // Keep selected tab visible on mobile

      const navigation =
        root.querySelector<HTMLOListElement>('.workflow-steps');

      if (navigation && navigation.scrollWidth > navigation.clientWidth) {
        const navRect = navigation.getBoundingClientRect();
        const stepRect = nextStep.getBoundingClientRect();

        navigation.scrollTo({
          left: navigation.scrollLeft + stepRect.left - navRect.left - 12,

          behavior: window.matchMedia('(prefers-reduced-motion: reduce)')
            .matches
            ? 'auto'
            : 'smooth',
        });
      }
    });
  });
}
