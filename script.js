"use strict";
document.addEventListener("DOMContentLoaded", function () {
  let slideIndex = 0;
  showSlides();

  function showSlides() {
    let slides = document
      .getElementsByClassName("slideshow")[0]
      .getElementsByTagName("img");
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 1500);
  }
});

const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");
const modal = document.querySelector(".modal");
const modalTitle = document.getElementById("modal-title");
const modalContent = document.getElementById("modal-content");

function openModal(platform) {
  let title, content;
  switch (platform) {
    case "instagram":
      title = "Instagram";
      content = "Посилання на наш інстаграм:";
      break;
    case "pinterest":
      title = "Pinterest";
      content = "Посилання на наш пінтерест:";
      break;
    case "telegram":
      title = "Telegram";
      content = "Посилання на наш телеграм:";
      break;
  }
  modalTitle.textContent = title;
  modalContent.textContent = content;
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

function closeModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

btnsOpenModal.forEach((button) => {
  button.addEventListener("click", () => {
    const platform = button.getAttribute("data-platform");
    openModal(platform);
  });
});

overlay.addEventListener("click", closeModal);
btnCloseModal.addEventListener("click", closeModal);

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
