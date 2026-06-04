document.querySelectorAll(".service-card").forEach((card) => {
  card.addEventListener("pointerdown", () => {
    card.classList.add("is-active");
  });

  ["pointerup", "pointercancel", "pointerleave"].forEach((eventName) => {
    card.addEventListener(eventName, () => {
      card.classList.remove("is-active");
    });
  });
});
