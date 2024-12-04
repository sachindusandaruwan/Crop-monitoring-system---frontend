import { getCookie } from "../TokenModel.js";

export function getAllEquipment() {
  console.log("equ mode enawa 1");

  return new Promise((resolve, reject) => {
    // let token=getCookie("authToken")
    // console.log("hiii sene",token)
    $.ajax({
      url: "http://localhost:5055/crop-monitoring-system/api/v1/equipment/allequipment",
      type: "GET",
      headers: {Authorization: "Bearer " + getCookie("authToken"),
      },
 // Automatically parses JSON response
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


// export function getAllEqu(){
//     return new Promise((resolve, reject) => {
//         $.ajax({
//             url : "http://localhost:5055/greenshadow/api/v1/equipment",
//             type : "GET",
//             headers: {
//                 Authorization: "Bearer " + getCookie("authToken"),
//             },
//             success: function(result){
//                 resolve(result);
//             },
//             error: function(xhr, status, error){
//                 reject(error);
//             },
//         })
//     })
// }

export function getEqu(id) {
    console.log("model eke getEqu awa")
    return new Promise((resolve, reject) => {
        $.ajax({
            url: `http://localhost:5055/crop-monitoring-system/api/v1/equipment/${id}`,
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

export function deleteEqu(eqId) {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: `http://localhost:5055/crop-monitoring-system/api/v1/equipment/${eqId}`, // API endpoint
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


  export function saveEqu(equ) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: "http://localhost:5055/crop-monitoring-system/api/v1/equipment",
            type: "POST",
            headers: {Authorization: "Bearer " + getCookie("authToken"),
            },
            data: JSON.stringify(equ),
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
