import { getAllCrops } from "../../model/Wall/CropWallModel.js";
import { getAllEquipment } from "../../model/Wall/EquipmentWallModel.js";
import { getAllFields } from "../../model/Wall/FieldWallModel.js";
import { getAllStaff } from "../../model/Wall/StaffWallModel.js";
import { getAllVehicle } from "../../model/Wall/VehicleModel.js";


$(document).ready(function () {

    function updateDateTime() {
        const now = new Date();
        const options = { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        };
        document.getElementById('datetime').textContent = now.toLocaleDateString('en-US', options);
    }
    
    updateDateTime();
    setInterval(updateDateTime, 1000);



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

