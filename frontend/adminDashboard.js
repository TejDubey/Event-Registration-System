const token = localStorage.getItem("adminToken");

let allUsers = [];

fetch("https://event-registration-system-eg97.onrender.com", {

    headers: {
        Authorization: `Bearer ${token}`
    }

})

.then(res => res.json())

.then(users => {

    console.log(users);

    allUsers = users;

    displayUsers(users);

})

.catch(err => {

    console.log(err);

});

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

    const token = localStorage.getItem("adminToken");

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

    location.reload();

}
function logout() {

    localStorage.removeItem("adminToken");

    window.location.href = "adminLogin.html";

}