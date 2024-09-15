document.addEventListener('DOMContentLoaded', function() {
    // Get references to the buttons and inputs
    const loginButton = document.getElementById('login-button');
    const registerButton = document.getElementById('register-button');
    const emailInput = document.getElementById('email-input');
    const passwordInput = document.getElementById('password-input');

    // Login button event listener
    loginButton.addEventListener('click', function() {
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        // Check if both email and password are filled
        if (email === '' || password === '') {
            alert('Insira o email e a senha!');
        } else {
            // If fields are filled, redirect to favoritos.html
            window.location.href = 'favoritos.html';
        }
    });

    // Register button event listener
    registerButton.addEventListener('click', function() {
        // Redirect to cadastro.html without validation
        window.location.href = 'cadastro.html';
    });
});
