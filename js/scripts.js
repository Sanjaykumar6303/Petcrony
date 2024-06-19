// Example JavaScript functionality (for future enhancements)

// This function could be used for handling form submissions, dynamic updates, etc.
function handleFormSubmission(event) {
    event.preventDefault();
    alert("Form submitted!");
}

// Attach event listener to the form submit button
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", handleFormSubmission);
    }
});

// function loginmessage(){
//     alert("Login successfull!")
//     return true;
// }

// function showSuccessMessage() {
//     alert('Login successful!');
//     // Optionally, you can redirect the user after displaying the message
//     // window.location.href = 'dashboard.html';
//     return true; // Return true to allow form submission
// }

// Login.getElementById('login-form').addEventListener('submit', function(event) {
//     event.preventDefault();

//     setTimeout(function() {
//         alert('Login successful!');
        
//         window.location.href = 'index.html';
//     });   
// });
