import { animate, inView } from "https://cdn.jsdelivr.net/npm/motion@14.10.1/+esm";

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const introBlocks = document.querySelectorAll(".portfolio-page .post-content > *:not(.portfolio-list)");
const projectBlocks = document.querySelectorAll(".portfolio-page .portfolio-project");

if (prefersReducedMotion) {
  [...introBlocks, ...projectBlocks].forEach((element) => {
    element.style.opacity = "1";
  });
} else {
  introBlocks.forEach((element, index) => {
    animate(
      element,
      { opacity: [0, 1], y: [16, 0] },
      {
        duration: 0.65,
        delay: index * 0.08,
        ease: "easeOut",
      },
    );
  });

  projectBlocks.forEach((element) => {
    inView(element, () => {
      if (element.dataset.motionAnimated === "true") {
        return;
      }

      element.dataset.motionAnimated = "true";
      animate(
        element,
        { opacity: [0, 1], y: [16, 0] },
        {
          duration: 0.65,
          ease: "easeOut",
        },
      );
    }, { amount: 0.2 });
  });
}
