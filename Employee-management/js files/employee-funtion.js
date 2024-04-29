window.onload = function() {
    displayEmployees();
  };
  
  function displayEmployees() {
    const employeeTable = document.getElementById("employee-table");
    const tbody = employeeTable.getElementsByTagName("tbody")[0];
    tbody.innerHTML = "";
  
    employees.forEach(employee => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${employee.id}</td>
        <td>${capitalize(employee.firstName)}</td>
        <td>${capitalize(employee.lastName)}</td>
        <td>${employee.department}</td>
        <td>$${employee.salary.toFixed(2)}</td>
        <td>${employee.age > 40 ? 'Sr. Employee' : 'Jr. Employee'}</td>
        <td>
          <button onclick="editEmployee(${employee.id})">Edit</button>
          <button onclick="deleteEmployee(${employee.id})">Delete</button>
        </td>
      `;
      tbody.appendChild(tr);
    });
  }
  
  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  function addEmployee() {
    // Logic to navigate to add employee page
  }
  
  function editEmployee(id) {
    // Logic to navigate to edit employee page for the given id
  }
  
  function deleteEmployee(id) {
    // Logic to delete employee with the given id
  }
  