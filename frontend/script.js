const form = document.getElementById("RegistrationForm");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    const name=document.getElementById("name").value;
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;
    const gender=document.querySelector('input[name="gender"]:checked').value;
    const eventType = document.getElementById("event").value;
    const reason = document.getElementById("message").value;
    const interests=[];
    document.querySelectorAll('input[name="interests"]:checked').forEach((item)=>{
        interests.push(item.value)
    })
    const excitement=document.getElementById("excitement").value;
    const data={
        name,
        email,
        password,
        gender,
        event: eventType,
        interests,
        excitement,
        reason
    }
    const status = document.getElementById("statusMessage");
    fetch("https://event-registration-system-eg97.onrender.com/register", {
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
        console.log("Server Response:", result);
        alert("Registration Successfull!")
    })
    .catch((error) => {
        console.log(error);
        status.innerText = "Something went wrong!";
        status.style.color = "red";
    });
});