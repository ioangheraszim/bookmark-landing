import { data } from "./data.js";

const buttons = document.querySelectorAll(".tab-btn");

function handleData(index) {
  const myData = data[index];

  const featureTitle = document.getElementById("feature-title");
  const featureSubtitle = document.getElementById("feature-subtitle");

  // featureTitle.textContent = myData.title;
  // featureSubtitle.textContent = myData.description;

  featureTitle.classList.add("opacity-0");
  featureSubtitle.classList.add("opacity-0");

  setTimeout(() => {
    featureTitle.textContent = myData.title;
    featureSubtitle.textContent = myData.description;

    featureTitle.classList.remove("opacity-0");
    featureTitle.classList.add("opacity-100");

    featureSubtitle.classList.remove("opacity-0");
    featureSubtitle.classList.add("opacity-50");
  }, 300);
}

buttons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    buttons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    handleData(index);
  });
});

document.querySelectorAll(".faq-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const content = btn.nextElementSibling;
    const arrowImg = btn.querySelector(".faq-arrow");

    const isClosed = content.classList.contains("max-h-0");

    content.classList.toggle("max-h-0", !isClosed);
    content.classList.toggle("max-h-40", isClosed);

    arrowImg.classList.toggle("rotate-180", isClosed);
  });
});
