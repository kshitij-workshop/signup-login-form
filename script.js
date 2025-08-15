// Simple JS toggle between forms
const signupForm = document.getElementById('signupForm');
const loginForm = document.getElementById('loginForm');

document.querySelectorAll('.switch-link a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        if (link.getAttribute('href') === '#loginForm') {
            signupForm.style.display = 'none';
            loginForm.style.display = 'block';
        } else {
            loginForm.style.display = 'none';
            signupForm.style.display = 'block';
        }
    });
});


function signup(){
    let username = document.getElementById("signup-username")
    let email = document.getElementById("signup-email")
    let password = document.getElementById("signup-password")
    let data = {
        username: username.value,
        email: email.value,
        password: password.value
    } 
    localStorage.setItem('data', JSON.stringify(data))
    username.value = []
    email.value = []
    password.value = []
    alert("Signup Successful, Now You can Login")
}

function login(){
    let id = document.getElementById("login-email")
    let password = document.getElementById("login-password")
    let data = localStorage.getItem('data')
    data = JSON.parse(data)
    if ((id.value === data.username || id.value === data.email) && password.value === data.password){
        alert("Login Succesful")
    }else{
        alert("Please enter correct username or password")
    }
    id.value = []
    password.value = []
    
}
 


// Toggle password visibility
document.querySelectorAll('.toggle-password').forEach(icon => {
    icon.addEventListener('click', () => {
        const targetId = icon.getAttribute('data-target');
        const passwordInput = document.getElementById(targetId);
        
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            icon.classList.remove('fa-eye');
            icon.classList.add('fa-eye-slash');
        } else {
            passwordInput.type = "password";
            icon.classList.remove('fa-eye-slash');
            icon.classList.add('fa-eye');
        }
    });
});



