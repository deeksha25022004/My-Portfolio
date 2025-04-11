//Navbar Effect
window.addEventListener("scroll", function () {
  const navbar = document.querySelector("nav");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

//Light_Dark Mode
const modeToggle = document.getElementById("modeToggle");

modeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
});

// Smooth visiting IDs or div
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});
// Mobile View
function openNav() {
  document.querySelector(".mobile-menu").style.right = "0rem";
}

function closeNav() {
  document.querySelector(".mobile-menu").style.right = "-16rem";
}

//typed text
var typed = new Typed(".hero-title", {
  strings: ["Data Scientist", "ML Explorer", "Analytics Lover"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});
