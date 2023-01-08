import vars from "../_vars";

export const enableScroll = () => {
  vars.bodyEl.style.overflow = "";
  document
    .querySelector("#filter-black-right")
    .classList.remove("visually-hidden");
  document.querySelector("#filter-black").classList.remove("visually-hidden");
  vars.hero.classList.remove("visually-hidden");
};
