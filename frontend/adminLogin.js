const form = document.getElementById("loginForm");

const status = document.getElementById("status");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const email = document.getElementById("email").value;

    const password = document.getElementById("password").value;

    const response = await fetch(

        "https://event-registration-system-eg97.onrender.com/admin/login",

        {

            method: "POST",

            headers: {

                "Content-Type": "application/json"

            },

            body: JSON.stringify({

                email,
                password

            })

        }

    );

    const result = await response.json();

    if (!response.ok) {

        status.innerText = result.message;

        status.style.color = "red";

        return;

    }

    localStorage.setItem(
        "adminToken",
        result.token
    );

    status.innerText = result.message;

    status.style.color = "green";

    setTimeout(() => {

        window.location.href =
        "adminDashboard.html";

    }, 1000);

});
const togglePassword = document.getElementById("togglePassword");
const password = document.getElementById("password");

togglePassword.addEventListener("click", () => {

    if (password.type === "password") {

        password.type = "text";

        togglePassword.classList.replace("fa-eye", "fa-eye-slash");

    } else {

        password.type = "password";

        togglePassword.classList.replace("fa-eye-slash", "fa-eye");

    }

});