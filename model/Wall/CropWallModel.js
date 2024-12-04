import { getCookie } from "../TokenModel.js";


export function getAllCrops(){
    console.log("model eke crop eke get all ekata enawa")
    return new Promise((resolve, reject) => {
        $.ajax({
            url : "http://localhost:5055/crop-monitoring-system/api/v1/crop/allcrop",
            type : "GET",
            headers: {
                Authorization: "Bearer " + getCookie("authToken")
            },
            success: function(result){
                
                console.log(result)
                resolve(result);
                
            },
            error: function(xhr, status, error){
                reject(error);
            },
        })
    })
}

export function getCrop(cropCode) {
    console.log("model eke getEqu awa")
    return new Promise((resolve, reject) => {
        $.ajax({
            url: `http://localhost:5055/crop-monitoring-system/api/v1/crop/${cropCode}`,
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

export function deleteCrop(cropCode){
    return new Promise((resolve, reject) => {
        $.ajax({
            url : `http://localhost:5055/crop-monitoring-system/api/v1/crop/${cropCode}`,
            type : "DELETE",
            headers: {
                Authorization: "Bearer " + getCookie("authToken")
            },
            success: function(result){
                resolve(result);
            },
            error: function(xhr, status, error){
                reject(error);
            },
        })
    })
}


export function saveCrop(crop, field_code) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: "http://localhost:5055/crop-monitoring-system/api/v1/crop?fieldCode="+field_code,
            type: "POST",
            headers: {
                Authorization: "Bearer " + getCookie("authToken"), // Include token if required
            },
            data: crop, // FormData object
            processData: false, // Prevent processing FormData
            contentType: false, // Let the browser set the correct Content-Type
            success: function (result) {
                resolve(result); // Resolve on success
            },
            error: function (xhr, status, error) {
                reject(xhr.responseText || error); // Provide error details
            },
        });
    });
}
