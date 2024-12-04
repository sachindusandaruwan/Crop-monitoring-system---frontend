import { getCrop } from "../../model/Wall/CropWallModel.js";
import {
  getAllMonitoringLogs,
  getMonitoringLog,
} from "../../model/Wall/MonitoringLogWall.js";
import { getStaffMember } from "../../model/Wall/StaffWallModel.js";

var targetLogCode = "";

$(document).ready(function () {
  // Show "viewMonitoringLogModal" when the 3rd child of elements with class "action" is clicked
  $("#card-content").on("click", ".card .action > :nth-child(3)", function () {
    const modal = new bootstrap.Modal($("#viewMonitoringLogModal")[0]);
    modal.show();
    targetLogCode = $(this).data("id");
    loadDataToViewPopup();
  });

  // Show "updteMonitoringModal" when the 1st child of elements with class "action" is clicked
  $("#card-content").on("click", ".card .action > :nth-child(1)", function () {
    const modal = new bootstrap.Modal($("#updteMonitoringModal")[0]);
    modal.show();
  });

  loadTable();
});

function loadTable() {
  const table = $("#card-content");
  table.empty();

  getAllMonitoringLogs().then((data) => {
    data.forEach((cropDetail) => {
      table.append(
        `
      <div class="card" style="width: 18rem">
          <img
            src=${base64ToImageURL(cropDetail.observedImage)}
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <div class="d-flex p-3">
              <div>
                <h7>Log Code</h7>
                <h6>${dataRefactor(cropDetail.logCode, 20)}</h6>
              </div>
              <div>
                <h7>Log Date</h7>
                <h6>${dataRefactor(cropDetail.logDate, 10)}</h6>
              </div>
            </div>
            <div style="align-items: center; justify-items: center">
              <div class="action d-flex gap-4">
                <svg data-id="${cropDetail.logCode}"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="22"
                  viewBox="0 0 16 22"
                  fill="none"
                >
                  <path
                    d="M8 5V8L12 4L8 0V3C3.58 3 0 6.58 0 11C0 12.57 0.46 14.025 1.24 15.26L2.7 13.8C2.255 12.965 2 12.015 2 11C2 7.685 4.685 5 8 5ZM14.76 6.74L13.3 8.2C13.745 9.035 14 9.985 14 11C14 14.315 11.315 17 8 17V14L4 18L8 22V19C12.42 19 16 15.42 16 11C16 9.43 15.54 7.975 14.76 6.74Z"
                    fill="#9A9A9A"
                  />
                </svg>
                <svg data-id="${cropDetail.logCode}"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="19"
                  viewBox="0 0 16 19"
                  fill="none"
                >
                  <path
                    d="M14.8885 6.78675L14.5525 16.0492C14.5239 16.8425 14.1569 17.5944 13.5295 18.1453C12.9021 18.6962 12.0636 19.0028 11.192 19H4.80714C3.93613 19.0028 3.09814 18.6967 2.47082 18.1464C1.8435 17.5961 1.47616 16.845 1.44668 16.0523L1.11063 6.78675C1.10328 6.58385 1.18474 6.38659 1.33709 6.23839C1.48945 6.09018 1.70021 6.00315 1.92302 5.99646C2.14584 5.98976 2.36244 6.06394 2.5252 6.20268C2.68795 6.34142 2.78351 6.53335 2.79086 6.73626L3.12691 16.001C3.14364 16.3965 3.32803 16.7707 3.64134 17.045C3.95465 17.3194 4.3725 17.4725 4.80714 17.4722H11.192C11.6272 17.4724 12.0456 17.3189 12.359 17.0439C12.6724 16.769 12.8564 16.394 12.8722 15.9979L13.2083 6.73626C13.2156 6.53335 13.3112 6.34142 13.474 6.20268C13.6367 6.06394 13.8533 5.98976 14.0761 5.99646C14.2989 6.00315 14.5097 6.09018 14.6621 6.23839C14.8144 6.38659 14.8959 6.58385 14.8885 6.78675ZM16 3.70437C16 3.90727 15.9115 4.10187 15.7539 4.24534C15.5964 4.38882 15.3827 4.46942 15.1599 4.46942H0.840115C0.617303 4.46942 0.403616 4.38882 0.246064 4.24534C0.0885117 4.10187 0 3.90727 0 3.70437C0 3.50147 0.0885117 3.30687 0.246064 3.1634C0.403616 3.01993 0.617303 2.93932 0.840115 2.93932H3.44447C3.71066 2.93998 3.9676 2.85042 4.16528 2.68808C4.36296 2.52574 4.48724 2.30223 4.51394 2.06105C4.57594 1.49528 4.86701 0.970801 5.33044 0.589789C5.79388 0.208777 6.39648 -0.00147143 7.02085 7.75214e-06H8.97831C9.60268 -0.00147143 10.2053 0.208777 10.6687 0.589789C11.1322 0.970801 11.4232 1.49528 11.4852 2.06105C11.5119 2.30223 11.6362 2.52574 11.8339 2.68808C12.0316 2.85042 12.2885 2.93998 12.5547 2.93932H15.159C15.3819 2.93932 15.5955 3.01993 15.7531 3.1634C15.9106 3.30687 15.9992 3.50147 15.9992 3.70437H16ZM5.97238 2.93932H10.0285C9.91806 2.70961 9.84586 2.4662 9.81423 2.21712C9.79342 2.02854 9.69648 1.85371 9.5422 1.7265C9.38792 1.59929 9.18728 1.52876 8.97915 1.52857H7.02169C6.81356 1.52876 6.61292 1.59929 6.45864 1.7265C6.30436 1.85371 6.20742 2.02854 6.18661 2.21712C6.15471 2.46624 6.08307 2.70965 5.97238 2.93932ZM6.81838 14.5306V8.01618C6.81838 7.81328 6.72987 7.61869 6.57231 7.47521C6.41476 7.33174 6.20107 7.25114 5.97826 7.25114C5.75545 7.25114 5.54176 7.33174 5.38421 7.47521C5.22666 7.61869 5.13815 7.81328 5.13815 8.01618V14.5336C5.13815 14.7365 5.22666 14.9311 5.38421 15.0746C5.54176 15.2181 5.75545 15.2987 5.97826 15.2987C6.20107 15.2987 6.41476 15.2181 6.57231 15.0746C6.72987 14.9311 6.81838 14.7365 6.81838 14.5336V14.5306ZM10.8627 14.5306V8.01618C10.8627 7.81328 10.7742 7.61869 10.6166 7.47521C10.4591 7.33174 10.2454 7.25114 10.0226 7.25114C9.79977 7.25114 9.58608 7.33174 9.42853 7.47521C9.27097 7.61869 9.18246 7.81328 9.18246 8.01618V14.5336C9.18246 14.7365 9.27097 14.9311 9.42853 15.0746C9.58608 15.2181 9.79977 15.2987 10.0226 15.2987C10.2454 15.2987 10.4591 15.2181 10.6166 15.0746C10.7742 14.9311 10.8627 14.7365 10.8627 14.5336V14.5306Z"
                    fill="#9A9A9A"
                  />
                </svg>
                <svg data-id="${cropDetail.logCode}"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="14"
                  viewBox="0 0 20 14"
                  fill="none"
                >
                  <path
                    d="M10 0C16.25 0 20 7 20 7C20 7 16.25 14 10 14C3.75 14 0 7 0 7C0 7 3.75 0 10 0ZM10 1.27273C5.6 1.27273 2.4975 5.41036 1.46875 7C2.49625 8.58836 5.59875 12.7273 10 12.7273C14.4 12.7273 17.5025 8.58964 18.5312 7C17.5037 5.41164 14.4012 1.27273 10 1.27273ZM10 2.54545C11.1603 2.54545 12.2731 3.01477 13.0936 3.85016C13.9141 4.68555 14.375 5.81858 14.375 7C14.375 8.18142 13.9141 9.31445 13.0936 10.1498C12.2731 10.9852 11.1603 11.4545 10 11.4545C8.83968 11.4545 7.72688 10.9852 6.90641 10.1498C6.08594 9.31445 5.625 8.18142 5.625 7C5.625 5.81858 6.08594 4.68555 6.90641 3.85016C7.72688 3.01477 8.83968 2.54545 10 2.54545ZM10 3.81818C9.1715 3.81918 8.37721 4.15473 7.79138 4.75122C7.20554 5.34771 6.87598 6.15644 6.875 7C6.875 8.75382 8.27625 10.1818 10 10.1818C11.7238 10.1818 13.125 8.75382 13.125 7C13.125 5.24618 11.7238 3.81818 10 3.81818Z"
                    fill="#9A9A9A"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
                  `
      );
    });
  });
}

function dataRefactor(data, maxLength) {
  if (data && typeof data === "string" && data.length > maxLength) {
    return data.substring(0, maxLength) + " ...";
  }
  return data;
}

function base64ToImageURL(base64Data) {
  return `data:image/png;base64,${base64Data}`;
}

function loadDataToViewPopup() {
  getMonitoringLog(targetLogCode)
    .then((data) => {
      console.log(data);
      $("#viewMonitoringLogModal .log-code-text").val(data.logCode);
      $("#viewMonitoringLogModal .log-date-text").val(
        dataRefactor(data.logDate, 12)
      );
      $("#viewMonitoringLogModal .details-text").val(data.observation);
      $("#viewMonitoringLogModal .observed-image").attr(
        "src",
        base64ToImageURL(data.observedImage)
      );
      $("#viewMonitoringLogModal .crop-set").val(data.cropCodes);
      $("#viewMonitoringLogModal .field-set").val(data.fieldCodes);
      $("#viewMonitoringLogModal .staff-id-text").val(data.staffIds);

      const filedSet = $("#viewMonitoringLogModal .field-set");

      filedSet.empty();

      $(data.fieldCodes).each(function (index, field) {
        getField(field)
          .then((data) => {
            filedSet.append(
              `<h6>${dataRefactor(data.fieldName, 10)} - ${dataRefactor(
                field,
                10
              )}</h6>`
            );
          })
          .catch((error) => {
            console.error("Error loading field details:", error);
          });
      });

      const cropSet = $("#viewMonitoringLogModal .crop-set");
      cropSet.empty();

      $(data.cropCodes).each(function (index, crop) {
        getCrop(crop)
          .then((data) => {
            cropSet.append(
              `<h6>${dataRefactor(data.cropCommonName, 10)} - ${dataRefactor(
                crop,
                10
              )}</h6>`
            );
          })
          .catch((error) => {
            console.error("Error loading crop details:", error);
          });
      });

      const staffSet = $("#viewMonitoringLogModal .staff-set");
      staffSet.empty();

      $(data.staffIds).each(function (index, staff) {
        getStaffMember(staff)
          .then((data) => {
            staffSet.append(
              `<h6>${dataRefactor(data.firstName, 10)} - ${dataRefactor(
                staff,
                10
              )}</h6>`
            );
          })
          .catch((error) => {
            console.error("Error loading staff details:", error);
          });
      });
    })
    .catch((error) => {
      console.error("Error loading log details:", error);
    });
}