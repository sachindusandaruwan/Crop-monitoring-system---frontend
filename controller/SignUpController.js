import { register } from "../model/LoginModel.js";

$("#singup-btn").click(function () {
    const email = $(".email-input").val();
    const password = $(".password-input").val();
    const role = $(".role-select").val();

    console.log(email,password,role)
  
    const result = validation(email, password, role);
  
    if (result === true) {
        alert("hiiii")
      register(email, password, role)
        .then((response) => {
          const token = response.token;
          document.cookie = `authToken=${token}; max-age=3600; path=/; Secure; HttpOnly; SameSite=Strict`;
          console.log("Token saved as cookie:", document.cookie);
          window.location = "./";
        })
        .catch((error) => {
            const notyf = new Notyf({
              duration: 1000,
              position: {
                x: "right",
                y: "top",
              },
              types: [
                {
                  type: "warning",
                  background: "orange",
                  icon: {
                    className: "material-icons",
                    tagName: "i",
                    text: "warning",
                  },
                },
              ],
            });
            notyf.error("email already exists.");
          });
    }
  });

  function validation(email, password, role) {
    
  
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailPattern.test(email)) {
      notyf.error("Please enter a valid email address.");
      return false;
    }
    if (!password || password.length < 8) {
      notyf.error("Password must be at least 8 characters.");
      return false;
    }
    if (!role || role === "default") {
      notyf.error("Please select a role.");
      return false;
    }
    return true;
  }