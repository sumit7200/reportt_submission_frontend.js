
window.addEventListener("load", fetchDataAndPopulateTable);
 // Function to fetch data from the API and populate the employee table
function fetchDataAndPopulateTable() {
    const tableBody = document.querySelector("tbody");
    tableBody.innerHTML = "";

    // Replace 'API_URL' with the actual URL of your API
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
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
}

//filter
document.addEventListener("DOMContentLoaded", function () {
    // Your initial data and setup code here

    // Get references to the date input fields and the filter button
    const startDateInput = document.getElementById("startDate");
    const endDateInput = document.getElementById("endDate");
    const filterButton = document.getElementById("filterButton");

    // Add an event listener to the filter button
    filterButton.addEventListener("click", function () {
        const startDate = new Date(startDateInput.value);
        const endDate = new Date(endDateInput.value);

        // Loop through the table rows and hide/show based on the date range
        const rows = document.querySelectorAll("#employee-table tbody tr");

        rows.forEach(function (row) {
            const dateCell = row.querySelector("td:nth-child(4)"); // Assuming the date is in the third column

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

    // Add an event listener to the logout button
    logoutButton.addEventListener("click", function () {
        // Perform logout actions here, such as redirecting to a logout page or clearing session data.
        // For demonstration purposes, you can simply alert a message.
        alert("Logged out successfully!");
    });


// window.history.pushState(null, null, window.location.href);window.onpopstate = function () {
// };    


// Call the function to fetch data and populate the table when the page loads

