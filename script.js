//   hero section
const text = "Web Developer & Website Support";
const typingText = document.getElementById("typing-text");

let index = 0;

function typeEffect() {
  if (index < text.length) {
    typingText.textContent += text.charAt(index);
    index++;

    setTimeout(typeEffect, 120);
  }
}

typeEffect();

// TEST
const swiper = new Swiper('.swiper', {
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
// gallery
new Swiper('.swiper', {
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});