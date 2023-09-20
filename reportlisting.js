window.addEventListener("load", fetchDataAndPopulateTable);
var reports = [];
async function fetchDataAndPopulateTable() {
    const tableBody = document.querySelector("tbody");
    tableBody.innerHTML = "";

    await fetch('http://localhost:8080/report/fetchAll')
        .then((response) => response.json())
        .then((data) => {
            console.log(data, 'keydat')
            reports = data;
            data.forEach((employee) => {
                const row = tableBody.insertRow();
                row.innerHTML = `
                    <td>${employee.id}
                    <td>${employee.projectName}</td>
                    <td>${employee.date}</td>
                `;
            });
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
}

const reportTable = document.getElementById("reportTable");
const dateFilter = document.getElementById("dateFilter");
const projectFilter = document.getElementById("projectFilter");
const pagination = document.getElementById("pagination");

function displayReports(reports) {

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

function handlePagination(pageNumber, pageSize) {
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    if (reports.length > 0) {
        const paginatedReports = reports.slice(startIndex, endIndex);
        displayReports(paginatedReports);
    }
}

function filterReports() {
    const filteredReports = reports.filter(report => {
        const selectedDate = dateFilter.value;
        console.log(selectedDate, "datttttt");
        const selectedProject = projectFilter.value.toLowerCase();
        return (
            (!selectedDate || report.date === selectedDate) &&
            (!selectedProject || report.projectName.toLowerCase().includes(selectedProject))
        );
    });
    handlePagination(1, 10);
    displayReports(filteredReports);
}

handlePagination(1, 10);
dateFilter.addEventListener("change", filterReports);
projectFilter.addEventListener("input", filterReports);

if (reports?.length > 0) {
    const totalPages = Math.ceil(reports.length / 10);
    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement("button");
        button.textContent = i;
        button.addEventListener("click", () => {
            handlePagination(i, 10);
        });
        pagination.appendChild(button);
    }
}