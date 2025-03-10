// Task 1: Creating the Base Structure
// Task 2: Adding Employee Cards Dynamically
function createEmployeeCard(name, position) {
    const container = document.getElementById("employeeContainer");
    const card = document.createElement("div");
    card.setAttribute("class", "employee-card");
    const nameHeading = document.createElement("h2");
    nameHeading.textContent = name;
    const positionPara = document.createElement("p");
    positionPara.textContent = position;
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.setAttribute("class", "remove-btn");
    removeButton.addEventListener("click", function () {
        container.removeChild(card);
    });
    card.appendChild(nameHeading);
    card.appendChild(positionPara);
    card.appendChild(removeButton);
    container.appendChild(card);
}
createEmployeeCard("John Doe", "Software Engineer");
createEmployeeCard("Jane Smith", "Project Manager");
