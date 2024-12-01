// Array to store crop data
let crops = [];

// Function to show the modal for adding a crop
function showAddCropModal() {
    const modal = new bootstrap.Modal(document.getElementById('addCropModal'));
    modal.show();
}

// Function to add a new crop
document.getElementById('updateCrop').addEventListener('click', function(event) {
    const modal = new bootstrap.Modal(document.getElementById('updateCropModal'));
    modal.show(); 
});