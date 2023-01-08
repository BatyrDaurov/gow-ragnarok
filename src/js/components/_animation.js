import { isMobile } from "./../functions/check-viewport";

const heroTimeline = gsap.timeline();

heroTimeline
  .fromTo(
    ".hero__title",
    {
      y: 100,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
    },
    0.5
  )
  .fromTo(
    ".hero__text",
    {
      y: 80,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
    },
    0.9
  )
  .fromTo(
    ".hero__links",
    {
      y: 25,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
    },
    1.6
  )
  .fromTo(
    ".hero__poster",
    {
      x: 25,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      duration: 1,
    }
  );

gsap.from(".characters", {
  scrollTrigger: {
    trigger: ".main",
    start: "-5% center",
    end: "+=300px",
  },
  opacity: 0,
});

gsap.fromTo(
  ".history__container",
  {
    scrollTrigger: {
      trigger: ".history",
      start: "top center",
    },
    opacity: 0,
    y: -20,
  },
  {
    scrollTrigger: {
      trigger: ".history",
      start: "top center",
    },
    opacity: 1,
    y: 0,
  }
);
