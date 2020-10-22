const test = document.querySelector(".test");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll("nav-links li");

test.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  })
});
