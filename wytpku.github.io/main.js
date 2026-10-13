"use strict";

document.querySelectorAll("[data-year]").forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});

document.querySelector("[data-print]")?.addEventListener("click", () => {
  window.print();
});
