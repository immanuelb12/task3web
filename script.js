document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('register-form');
    const loginForm = document.getElementById('login-form');
 
    function isValidPhoneNumber(phone) { 
        const regex = /^\+?\d{8,}$/;
        return regex.test(phone);
    }
 
    function isStrongPassword(password) {
         const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return regex.test(password);
    }

    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const fullName = document.getElementById('fullname').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const dob = document.getElementById('dob').value.trim();
        const password = document.getElementById('password').value.trim();
 
        if (fullName === '' || email === '' || phone === '' || dob === '' || password === '') {
            displayErrorMessage('Please fill in all fields', 'register-error-message');
            return;
        }
 
        if (!isValidDateOfBirth(dob)) {
            displayErrorMessage('Please enter a valid Date of Birth (YYYY-MM-DD)', 'register-error-message');
            return;
        }
 
        if (!isValidPhoneNumber(phone)) {
            displayErrorMessage('Please enter a valid Phone Number', 'register-error-message');
            return;
        }
 
        if (!isStrongPassword(password)) {
            displayErrorMessage('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character (@$!%*?&)', 'register-error-message');
            return;
        }
 
        displaySuccessMessage('Registration successful', 'register-error-message');
 
        registerForm.reset();
    });

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const loginEmail = document.getElementById('login-email').value.trim();
        const loginPassword = document.getElementById('login-password').value.trim();
 
        if (loginEmail === '' || loginPassword === '') {
            displayErrorMessage('Please fill in all fields', 'login-error-message');
            return;
        } 
        displaySuccessMessage('Login successful', 'login-error-message');
 
        loginForm.reset();
    });

    function displayErrorMessage(message, elementId) {
        const errorMessageElement = document.getElementById(elementId);
        errorMessageElement.textContent = message;
        errorMessageElement.style.display = 'block';
    }

    function displaySuccessMessage(message, elementId) {
        const successMessageElement = document.getElementById(elementId);
        successMessageElement.textContent = message;
        successMessageElement.style.color = 'green'; // Example of success message style
        successMessageElement.style.display = 'block';
    }

    function isValidDateOfBirth(dob) { 
        const regex = /^\d{4}-\d{2}-\d{2}$/;
        return regex.test(dob);
    }
});
