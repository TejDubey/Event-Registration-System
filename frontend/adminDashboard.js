const token = localStorage.getItem("adminToken");

if (!token) {
    alert("Please login as admin first.");
    window.location.href = "adminLogin.html";
}

let allUsers = [];

async function loadUsers() {
    try {
        const res = await fetch(
            "https://event-registration-system-eg97.onrender.com/admin/users",
            {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        const data = await res.json();

        console.log("Status:", res.status);
        console.log("Response:", data);

        if (!res.ok) {
            alert(data.message);

            if (res.status === 401 || res.status === 403) {
                localStorage.removeItem("adminToken");
                window.location.href = "adminLogin.html";
            }

            return;
        }

        allUsers = data;
        displayUsers(allUsers);

    } catch (err) {
        console.error(err);
        alert("Unable to connect to the server.");
    }
}

loadUsers();

function displayUsers(users) {

    document.getElementById("usersCount").innerText = users.length;
    document.getElementById("eventsCount").innerText = users.length;

    const table = document.getElementById("userTable");
    table.innerHTML = "";

    users.forEach(user => {

        table.innerHTML += `
        <tr>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.event}</td>
            <td>
                <button
                    class="action-btn delete"
                    onclick="deleteUser('${user._id}')">
                    Delete
                </button>
            </td>
        </tr>
        `;

    });

}

function searchUsers() {

    const text = document
        .getElementById("searchInput")
        .value
        .toLowerCase();

    const filtered = allUsers.filter(user =>

        user.name.toLowerCase().includes(text) ||
        user.email.toLowerCase().includes(text) ||
        user.event.toLowerCase().includes(text)

    );

    displayUsers(filtered);

}

async function deleteUser(id) {

    if (!confirm("Delete this user?"))
        return;

    try {

        const res = await fetch(
            "https://event-registration-system-eg97.onrender.com/admin/delete/" + id,
            {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        );

        const result = await res.json();

        alert(result.message);

        loadUsers();

    } catch (err) {

        console.error(err);
        alert("Delete failed.");

    }

}

function logout() {

    localStorage.removeItem("adminToken");
    window.location.href = "adminLogin.html";

}