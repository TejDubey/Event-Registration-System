const token = localStorage.getItem("token");

if (!token) {

    window.location.href = "login.html";

}

fetch("https://event-registration-system-eg97.onrender.com/dashboard", {

    method: "GET",

    headers: {

        Authorization: `Bearer ${token}`

    }

})

.then(async (response) => {

    if (!response.ok) {

        localStorage.removeItem("token");

        window.location.href = "login.html";

        return;

    }

    const user = await response.json();

    document.getElementById("name").innerText = user.name;

    document.getElementById("email").innerText = user.email;

    document.getElementById("gender").innerText = user.gender;

    document.getElementById("event").innerText = user.event;

    document.getElementById("interests").innerText =
        user.interests && user.interests.length
        ? user.interests.join(", ")
        : "None";

    document.getElementById("excitement").innerText =
        user.excitement + " / 10";

    document.getElementById("reason").innerText =
        user.reason;

})

.catch(err => {

    console.log(err);

});

document.getElementById("backBtn").addEventListener("click", () => {

    window.location.href = "dashboard.html";

});