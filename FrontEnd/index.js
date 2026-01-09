document.addEventListener("DOMContentLoaded", () => {
  const token = localStorage.getItem("token");
  // console.log("Token bon:", token);

  // if (token) {console.log("Utilisateur connecté");}
  // const modifBanniere = document.createElement("div");
  // modifBanniere.setAttribute("id", "banniere");
  // document.body.insertBefore(modifBanniere, document.body.firstChild);

  const loginConnection = document.getElementById("loginConnection");
  console.log(loginConnection);
  if (token) {
    const banniere = document.createElement("div");
    banniere.id = "banniereEdition";
    banniere.innerHTML = `
        <div id="banniere">
            <div id="texteBanniere">Modifier</div>
        </div>    
        `;
    document.body.prepend(banniere);
    const texteBanniere = document.getElementById("texteBanniere");
    texteBanniere.style.color = "white";

    loginConnection.textContent = "logout";
    loginConnection.addEventListener("click", () => {
      logout();
    });
  } else {
    loginConnection.textContent = "login";
    loginConnection.addEventListener("click", () => {
      window.location.href = "./login.html";
    });
  }

  function logout() {
    localStorage.removeItem("token");
    window.location.href = "./index.html";
    loginConnection.href = "./login.html";
  }
});
