// Task 1: Creating the Base Structure
// Task 2: Adding Employee Cards Dynamically
function createEmployeeCard(name, position) {
    const container = document.getElementById("employeeContainer");
    const card = document.createElement("div");
    card.setAttribute("class", "employee-card");
    // Header for employee name
    const nameHeading = document.createElement("h2");
    nameHeading.textContent = name;
    // Paragraph for Employee position.
    const positionPara = document.createElement("p");
    positionPara.textContent = position;
    // Remove button for employee cards.
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
createEmployeeCard("Sam Bam", "Software Engineer");
createEmployeeCard("Bruce Wayne", "Project Manager");

// Task 3: Converting NodeLists to Arrays for Bulk Updates
function highlightEmployeeCards() {
    // Selecting all employee cards
    const employeeCards = document.querySelectorAll(".employee-card");
    // Updating styles
    Array.from(employeeCards).forEach (card => {
        card.classList.add("highlight");
    });
}
highlightEmployeeCards();
