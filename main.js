import { data } from "./data.js";

const buttons = document.querySelectorAll(".tab-btn");

const emailInput = document.getElementById("email-input");
const errorMsg = document.getElementById("error-msg");

const btnOpen = document.getElementById("btn-open");
const btnClose = document.getElementById("btn-close");
const navList = document.getElementById("nav-list");

function handleData(index) {
  const myData = data[index];

  const featureTitle = document.getElementById("feature-title");
  const featureSubtitle = document.getElementById("feature-subtitle");

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

btnOpen.addEventListener("click", () => {
  navList.classList.add("translate-y-[0%]");
  document.body.classList.add("overflow-hidden");
});

btnClose.addEventListener("click", () => {
  navList.classList.remove("translate-y-[0%]");
  document.body.classList.remove("overflow-hidden");
});

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showError() {
  errorMsg.classList.remove("opacity-0", "-translate-y-6", "max-h-0");
  errorMsg.classList.add("opacity-100", "translate-y-0", "max-h-20");
  emailInput.classList.add("border-accent", "rounded-b-none", "border-2");
}

function hideError() {
  errorMsg.classList.add("opacity-0", "-translate-y-6", "max-h-0");
  errorMsg.classList.remove("opacity-100", "translate-y-0", "max-h-20");
  emailInput.classList.remove("border-accent", "border-2");
}

emailInput.addEventListener("blur", () => {
  const value = emailInput.value.trim();

  if (value === "" || !isValidEmail(value)) {
    showError();
  } else {
    hideError();
  }
});
