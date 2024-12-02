export function saveStaffMember(staffData) {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: "http://localhost:5055/crop-monitoring-system/api/v1/staff",
        type: "POST",
        contentType: "application/json", // Specify the content type as JSON
        data: JSON.stringify(staffData), // Convert the staff data object to a JSON string
        success: (response) => {
          console.log("Staff member saved successfully:", response);
          resolve(response); // Resolves the promise with the server's response
        },
        error: (jqXHR, textStatus, errorThrown) => {
          console.error(`Failed to save staff member: ${textStatus}, ${errorThrown}`);
          reject(`Request failed with status: ${jqXHR.status}`);
        },
      });
    });
  }

  export function getAllStaff() {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: "http://localhost:5055/crop-monitoring-system/api/v1/staff/allstaff",
        type: "GET",
        dataType: "json", // Automatically parses JSON response
        success: (response) => {
          console.log(response); // Logs the staff members
          resolve(response); // Resolves the promise with the response
        },
        error: (jqXHR, textStatus, errorThrown) => {
          console.error(`Request failed: ${textStatus}, ${errorThrown}`);
          reject(`Request failed with status: ${jqXHR.status}`);
        },
      });
    });
  }
  

  
  
  export function getStaffMember(staff_id) {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: `http://localhost:5055/crop-monitoring-system/api/v1/staff/${staff_id}`,
        type: "GET",
        contentType: "application/json",
        success: function (result) {
          console.log()
          console.log("Staff member data retrieved:", result);
          resolve(result); // Resolves the promise with the result
        },
        error: function (xhr, status, error) {
          console.error(`Error fetching staff member: ${error}`);
          reject(error); // Rejects the promise with the error
        },
      });
    });
  }

  export function updateStaff(staff_id, staff) {
    return new Promise((resolve, reject) => {
      console.log("model ekata awa1")
      $.ajax({
        url: `http://localhost:5055/crop-monitoring-system/api/v1/staff/${staff_id}`,
        type: "PATCH",
        contentType: "application/json",
        data: JSON.stringify(staff), // Send the staff data as JSON
        success: function (result) {
          console.log("Staff updated successfully:", result);
          resolve(result); // Resolve the promise with the result
        },
        error: function (xhr, status, error) {
          console.error("Error updating staff:", error);
          reject(error); // Reject the promise with the error
        },
      });
    });
  }
  
  