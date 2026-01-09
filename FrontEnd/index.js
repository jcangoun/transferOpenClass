

const token = localStorage.getItem("token");
// console.log("Token bon:", token);

// if (token) {console.log("Utilisateur connecté");}
// const modifBanniere = document.createElement("div");
// modifBanniere.setAttribute("id", "banniere");
// document.body.insertBefore(modifBanniere, document.body.firstChild);

const loginConnection = document.getElementById("loginConnection");
console.log(loginConnection);
if (token) {
    loginConnection.textContent= "logout";
    loginConnection.addEventListener("click", () => {
        logout();
    });
} else {
    loginConnection.textContent= "login";
    loginConnection.addEventListener("click", () => {
        window.location.href = "./login.html";
    });
}

function logout() {
    localStorage.removeItem("token");
    window.location.href = "./index.html";
    loginConnection.href = "./login.html";
}