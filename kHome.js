document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  let isMenuOpen = false;

  menuToggle.addEventListener("click", function () {
    isMenuOpen = !isMenuOpen;
    navLinks.classList.toggle("active");
    menuToggle.setAttribute("aria-expanded", isMenuOpen);
  });

 
  document.addEventListener("click", function (event) {
    if (
      !event.target.closest(".menu-toggle") &&
      !event.target.closest(".nav-links")
    ) {
      navLinks.classList.remove("active");
      isMenuOpen = false;
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });

  
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && isMenuOpen) {
      navLinks.classList.remove("active");
      isMenuOpen = false;
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.focus();
    }
  });
});
