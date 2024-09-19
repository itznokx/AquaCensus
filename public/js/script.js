document.addEventListener('DOMContentLoaded', function() {
    // Get references to the buttons and inputs
    const loginButton = document.getElementById('login-button');
    const registerButton = document.getElementById('register-button');
    const emailInput = document.getElementById('email-input');
    const passwordInput = document.getElementById('password-input');

    // Login button event listener
    loginButton.addEventListener('click', async function() {
        const email = emailInput.value.trim();
        const senha = passwordInput.value.trim();

        // Check if both email and password are filled
        if (email === '' || senha === '') {
            alert('Insira o email e a senha!');
        } else {
            try {
                const myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");

                const raw = JSON.stringify({
                "email": email,
                "senha": senha
                });

                const requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: raw,
                redirect: "follow"
                };
                function redirect(result){
                    window.location.href = 'home.html';
                }

                fetch("http://localhost:3000/usuarios/login", requestOptions)
                .then((response) => response.text())
                .then((result) => redirect(result))
                .catch((error) => console.error(error));

                /*
                const response = await fetch('http://localhost:3000/usuarios/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email, senha }),
                    redirect: "follow"
                });
            
                
                if (!response.ok) {
                    throw new Error('Erro na resposta da API: ' + response.status);
                }
            
                
                const data = await response.json();
                console.log(data);
            
                
                if (data && data.user_id) {
                    window.location.href = 'home.html';
                } else {
                    alert('Erro ao fazer login: ' + (data.error || 'Erro desconhecido'));
                }
                */
            } 
            catch (error) {
                alert('Erro de conexão com a API: ' + error.message);
            }
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

    favoritebutton.addEventListener('click', async function() {
        try {
            const response = await fetch('/favoritos'); 

            if(response.ok) {
                window.location.href = 'favoritos.html';
            } else {
                alert('Erro ao carregar favoritos.');
            }
        } catch (error) {
            alert('Erro de conexão com a API.');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const contabutton = document.getElementById('conta-btn')

    contabutton.addEventListener('click', function() {
        window.location.href = 'home.html';

    })
    
});

document.addEventListener('DOMContentLoaded', function() {
    const especiebutton = document.getElementById('especie-btn')

    especiebutton.addEventListener('click', function() {
        window.location.href = 'cadastrar-especie.html';

    })
    
});

document.addEventListener('DOMContentLoaded', function() {
    const coletasbutton = document.getElementById('coletas-btn')

    coletasbutton.addEventListener('click', function() {
        window.location.href = 'coletas.html';

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