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
    // Creating Edit button.
        const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.setAttribute("class", "edit-btn");
    // Click Event listener (Task #4)
    removeButton.addEventListener("click", function (event) {
        container.removeChild(card); // Remove the specific card
        event.stopPropagation(); // Prevent event from bubbling to the container
    });
    });
    card.appendChild(nameHeading);
    card.appendChild(positionPara);
    card.appendChild(removeButton);
    card.appendChild(editButton);
    container.appendChild(card);
}
document.getElementById("employeeContainer").addEventListener("click", function () {
    console.log("An employee card was clicked!");
});
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

// Task 4: Implementing Removal of Employee Cards with Event Bubbling
// Done inside the Task #2 section
