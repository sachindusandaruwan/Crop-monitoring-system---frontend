import { getCookie } from "./TokenModel.js";

export function register(email, password, role) {
  const raw = {
    email: email,
    password: password,
    role: role,
  };

  return new Promise((resolve, reject) => {
    
    $.ajax({
      url: "http://localhost:5055/crop-monitoring-system/api/v1/auth/signup",
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify(raw),
      success: function (result) {
        console.log(result);
        resolve(result); // resolving with the response result
        alert("Register successfully");
      },
      error: function (xhr, status, error) {
        reject(error); // rejecting on error
      },
    });
  });
}

export function login(email, password) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: "http://localhost:5055/crop-monitoring-system/api/v1/auth/signin",
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify({ email, password }),
      success: function (result) {
        console.log(result);
        resolve(result); // resolving with the response result
      },
      error: function (xhr, status, error) {
        alert("Enter your correct email & password");
        reject(error); // rejecting on error
      },
    });
  });
}

export function getUserByEmail(email) {
 
  return new Promise((resolve, reject) => {
    $.ajax({
      url: `http://localhost:5055/crop-monitoring-system/api/v1/user/${email}`,
      type: "GET",
      headers: {
        contentType: "application/json",
        Authorization: "Bearer " + getCookie("authToken"),
      },
      success: function (result) {
        resolve(result.role);
      },
      error: function (xhr, status, error) {
        reject(error);
      },
    });
  });
}
