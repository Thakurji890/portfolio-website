// Using js to go to the projects

const projectButtons = document.querySelectorAll(".project-btn");
projectButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const link = button.getAttribute("data-link");
    window.open(link, "_blank");
  });
});

// typing Animation
const text = ["Java Devloper", "Web Devloper", "Software Devloper"];
let count = 0;
let currentText = "";
let letter = "";
let index = 0;
(function type() {
  if (count === text.length) {
    count = 0;
  }
  currentText = text[count];
  letter = currentText.slice(0, ++index);
  document.getElementById("typing").textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    index = 0;
  }
  setTimeout(type, 200);
})();

// Adding Scroll Reveal Animation

const observer = new IntersectionObserver((entrie) => {
  entrie.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});
const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => {
  observer.observe(el);
});
