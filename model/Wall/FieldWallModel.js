import { getCookie } from "../TokenModel.js";

export function getAllFields() {
  console.log("model eke field eke get all ekata enawa");
  
  return new Promise((resolve, reject) => {
    $.ajax({
      url: "http://localhost:5055/crop-monitoring-system/api/v1/field/allfield",
      type: "GET",
      headers: {
        Authorization: "Bearer " + getCookie("authToken"),
      },
      success: function (result) {
        console.log(result);

        console.log(result);
        resolve(result);
      },
      error: function (xhr, status, error) {
        reject(error);
      },
    });
  });
}

export function saveField(formData) {
  console.log("field model eke save field ekata enawa");
  return new Promise((resolve, reject) => {
    $.ajax({
      url: "http://localhost:5055/crop-monitoring-system/api/v1/field",
      type: "POST",
      headers: {
        Authorization: "Bearer " + getCookie("authToken"), // Ensure token is valid
      },
      data: formData,
      processData: false, // Prevent jQuery from processing the data
      contentType: false, // Let FormData set the correct content type
      success: function (result) {
        console.log("enawada hu hu");
        console.log(result);
        resolve(result);
      },
      error: function (xhr, status, error) {
        reject(error);
      },
    });
  });
}

export function deleteField(field_code) {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: `http://localhost:5055/crop-monitoring-system/api/v1/field/${field_code}`,
      type: "DELETE",
      contentType: "application/json",
      headers: {
        Authorization: "Bearer " + getCookie("authToken"),
      },
      success: function (result) {
        resolve(result);
      },
      error: function (xhr, status, error) {
        reject(error);
      },
    });
  });
}


export function getField(field_code){
  return new Promise((resolve, reject) => {
      $.ajax({
          url: `http://localhost:5055/crop-monitoring-system/api/v1/field/${field_code}`,
          type: "GET",
          contentType: "application/json",
          headers: {
              Authorization: "Bearer " + getCookie("authToken"),
          },
          success: function (result) {
            console.log("mmmmmmm ",result.staffId)
              resolve(result);
          },
          error: function (xhr, status, error) {
              reject(error);
          },
      })
  })
}

export function updateField(formData, field_code,staffId){
  return new Promise((resolve, reject) => {
      $.ajax({
          url: `http://localhost:5055/crop-monitoring-system/api/v1/field/${field_code}?staffIds=${staffId}`,
          type: "PATCH",
          headers: {
              Authorization: "Bearer " + getCookie("authToken"), // Ensure token is valid
          },
          data: formData,
          processData: false,  // Prevent jQuery from processing the data
          contentType: false,  // Let FormData set the correct content type
          success: function(result) {
              resolve(result);
          },
          error: function(xhr, status, error) {
              reject(error);
          }
      });
  })
}