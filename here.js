function togglepassword(inputId, toggleId) {
    var passworditself = document.getElementById(inputId);
    var showitself = document.getElementById(toggleId);

    if (passworditself.type === "password") {
        passworditself.type = "text";
        showitself.textContent = "Hide";
    } else {
        passworditself.type = "password";
        showitself.textContent = "Show";
    }
}