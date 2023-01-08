import _vars from "../_vars";

const loreInfo = [
  {
    title: "Lute in the Nordic Kingdom",
    paragraphs: [
      "With revenge against the gods of Olympus in the distant past, Kratos now lives as a mortal in the realm of Norse gods and monsters.",
      "It is in this harsh, unforgiving world that he must fight to survive... and teach his son to do the same.",
    ],
  },
  {
    title: "84 types of enemies",
    paragraphs: [
      "God of War Ragnarok pits Kratos and Atreus against countless foes, powerful beasts, and mighty gods. Fortunately, Kratos and Atreus have impressive weapons and abilities at their disposal.",
      "Enemies in God of War all have their own unique attack abilities and weaknesses. There are also visual aids to help you in combat.",
    ],
  },
  {
    title: "Kratos and Atreus",
    paragraphs: [
      "So, what kind of father should Kratos be? He can hardly be a gentle and loving parent. This is a cruel warrior who used the severed head of Helios as a lantern.",
      "It took a long time for the formation of a new, more mature, personality of Kratos. At first, the writing team was not always able to stick to the right line.",
    ],
  },
];

export const animateTextIn = (value) => {
  const historyTimeline = gsap.timeline();
  const context = loreInfo[value - 1];

  _vars.historyInfo.innerHTML = "";
  _vars.historyInfo.insertAdjacentHTML(
    "beforeend",
    `
    <h1 class="history__title">${context.title}</h1>
    <div class="history__text">
      ${context.paragraphs.map((el) => `<p>${el}</p>`).join("")}
    </div>`
  );
  historyTimeline
    .fromTo(
      ".history__title",
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
      },
      0
    )
    .fromTo(
      ".history__text",
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
      },
      0.45
    );
};
