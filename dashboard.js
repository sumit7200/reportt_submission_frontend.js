// Sample employee data (you can replace this with actual data fetched from a server)
const employees = [
    { employeeName: "John Doe", projectName: "vtt", date: "2023-09-18", hoursWorked: "5.0",comments:"good" },
    { employeeName: "Jane Smith", projectName: "VTT", date: "2023-09-18", hoursWorked: "8.0",comments:"veryGood" },
    { employeeName: "Bob Johnson", projectName: "VTT", date: "2023-09-18", hoursWorked: "2.0",comments:"Average" },
];

// Function to populate the employee table
function populateTable() {
    const tableBody = document.querySelector("tbody");
    tableBody.innerHTML = "";

    employees.forEach((employee) => {
        const row = tableBody.insertRow();
        row.innerHTML = `
            <td>${employee.employeeName}</td>
            <td>${employee.projectName}</td>
            <td>${employee.date}</td>
            <td>${employee.hoursWorked}</td>
            <td>${employee.comments}</td>
        `;
    });
}

// Call the function to populate the table when the page loads
window.addEventListener("load", populateTable);
