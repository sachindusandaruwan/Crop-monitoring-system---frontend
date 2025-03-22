import { getCookie } from "../TokenModel.js";

export function getAllVehicle() {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: "http://localhost:5055/crop-monitoring-system/api/v1/vehicle/allvehicle",
        type: "GET",
        headers: {Authorization: "Bearer " + getCookie("authToken"),
        },
        
        success: (response) => {
          console.log(response); // Logs the vehicles
          resolve(response); // Resolves the promise with the response
        },
        error: (jqXHR, textStatus, errorThrown) => {
          console.error(`Request failed: ${textStatus}, ${errorThrown}`);
          reject(`Request failed with status: ${jqXHR.status}`);
        },
      });
    });
  }

  export function getVehicle(id){
    console.log("model eke getEqu awa")
    return new Promise((resolve, reject) => {
        $.ajax({
            url: `http://localhost:5055/crop-monitoring-system/api/v1/vehicle/${id}`,
            type: "GET",
            headers: {Authorization: "Bearer " + getCookie("authToken"),
            },
            success: function(result) {
                console.log(result)
                resolve(result);
            },
            error: function(xhr, status, error) {
                reject(error);
            },
        });
    });
  }


  export function deleteVehi(vehicleId) {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: `http://localhost:5055/crop-monitoring-system/api/v1/vehicle/${vehicleId}`, // API endpoint
        type: "DELETE", // HTTP method
        headers: {Authorization: "Bearer " + getCookie("authToken"),
        },
        contentType: "application/json", // Request content type
        success: function (result) {
          console.log(result); // Log the successful response
          resolve(result); // Resolve the promise with the result
        },
        error: function (xhr, status, error) {
          console.error("Error deleting staff:", error); // Log error details
          reject(error); // Reject the promise with the error
        },
      });
    });
  }

  export function saveVehi(vehicle) {
    console.log("model eke vehicle save enawa")
    return new Promise((resolve, reject) => {
        $.ajax({
            url: "http://localhost:5055/crop-monitoring-system/api/v1/vehicle",
            type: "POST",
            headers: {Authorization: "Bearer " + getCookie("authToken"),
            },
            data: JSON.stringify(vehicle),
            contentType: "application/json",
            success: function(result) {
                console.log(result)
                resolve(result);
            },
            error: function(xhr, status, error) {
                reject(error);
            },
        });
    });
}

export function updateVehicle(vehicle_id, vehicle, staff_id) {
  console.log("staff id eka",staff_id)
  return new Promise((resolve, reject) => {
    $.ajax({
      url: `http://localhost:5055/crop-monitoring-system/api/v1/vehicle/${vehicle_id}?staffId=${staff_id}`,
      method: "PATCH",
      contentType: "application/json",
      headers: {
        Authorization: "Bearer " + getCookie("authToken"),
      },
      data: JSON.stringify(vehicle),
      success: function (result) {
        resolve(result);
      },
      error: function (xhr, status, error) {
        reject(error);
      },
    });
  });
}