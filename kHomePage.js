(() => {
    const state = {
      isMenuOpen: false,
      toggleMenu() {
        state.isMenuOpen = !state.isMenuOpen;
        update();
      },
    };
  
    function update() {
      const menuLinks = document.querySelector('[data-el="div-1"]');
      if (menuLinks) {
        menuLinks.classList.toggle("active", state.isMenuOpen);
      }
    }
  
    // Event handler for menu toggle button
    const menuButton = document.querySelector('[data-el="button-1"]');
    if (menuButton) {
      menuButton.addEventListener("click", () => state.toggleMenu());
    }
  
    // Initialize state
    update();
  })();
  