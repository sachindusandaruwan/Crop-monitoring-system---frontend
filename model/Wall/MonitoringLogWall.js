import { getCookie } from "../TokenModel.js";

export function getAllMonitoringLogs() {
    console.log("monitoring model eke get all ekata enawa")
    return new Promise((resolve, reject) => {
        $.ajax({
            url: "http://localhost:5055/crop-monitoring-system/api/v1/monitoringLog/allmonitorinlog",
            type: "GET",
            headers: {
                Authorization: "Bearer " + getCookie("authToken"),
            },
            success: function(result) {
                resolve(result);
            },
            error: function(xhr, status, error) {
                reject(error);
            },
        });
    });
}

export function getMonitoringLog(logCode){
    return new Promise((resolve, reject) => {
        $.ajax({
            url : `http://localhost:5055/crop-monitoring-system/api/v1/monitoringLog/${logCode}`,
            type : "GET",
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

export function deleLog(logCode){
    return new Promise((resolve, reject) =>{
        $.ajax({
            url : `http://localhost:5055/crop-monitoring-system/api/v1/monitoringLog/${logCode}`,
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

export function saveCropDetails(param, cropDetails){
    const url = `http://localhost:5055/crop-monitoring-system/api/v1/monitoringLog?fieldCodes=${param.fieldCode}&cropCodes=${param.cropCode}&staffIds=${param.staffId}`;
    return new Promise((resolve, reject) => {
        $.ajax({
            url: url,
            type: "POST",
            headers: {
                Authorization: "Bearer " + getCookie("authToken"),
            },
            data: cropDetails,
            processData: false,
            contentType: false,
            success: function(result) {
                resolve(result);
            },
            error: function(xhr, status, error) {
                reject(error);
            },
        });
    });
}