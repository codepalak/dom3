// fill in javascript code here
/ fill in javascript code here
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const tableBody = document.querySelector("tbody");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      // Get form values
      const name = document.getElementById("name").value;
      const employeeID = document.getElementById("employeeID").value;
      const department = document.getElementById("department").value;
      const experience = document.getElementById("exp").value;
      const email = document.getElementById("email").value;
      const mobileNumber = document.getElementById("mbl").value;
  
      // Calculate role based on experience
      let role;
      if (experience > 5) {
        role = "Senior";
      } else if (experience >= 2 && experience <= 5) {
        role = "Junior";
      } else {
        role = "Fresher";
      }
  
      // Create a new row
      const newRow = document.createElement("tr");
  
      // Populate the row with data
      newRow.innerHTML = `
        <td>${name}</td>
        <td>${employeeID}</td>
        <td>${department}</td>
        <td>${experience}</td>
        <td>${email}</td>
        <td>${mobileNumber}</td>
        <td>${role}</td>
        <td><button class="delete-btn">Delete</button></td>
      `;
  
      // Append the row to the table body
      tableBody.appendChild(newRow);
  
      // Reset the form
      form.reset();
    });
  
    // Add event delegation for delete buttons
    tableBody.addEventListener("click", function (event) {
      if (event.target.classList.contains("delete-btn")) {
        const row = event.target.closest("tr");
        row.remove();
      }
    });
  });
  
