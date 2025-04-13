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
document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector(".bars");
  const mobileMenu = document.querySelector(".mobile-menu");
  const closeButton = document.querySelector(".mobile-menu-toggle");

  // Show the mobile menu
  menuButton.addEventListener("click", () => {
    mobileMenu.style.display = "flex";
  });

  // Hide the mobile menu
  closeButton.addEventListener("click", () => {
    mobileMenu.style.display = "none";
  });
});

//typed text
var typed = new Typed(".hero-title", {
  strings: ["Data Scientist", "ML Explorer", "Analytics Lover"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});
