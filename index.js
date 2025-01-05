// Function to toggle password visibility
function togglepassword(inputId, toggleId) {
    const passwordField = document.getElementById(inputId);
    const toggleText = document.getElementById(toggleId);

    if (passwordField.type === "password") {
        passwordField.type = "text";
        toggleText.textContent = "Hide";
    } else {
        passwordField.type = "password";
        toggleText.textContent = "Show";
    }
}

// Form and popup elements
const signupForm = document.getElementById('signupForm');
const popupContainer = document.querySelector('.popup-container');
const popupBox = document.querySelector('.popup-box');
const content = document.querySelector('.content');

// Function to show popup
function showPopup() {
    popupContainer.style.display = 'flex';
    popupBox.classList.add('active');
    content.classList.add('blur');
}

// Function to close popup
function closePopup() {
    popupBox.classList.remove('active');
    content.classList.remove('blur');
    setTimeout(() => {
        popupContainer.style.display = 'none';
    }, 300);
}

// Form submission handler
signupForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('conpassword').value.trim();
    const agree = document.getElementById('agree').checked;

    // Input validation
    if (!name || !email || !password || !confirmPassword) {
        alert('Please fill out all fields.');
        return;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    if (!agree) {
        alert('You must agree to the Terms of Service and Privacy Policy.');
        return;
    }

    // If all validations pass
    showPopup();
});

// Email validation function
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email format check
    return emailRegex.test(email);
}
