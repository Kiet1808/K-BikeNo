(() => {
  const state = {
      form: {
          email: "",
          password: "",
          confirmPassword: "",
          fullName: "",
          phone: "",
      },
      errors: {
          email: "",
          password: "",
          confirmPassword: "",
          phone: "",
      },
      isSubmitting: false,
  };

  // DOM Elements
  const form = document.getElementById("signupForm");
  const submitButton = document.getElementById("submitButton");

  // Templates
  const templates = {
      emailError: document.getElementById("emailErrorTpl"),
      phoneError: document.getElementById("phoneErrorTpl"),
      passwordError: document.getElementById("passwordErrorTpl"),
      confirmPasswordError: document.getElementById("confirmPasswordErrorTpl"),
      loading: document.getElementById("loadingTpl"),
      submit: document.getElementById("submitTpl"),
  };

  const validators = {
      email: (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? "" : "Please enter a valid email address",
      password: (password) => password.length >= 8 ? "" : "Password must be at least 8 characters",
      confirmPassword: (password, confirmPassword) => password === confirmPassword ? "" : "Passwords do not match",
      phone: (phone) => /^(84|0[3|5|7|8|9])([0-9]{8})\b/.test(phone) ? "" : "Please enter a valid Vietnamese phone number",
  };

  function validateField(name, value) {
      if (name === "confirmPassword") {
          state.errors[name] = validators.confirmPassword(state.form.password, value);
      } else {
          state.errors[name] = validators[name](value);
      }
  }

  function showTemplate(template, container, errorMessage = "") {
      if (!template) return;
      const clone = template.content.cloneNode(true);
      container.innerHTML = "";
      container.appendChild(clone);

      if (errorMessage) {
          container.querySelector(".error-message").textContent = errorMessage;
      }
  }

  function updateUI() {
      Object.keys(state.errors).forEach((key) => {
          const errorContainer = document.getElementById(`${key}Error`)?.parentNode;
          if (state.errors[key]) {
              showTemplate(templates[`${key}Error`], errorContainer, state.errors[key]);
          }
      });

      submitButton.disabled = state.isSubmitting;
      showTemplate(state.isSubmitting ? templates.loading : templates.submit, submitButton);
  }

  form.addEventListener("input", (event) => {
      const { name, value } = event.target;
      if (state.form.hasOwnProperty(name)) {
          state.form[name] = value;
          validateField(name, value);
          updateUI();
      }
  });

  form.addEventListener("submit", async (event) => {
      event.preventDefault();
      
      Object.keys(state.form).forEach((key) => validateField(key, state.form[key]));
      updateUI();

      if (!Object.values(state.errors).some((error) => error !== "")) {
          state.isSubmitting = true;
          updateUI();

          await new Promise((resolve) => setTimeout(resolve, 1000));

          state.isSubmitting = false;
          updateUI();
      }
  });

  updateUI();
})();
