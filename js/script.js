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
