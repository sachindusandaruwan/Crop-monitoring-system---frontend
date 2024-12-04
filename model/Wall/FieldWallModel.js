import { getCookie } from "../TokenModel.js";

export function getAllFields(){
    console.log("model eke field eke get all ekata enawa")
    alert("huu huuu")
    return new Promise((resolve, reject) => {
        $.ajax({
            url : "http://localhost:5055/crop-monitoring-system/api/v1/field/allfield",
            type : "GET",
            headers: {
                Authorization: "Bearer " + getCookie("authToken")
            },
            success: function(result){
                console.log(result)
                
                console.log(result)
                resolve(result);
                
            },
            error: function(xhr, status, error){
                reject(error);
            },
        })
    })
}

export function saveField(formData) {
    console.log("field model eke save field ekata enawa")
    return new Promise((resolve, reject) => {
        $.ajax({
            url: "http://localhost:5055/crop-monitoring-system/api/v1/field",
            type: "POST",
            headers: {
                Authorization: "Bearer " + getCookie("authToken"), // Ensure token is valid
            },
            data: formData,
            processData: false,  // Prevent jQuery from processing the data
            contentType: false,  // Let FormData set the correct content type
            success: function(result) {
                console.log("enawada hu hu")
                console.log(result)
                resolve(result);
            },
            error: function(xhr, status, error) {
                reject(error);
            }
        });
    })
}