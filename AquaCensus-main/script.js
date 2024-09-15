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
            window.location.href = 'home.html';
        }
    });

    // Register button event listener
    registerButton.addEventListener('click', function() {
        // Redirect to cadastro.html without validation
        window.location.href = 'cadastro.html';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const favoritebutton = document.getElementById('favorite-btn')

    favoritebutton.addEventListener('click', function() {
        window.location.href = 'favoritos.html';

    })
});

document.addEventListener('DOMContentLoaded', function() {
    const contabutton = document.getElementById('conta-btn')

    contabutton.addEventListener('click', function() {
        window.location.href = 'home.html';

    })
    
});

// Selecting the username element and dropdown
const userName = document.getElementById('user-name');
const dropdown = document.getElementById('dropdown');

// Adding click event to toggle dropdown visibility
userName.addEventListener('click', function() {
  dropdown.classList.toggle('active'); // Toggle the active class
});

// Close the dropdown if clicking outside the user profile
window.onclick = function(event) {
  if (!event.target.matches('.user-name')) {
    if (dropdown.classList.contains('active')) {
      dropdown.classList.remove('active');
    }
  }
};
