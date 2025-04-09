(() => {
    const state = {
      formData: {
        name: "",
        email: "",
        message: "",
      },
      handleSubmit(event) {
        event.preventDefault();
        console.log("Form submitted:", state.formData);
      },
    };
  
    const form = document.getElementById("contactForm");
    const nameInput = form.querySelector("#name");
    const emailInput = form.querySelector("#email");
    const messageInput = form.querySelector("#message");
  
    nameInput.addEventListener("input", (e) => {
      state.formData.name = e.target.value;
    });
  
    emailInput.addEventListener("input", (e) => {
      state.formData.email = e.target.value;
    });
  
    messageInput.addEventListener("input", (e) => {
      state.formData.message = e.target.value;
    });
  
    form.addEventListener("submit", state.handleSubmit);
  })();
  