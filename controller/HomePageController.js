import { saveCookie } from "../model/TokenModel.js";

$(document).ready(function () {
  $(".dashboard-icon").on("click", function () {
    $(".iframe-div iframe").attr("src", "/page/DashBoard.html");
  });
  $(".staff-icon").on("click", function () {
    $(".iframe-div iframe").attr("src", "/page/StaffWall.html");
  });
  $(".equipment-icon").on("click", function () {
    $(".iframe-div iframe").attr("src", "/page/EquipmentWall.html");
  });
  $(".field-icon").on("click", function () {
    $(".iframe-div iframe").attr("src", "/page/FieldWall.html");
  });
  $(".monitoringLog-icon").on("click", function () {
    $(".iframe-div iframe").attr("src", "/page/MonitoringLogWall.html");
  });
  $(".vehicle-icon").on("click", function () {
    $(".iframe-div iframe").attr("src", "/page/VehicleWall.html");
  });
  $(".crop-icon").on("click", function () {
    $(".iframe-div iframe").attr("src", "/page/CropWall.html");
  });
  $(".log-out-btn").on("click", function () {
    saveCookie("authToken", "");
    window.location.href = "../index.html";
  });
});


  
