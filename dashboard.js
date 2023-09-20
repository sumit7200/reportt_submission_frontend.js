window.addEventListener("load", fetchDataAndPopulateTable);
function fetchDataAndPopulateTable() {
    const tableBody = document.querySelector("tbody");
    tableBody.innerHTML = "";

    fetch('http://localhost:8080/report/fetchAll')
        .then((response) => response.json())
        .then((data) => {
            data.forEach((employee) => {
                const row = tableBody.insertRow();
                row.innerHTML = `
                    <td>${employee.id}
                    <td>${employee.employeeName}</td>
                    <td>${employee.projectName}</td>
                    <td>${employee.date}</td>
                    <td>${employee.hoursWorked}</td>
                    <td>${employee.comments}</td>   
                `;
            });
            var totalEmployes = data.length;
            var showData = document.getElementById("totalEmployeeCount");
            showData.innerHTML = `${totalEmployes}`
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
}

//filter
document.addEventListener("DOMContentLoaded", function () {
    const startDateInput = document.getElementById("startDate");
    const endDateInput = document.getElementById("endDate");
    const filterButton = document.getElementById("filterButton");

    filterButton.addEventListener("click", function () {
        const startDate = new Date(startDateInput.value);
        const endDate = new Date(endDateInput.value);

        const rows = document.querySelectorAll("#employee-table tbody tr");
        rows.forEach(function (row) {
            const dateCell = row.querySelector("td:nth-child(4)");
            if (dateCell) {
                const cellDate = new Date(dateCell.textContent);
                if (cellDate >= startDate && cellDate <= endDate) {
                    row.style.display = "";
                } else {
                    row.style.display = "none";
                }
            }
        });
    });
});

//Logout button
const logoutButton = document.getElementById("logoutButton");
logoutButton.addEventListener("click", function () {
    alert("Logged out successfully!");
    window.location.replace('./index.html')
});