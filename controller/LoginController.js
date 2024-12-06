import { login } from "../model/LoginModel.js";
import { getCookie, saveCookie } from "../model/TokenModel.js";

$("#signInButton").click(function () {
  const email = $("#e-mail-input").val();
  const password = $("#password-input").val();

  login(email, password)
    .then((response) => {
      
      localStorage.setItem("userEmail", email);
      const token = response.token;
      saveCookie("authToken", token);
      console.log("Token saved as cookie:", getCookie("authToken"));
      window.location = "/HomePage.html";
    })
    .catch((error) => {
      console.log("Error:", error);
      notyf.error("Invalid email or password.");
    });
});
 

