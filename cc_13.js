// (Task #2) Function to create and add an employee card
function createEmployeeCard(name, position) {
    const container = document.getElementById("employeeContainer");
// Creating the card element
    const card = document.createElement("div");
    card.setAttribute("class", "employee-card");
// Creating heading for employee name
    const nameHeading = document.createElement("h2");
    nameHeading.textContent = name;
// Creating paragraph for employee position
    const positionPara = document.createElement("p");
    positionPara.textContent = position;
// Creating remove button
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.setAttribute("class", "remove-btn");

// (Task #4) Add event listener to remove the card and stop propagation
    removeButton.addEventListener("click", function (event) {
        container.removeChild(card); 
        event.stopPropagation(); 
    });
// Edit button for inline editing
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.setAttribute("class", "edit-btn");

// Adding event listener to the edit button
    editButton.addEventListener("click", function () {
        nameHeading.innerHTML = `<input type="text" value="${name}">`; 
        positionPara.innerHTML = `<input type="text" value="${position}">`; 
// Create and display the Save button to save the new details
        const saveButton = document.createElement("button");
        saveButton.textContent = "Save";
        saveButton.setAttribute("class", "save-btn");
// Replace the "Edit" button with the "Save" button
        card.replaceChild(saveButton, editButton);
// Add event listener to the Save button to save changes
        saveButton.addEventListener("click", function () {
            // Get the new values from the input fields
            const newName = nameHeading.querySelector("input").value;
            const newPosition = positionPara.querySelector("input").value;
// Update the employee card with the new values
            nameHeading.textContent = newName;
            positionPara.textContent = newPosition;
// Replace the "Save" button back with the "Edit" button
            card.replaceChild(editButton, saveButton);
// (Task #3) Highlight all employee cards after updating the current one
            document.querySelectorAll(".employee-card").forEach(function(card) {
                card.classList.add("highlight"); 
            });
        });
    });
    card.appendChild(nameHeading);
    card.appendChild(positionPara);
    card.appendChild(removeButton);
    card.appendChild(editButton);
    container.appendChild(card);
}
// Event listener on the employeeContainer
document.getElementById("employeeContainer").addEventListener("click", function () {
    console.log("An employee card was clicked!");
});
createEmployeeCard("Sam Bam", "Software Engineer");
createEmployeeCard("Bruce Wayne", "Project Manager");

