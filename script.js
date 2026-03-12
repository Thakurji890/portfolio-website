// Smooth scrolling

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Project button intractive

const buttons = document.querySelectorAll(".project-btn");
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    alert("project details coming soon");
  });
});
