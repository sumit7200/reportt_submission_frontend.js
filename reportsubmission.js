var form = document.getElementById("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  var employeeName = document.getElementById("employeeName").value;
  var projectName = document.getElementById("projectName").value;
  var date = document.getElementById("date").value;
  var hoursWorked = document.getElementById("hoursWorked").value;
  var comments = document.getElementById("comments").value;

  fetch("http://localhost:8080/report/save", {
    method: "POST",
    body: JSON.stringify({
      employeeName: employeeName,
      projectName: projectName,
      date: date,
      hoursWorked: hoursWorked,
      comments: comments,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      alert("Data Saved Successfully");
      document.getElementById("employeeName").value = "";
      document.getElementById("projectName").value = "";
      document.getElementById("date").value = "";
      document.getElementById("hoursWorked").value = "";
      document.getElementById("comments").value = "";
    })
    .catch((error) => console.error("Error:", error));
});