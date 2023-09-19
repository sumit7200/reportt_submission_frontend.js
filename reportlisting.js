const reports = [
    { id: 1, projectName: "Project A", date: "2023-09-01" },
    { id: 2, projectName: "Project B", date: "2023-09-02" },
    { id: 3, projectName: "Project C", date: "2023-09-03" },
    { id: 4, projectName: "Project A", date: "2023-09-01" },
    { id: 5, projectName: "Project B", date: "2023-09-02" },
    { id: 6, projectName: "Project C", date: "2023-09-03" },
    { id: 7, projectName: "Project A", date: "2023-09-01" },
    { id: 8, projectName: "Project B", date: "2023-09-02" },
    { id: 9, projectName: "Project C", date: "2023-09-03" },
    { id: 10, projectName: "Project A", date: "2023-09-01" },
    { id: 11, projectName: "Project B", date: "2023-09-02" },
    { id: 12, projectName: "Project C", date: "2023-09-03" },
    { id: 13, projectName: "Project A", date: "2023-09-01" },
    { id: 14, projectName: "Project B", date: "2023-09-02" },
    { id: 15, projectName: "Project C", date: "2023-09-03" },
    { id: 16, projectName: "Project A", date: "2023-09-01" },
    { id: 17, projectName: "Project B", date: "2023-09-02" },
    { id: 18, projectName: "Project C", date: "2023-09-03" },
    { id: 19, projectName: "Project A", date: "2023-09-01" },
    { id: 20, projectName: "Project B", date: "2023-09-02" },
    { id: 21, projectName: "Project C", date: "2023-09-03" },
    { id: 22, projectName: "Project A", date: "2023-09-01" },
    { id: 23, projectName: "Project B", date: "2023-09-02" },
    { id: 24, projectName: "Project C", date: "2023-09-03" },
];

const reportTable = document.getElementById("reportTable");
const dateFilter = document.getElementById("dateFilter");
const projectFilter = document.getElementById("projectFilter");
const pagination = document.getElementById("pagination");

// Function to display reports in the table
function displayReports(reports) {debugger

    reportTable.innerHTML = "";
    for (const report of reports) {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${report.id}</td>
            <td>${report.projectName}</td>
            <td>${report.date}</td>
        `;
        reportTable.appendChild(row);
    }
}

// Function to handle pagination (replace with actual pagination logic)
function handlePagination(pageNumber, pageSize) {
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedReports = reports.slice(startIndex, endIndex);
    displayReports(paginatedReports);
}

// Function to filter reports by date and project
function filterReports() {
    const filteredReports = reports.filter(report => {
        const selectedDate = dateFilter.value;
        const selectedProject = projectFilter.value.toLowerCase();
        return (
            (!selectedDate || report.date === selectedDate) &&
            (!selectedProject || report.projectName.toLowerCase().includes(selectedProject))
        );
    });
    handlePagination(1, 10); // Reset pagination to the first page
    displayReports(filteredReports);
}

handlePagination(1, 10); // Display the first page of reports
dateFilter.addEventListener("change", filterReports);
projectFilter.addEventListener("input", filterReports);
// Implement pagination controls and logic here

// Sample pagination code (replace with your own)
const totalPages = Math.ceil(reports.length / 10);
for (let i = 1; i <= totalPages; i++) {
    const button = document.createElement("button");
    button.textContent = i;
    button.addEventListener("click", () => {
        handlePagination(i, 10);
    });
    pagination.appendChild(button);
}
