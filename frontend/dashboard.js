const token = localStorage.getItem("token");

if(!token){
    window.location.href="login.html";
}
document.getElementById("name").innerText="Tej Dubey";
document.getElementById("email").innerText="tej@gmail.com";
document.getElementById("userid").innerText="Loading...";
document.getElementById("logout").addEventListener("click",()=>{
    localStorage.removeItem("token");
    window.location.href="login.html";
});