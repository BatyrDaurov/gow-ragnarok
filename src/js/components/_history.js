import { animateTextIn } from "../functions/animateHistoryLore";
import _vars from "../_vars";

_vars.historyLore.forEach((el) => {
  const value = el.getAttribute("data-history-value");
  el.addEventListener("click", (e) => {
    animateTextIn(value);
  });
});
