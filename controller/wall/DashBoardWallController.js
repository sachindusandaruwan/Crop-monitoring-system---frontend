import { getAllCrops } from "../../model/Wall/CropWallModel.js";
import { getAllEquipment } from "../../model/Wall/EquipmentWallModel.js";
import { getAllFields } from "../../model/Wall/FieldWallModel.js";
import { getAllStaff } from "../../model/Wall/StaffWallModel.js";
import { getAllVehicle } from "../../model/Wall/VehicleModel.js";


$(document).ready(function () {
    // Fetch and display counts
    getAllStaff().then((data) => {
        $(".staff-count h1").text(data.length);
    });

    getAllFields().then((data) => {
        $(".field-count h1").text(data.length);
    });

    getAllCrops().then((data) => {
        $(".crop-count h1").text(data.length);
    });

    getAllVehicle().then((data) => {
        $(".vehicle-count h1").text(data.length);

    });

    getAllEquipment().then((data) => {
        $(".equipment-count h1").text(data.length);

       
    });
});

