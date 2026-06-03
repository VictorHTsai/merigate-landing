const form = document.querySelector("#inquiry-form");
const status = document.querySelector("#form-status");

if (form && status) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    status.textContent = "已收到你的諮詢需求示意。正式上線前，這裡會接上表單或自動化流程。";
    form.reset();
  });
}

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
