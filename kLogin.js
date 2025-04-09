(() => {
    const state = {
      email: "",
      password: "",
      isLoading: false,
      errorMessage: "",
    };
  
    // DOM Elements
    const loginForm = document.getElementById("loginForm");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const errorMessageEl = document.getElementById("errorMessage");
    const loginButton = document.getElementById("loginButton");
  
    // Update UI based on state
    function updateUI() {
      // Update form inputs
      emailInput.value = state.email;
      passwordInput.value = state.password;
  
      // Update loading state
      loginButton.classList.toggle("loading", state.isLoading);
      loginButton.disabled = state.isLoading;
  
      // Update error message
      errorMessageEl.textContent = state.errorMessage;
      errorMessageEl.classList.toggle("visible", state.errorMessage !== "");
    }
  
    // Event Handlers
    emailInput.addEventListener("input", (e) => {
      state.email = e.target.value;
      updateUI();
    });
  
    passwordInput.addEventListener("input", (e) => {
      state.password = e.target.value;
      updateUI();
    });
  
    loginForm.addEventListener("submit", async (e) => {
      e.preventDefault();
  
      if (!state.email || !state.password) {
        state.errorMessage = "Please fill in all fields";
        updateUI();
        return;
      }
  
      state.isLoading = true;
      state.errorMessage = "";
      updateUI();
  
      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log("Login successful");
        // Add your login API call here
      } catch (error) {
        state.errorMessage = "Invalid email or password";
      } finally {
        state.isLoading = false;
        updateUI();
      }
    });
  
    // Initial UI update
    updateUI();
  })();
  