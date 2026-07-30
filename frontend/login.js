const form = document.getElementById("loginForm");
const status = document.getElementById("loginStatus");
const togglePassword = document.getElementById("togglePassword");
const passwordInput = document.getElementById("password");

togglePassword.addEventListener("click", () => {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        togglePassword.classList.remove("fa-eye");
        togglePassword.classList.add("fa-eye-slash");
    } 
    else{
        passwordInput.type = "password";
        togglePassword.classList.remove("fa-eye-slash");
        togglePassword.classList.add("fa-eye");
    }
});
form.addEventListener("submit", function(event){
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const data = {
        email,
        password
    };
    fetch("https://event-registration-system-eg97.onrender.com/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(async (response) => {
        const result = await response.json();
        if (!response.ok) {
            status.innerText = result.message;
            status.style.color = "red";
            return;
        }
        status.innerText = result.message;
        status.style.color = "green";
        localStorage.setItem("token", result.token);
        window.location.href = "dashboard.html";
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
        status.innerText = "Server Error";
        status.style.color = "red";
    });
});