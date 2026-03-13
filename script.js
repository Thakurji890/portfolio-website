// Using js to go to the projects

const projectButtons = document.querySelectorAll(".project-btn");
projectButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const link = button.getAttribute("data-link");
    window.open(link, "_blank");
  });
});
