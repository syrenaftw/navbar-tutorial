const bar = document.querySelector(".bar");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

bar.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});