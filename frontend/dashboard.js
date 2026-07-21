const token = localStorage.getItem("token");

if (!token) {
    window.location.href = "login.html";
}

fetch("http://localhost:5000/dashboard", {

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
    document.getElementById("userid").innerText = user._id;

})
.catch(err => {

    console.log(err);

});

document.getElementById("editBtn").addEventListener("click", () => {

    window.location.href = "editProfile.html";

});

document.getElementById("logout").addEventListener("click", () => {

    localStorage.removeItem("token");

    window.location.href = "login.html";

});

document.getElementById("deleteBtn").addEventListener("click", async () => {

    const confirmDelete = confirm(
        "Are you sure you want to delete your account?\n\nThis action cannot be undone."
    );

    if (!confirmDelete) {
        return;
    }

    try {

        const response = await fetch("http://localhost:5000/profile", {

            method: "DELETE",

            headers: {

                Authorization: `Bearer ${token}`

            }

        });

        const result = await response.json();

        alert(result.message);

        localStorage.removeItem("token");

        window.location.href = "login.html";

    }

    catch (err) {

        console.log(err);

        alert("Something went wrong!");

    }

});

document.getElementById("registrationBtn").addEventListener("click", () => {

    window.location.href = "myreg.html";

});