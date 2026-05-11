const hamburger =
    document.querySelector(".hamburger");

  const navLinks =
    document.querySelector(".nav-links");

  hamburger.addEventListener(
    "click",
    () => {
      navLinks.classList.toggle("active");
    }
  );

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
