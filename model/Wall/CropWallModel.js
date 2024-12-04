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