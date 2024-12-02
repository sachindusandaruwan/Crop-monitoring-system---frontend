import {
  deleteStaffMember,
  getAll,
  saveStaffMember,
  updateStaffMember,
} from "../model/StaffModel.js";

document.addEventListener("DOMContentLoaded", () => {
  // Initialize the application
  getAllStaffMembers();
  setupEventListeners();
});

// Fetch and display all staff members
function getAllStaffMembers() {
  getAll()
    .then((staff) => {
      reloadTable(staff);
    })
    .catch((error) => {
      console.error("Error fetching staff members:", error);
    });
}

// Reload table with staff data
function reloadTable(staff) {
  const $tableBody = $("#staff-table-body");
  $tableBody.empty(); // Clear existing rows

  staff.forEach((staffMember) => {
    const $row = $("<tr>").appendTo($tableBody);

    $("<td>").text(staffMember.firstName).appendTo($row);
    $("<td>").text(staffMember.lastName).appendTo($row);
    $("<td>").text(staffMember.designation).appendTo($row);
    $("<td>").text(staffMember.gender).appendTo($row);
    $("<td>").text(formatDate(staffMember.joinedDate)).appendTo($row);
    $("<td>").text(formatDate(staffMember.DOB)).appendTo($row);
    $("<td>").text(staffMember.contactNo).appendTo($row);
    $("<td>").text(staffMember.email).appendTo($row);
    $("<td>").text(staffMember.role).appendTo($row);

    // Attach event listener for row click
    $row.on("click", () => showModal(staffMember));
  });
}

// Show modal with staff details
function showModal(staffMember) {
  // Populate modal fields
  $("#modal-firstName").text(staffMember.firstName);
  $("#modal-lastName").text(staffMember.lastName);
  $("#modal-designation").text(staffMember.designation);
  $("#modal-gender").text(staffMember.gender);
  $("#modal-joinedDate").text(formatDate(staffMember.joinedDate));
  $("#modal-dob").text(formatDate(staffMember.DOB));
  $("#modal-contactNo").text(staffMember.contactNo);
  $("#modal-email").text(staffMember.email);
  $("#modal-role").text(staffMember.role);
  $("#modal-address").text(concatenateAddress(staffMember));

  // Show modal
  $("#staffDetailsModal").fadeIn();

  // Set up event listeners for modal buttons
  setupModalActions(staffMember);
}

// Handle modal actions
function setupModalActions(staffMember) {
  let isEditing = false;

  $("#update-btn")
    .off("click")
    .on("click", function () {
      if (!isEditing) {
        enableEditing();
        $(this).text("Save");
        isEditing = true;
      } else {
        const updatedData = getUpdatedData();
        updateStaffMember(staffMember.id, updatedData)
          .then(() => {
            alert("Staff member updated successfully!");
            location.reload();
          })
          .catch((error) => {
            console.error("Error updating staff member:", error);
          });

        disableEditing();
        $(this).text("Update");
        isEditing = false;
      }
    });

  $("#delete-btn")
    .off("click")
    .on("click", () => {
      if (confirm("Are you sure you want to delete this staff member?")) {
        deleteStaffMember(staffMember.id)
          .then(() => {
            alert("Staff member deleted successfully!");
            location.reload();
          })
          .catch((error) => {
            console.error("Error deleting staff member:", error);
          });
      }
    });

  $(".close, #closeModal")
    .off("click")
    .on("click", () => {
      $("#staffDetailsModal").fadeOut();
      disableEditing();
    });
}

// Enable editing in the modal
function enableEditing() {
  $(".modal-body span").attr("contenteditable", "true").css({
    border: "1px dashed #007bff",
    padding: "2px",
    borderRadius: "4px",
  });
}

// Disable editing in the modal
function disableEditing() {
  $(".modal-body span").attr("contenteditable", "false").css({
    border: "none",
    padding: "0",
    borderRadius: "0",
  });
}

// Collect updated data from modal
function getUpdatedData() {
  const address = $("#modal-address").text();
  const addressParts = address.split(",");

  return {
    firstName: $("#modal-firstName").text(),
    lastName: $("#modal-lastName").text(),
    designation: $("#modal-designation").text(),
    gender: $("#modal-gender").text(),
    joinedDate: $("#modal-joinedDate").text(),
    dob: $("#modal-dob").text(),
    addressLine1: addressParts[0]?.trim() || "",
    addressLine2: addressParts[1]?.trim() || "",
    addressLine3: addressParts[2]?.trim() || "",
    addressLine4: addressParts[3]?.trim() || "",
    addressLine5: addressParts[4]?.trim() || "",
    contactNo: $("#modal-contactNo").text(),
    email: $("#modal-email").text(),
    role: $("#modal-role").text(),
  };
}

// Add new staff member
$("#save-staff-member").on("click", () => {
  const staffDetails = {
    firstName: $("#first-name").val(),
    lastName: $("#last-name").val(),
    designation: $("#designation").val(),
    gender: $("#gender").val(),
    joinedDate: $("#joined-date").val(),
    dob: $("#dob").val(),
    addressLine1: $("#address-line1").val(),
    addressLine2: $("#address-line2").val(),
    addressLine3: $("#address-line3").val(),
    addressLine4: $("#address-line4").val(),
    addressLine5: $("#address-line5").val(),
    contactNo: $("#contactNo").val(),
    email: $("#email").val(),
    role: $("#role").val(),
  };

  saveStaffMember(staffDetails)
    .then(() => {
      alert("Staff member saved successfully!");
      location.reload();
    })
    .catch((error) => {
      console.error("Error saving staff member:", error);
    });
});

// Utility: Format date
function formatDate(date) {
  return new Date(date).toISOString().split("T")[0];
}

// Utility: Concatenate address
function concatenateAddress(staffMember) {
  return [
    staffMember.addressLine1,
    staffMember.addressLine2,
    staffMember.addressLine3,
    staffMember.addressLine4,
    staffMember.addressLine5,
  ]
    .filter(Boolean)
    .join(", ");
}

// Set up event listeners
function setupEventListeners() {
  // Open Add Staff modal
  $("#openPopup").on("click", () => {
    $("#add-staff-modal").css("display", "flex");
  });

  // Close Add Staff modal
  $("#add-staff-modal .close, #closeModal").on("click", () => {
    $("#add-staff-modal").css("display", "none");
  });

  // Close Add Staff modal on outside click
  $(window).on("click", (event) => {
    if ($(event.target).is("#add-staff-modal")) {
      $("#add-staff-modal").css("display", "none");
    }
  });
}
