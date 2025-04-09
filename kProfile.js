(() => {
    const state = {
      profile: {
        fullName: "John Smith",
        email: "john.smith@email.com",
        phone: "+1 234 567 8900",
        address: "123 Main Street, City, Country",
      },
      isEditing: false,
      editedProfile: {
        fullName: "",
        email: "",
        phone: "",
        address: "",
      },
      toggleEdit() {
        state.isEditing = !state.isEditing;
        update();
        if (state.isEditing) {
          state.editedProfile = { ...state.profile };
          update();
        }
      },
      saveChanges() {
        state.profile = { ...state.editedProfile };
        state.isEditing = false;
        update();
      },
    };
  
    let nodesToDestroy = [];
    let pendingUpdate = false;
  
    function destroyAnyNodes() {
      nodesToDestroy.forEach((el) => el.remove());
      nodesToDestroy = [];
    }
  
    function update() {
      if (pendingUpdate) return;
      pendingUpdate = true;
  
     
      document.querySelectorAll(".profile-name").forEach((el) => {
        el.textContent = state.profile.fullName;
      });
  
      
      document.querySelectorAll("[data-el='show']").forEach((el) => {
        if (state.isEditing) showContent(el);
      });
  
      document.querySelectorAll("[data-el='input-1']").forEach((el) => {
        el.value = state.editedProfile.address;
        el.removeEventListener("input", onAddressInput);
        el.addEventListener("input", onAddressInput);
      });
  
      document.querySelectorAll("[data-el='show-2']").forEach((el) => {
        if (!state.isEditing) showContent(el);
      });
  
      document.querySelectorAll("[data-el='show-2'] p").forEach((el) => {
        el.textContent = state.profile.address;
      });
  
      document.querySelectorAll("[data-el='show-3']").forEach((el) => {
        if (state.isEditing) showContent(el);
      });
  
      document.querySelectorAll("[data-el='input-3']").forEach((el) => {
        el.value = state.editedProfile.email;
        el.removeEventListener("input", onEmailInput);
        el.addEventListener("input", onEmailInput);
      });
  
      document.querySelectorAll("[data-el='show-4']").forEach((el) => {
        if (!state.isEditing) showContent(el);
      });
  
      document.querySelectorAll("[data-el='show-4'] p").forEach((el) => {
        el.textContent = state.profile.email;
      });
  
      document.querySelectorAll("[data-el='show-5']").forEach((el) => {
        if (state.isEditing) showContent(el);
      });
  
      document.querySelectorAll("[data-el='input-5']").forEach((el) => {
        el.value = state.editedProfile.phone;
        el.removeEventListener("input", onPhoneInput);
        el.addEventListener("input", onPhoneInput);
      });
  
      document.querySelectorAll("[data-el='show-6']").forEach((el) => {
        if (!state.isEditing) showContent(el);
      });
  
      document.querySelectorAll("[data-el='show-6'] p").forEach((el) => {
        el.textContent = state.profile.phone;
      });
  
    
      document.querySelectorAll("[data-el='show-7']").forEach((el) => {
        if (state.isEditing) showContent(el);
      });
  
      document.querySelectorAll("[data-el='button-1']").forEach((el) => {
        el.removeEventListener("click", onCancelClick);
        el.addEventListener("click", onCancelClick);
      });
  
      document.querySelectorAll("[data-el='button-2']").forEach((el) => {
        el.removeEventListener("click", onSaveClick);
        el.addEventListener("click", onSaveClick);
      });
  
      document.querySelectorAll("[data-el='show-8']").forEach((el) => {
        if (!state.isEditing) showContent(el);
      });
  
      document.querySelectorAll("[data-el='button-3']").forEach((el) => {
        el.removeEventListener("click", onEditClick);
        el.addEventListener("click", onEditClick);
      });
  
      destroyAnyNodes();
      pendingUpdate = false;
    }
  
    // Event Handlers
    function onAddressInput(event) {
      state.editedProfile.address = event.target.value;
    }
  
    function onEmailInput(event) {
      state.editedProfile.email = event.target.value;
    }
  
    function onPhoneInput(event) {
      state.editedProfile.phone = event.target.value;
    }
  
    function onCancelClick() {
      state.toggleEdit();
    }
  
    function onSaveClick() {
      state.saveChanges();
    }
  
    function onEditClick() {
      state.toggleEdit();
    }
  
    function showContent(el) {
      const elementFragment = el.content.cloneNode(true);
      const children = Array.from(elementFragment.childNodes);
      children.forEach((child) => {
        nodesToDestroy.push(child);
      });
      el.after(elementFragment);
    }
  
    
    update();
  })();
  