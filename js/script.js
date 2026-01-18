// Day 1: JS file connection check
console.log("Trip On Tap JavaScript connected successfully!");

// Day 2: Variables & Data Types
let userName = "";
let userEmail = "";
const basePrice = 15000;

console.log("Variables initialized");

// Day 3: Conditional Statements
function isFormValid(name, email) {
    if (name === "" || email === "") {
        return false;
    } else {
        return true;
    }
}

// Day 4: Functions
function showSuccessMessage() {
    alert("Form submitted successfully!");
}

function showErrorMessage() {
    alert("Please fill all required fields.");
}

// Day 5: DOM Selection
const form = document.getElementById("contactForm");
const statusMessage = document.getElementById("statusMessage");

// Day 6 & 7: Event Handling + Validation
form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = form.elements[0].value;
    const email = form.elements[1].value;

    if (isFormValid(name, email)) {
        statusMessage.textContent = "Form submitted successfully!";
        statusMessage.style.color = "green";
        showSuccessMessage();
    } else {
        statusMessage.textContent = "Please fill all required fields.";
        statusMessage.style.color = "red";
        showErrorMessage();
    }
});