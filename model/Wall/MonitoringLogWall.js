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