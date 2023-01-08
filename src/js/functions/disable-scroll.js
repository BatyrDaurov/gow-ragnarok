import vars from "../_vars";

export const disableScroll = () => {
  vars.bodyEl.style.overflow = "hidden";
  document
    .querySelector("#filter-black-right")
    .classList.add("visually-hidden");
  document.querySelector("#filter-black").classList.add("visually-hidden");
  vars.hero.classList.add("visually-hidden");
};
