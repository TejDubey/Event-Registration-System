const token = localStorage.getItem("token");

if (!token) {
    window.location.href = "login.html";
}

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const genderInput = document.getElementById("gender");
const eventInput = document.getElementById("event");
const excitementInput = document.getElementById("excitement");
const reasonInput = document.getElementById("reason");
const levelValue = document.getElementById("levelValue");
const status = document.getElementById("status");
const form = document.getElementById("editForm");

fetch("https://event-registration-system-eg97.onrender.com/dashboard", {

    method: "GET",

    headers: {
        Authorization: `Bearer ${token}`
    }

})
.then(response => response.json())

.then(user => {

    nameInput.value = user.name;
    emailInput.value = user.email;
    genderInput.value = user.gender;
    eventInput.value = user.event;
    excitementInput.value = user.excitement;
    reasonInput.value = user.reason;

    levelValue.innerText = user.excitement;

    const checkboxes = document.querySelectorAll("input[name='interests']");

    checkboxes.forEach(box => {

        if (user.interests.includes(box.value)) {
            box.checked = true;
        }

    });

})
.catch(err => {

    console.log(err);

    status.innerText = "Unable to load profile.";
    status.style.color = "red";

});

excitementInput.addEventListener("input", () => {

    levelValue.innerText = excitementInput.value;

});

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const interests = [];

    document
        .querySelectorAll("input[name='interests']:checked")
        .forEach(item => {

            interests.push(item.value);

        });

    const updatedUser = {

        name: nameInput.value,
        gender: genderInput.value,
        event: eventInput.value,
        interests: interests,
        excitement: excitementInput.value,
        reason: reasonInput.value

    };

    try {

        const response = await fetch("https://event-registration-system-eg97.onrender.com/profile", {

            method: "PUT",

            headers: {

                "Content-Type": "application/json",

                Authorization: `Bearer ${token}`

            },

            body: JSON.stringify(updatedUser)

        });

        const result = await response.json();

        if (!response.ok) {

            status.innerText = result.message;
            status.style.color = "red";
            return;

        }

        status.innerText = result.message;
        status.style.color = "green";

        setTimeout(() => {

            window.location.href = "dashboard.html";

        }, 1500);

    }

    catch (err) {

        console.log(err);

        status.innerText = "Something went wrong!";
        status.style.color = "red";

    }

});

document.getElementById("backBtn").addEventListener("click", () => {

    window.location.href = "dashboard.html";

});