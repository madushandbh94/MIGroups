// address.js

// Define the address and email
const address = "No: 02, Rathmetiya, Rikillagaskada, Sri Lanka";
const email = "dhanutech19@gmail.com";

// Function to update the address and email on all pages
function updateContactInfo() {
    // Get all elements with the class 'address' and update their content
    const addressElements = document.querySelectorAll('.address');
    addressElements.forEach(function (element) {
        element.textContent = address;
    });

    // Get all elements with the class 'email' and update their content
    const emailElements = document.querySelectorAll('.email');
    emailElements.forEach(function (element) {
        element.textContent = email;
    });
}

// Call the updateContactInfo function when the page loads
window.onload = updateContactInfo;
