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
    // Ici, si j ai le token je crée la banniere d édition
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

    
    //  Je veux recupérer les differents projets qui sont dans l' API a l ouverture de la galerie photos

    texteBanniere.addEventListener("click", () => {


      //  Je veux recupérer les differents projets qui sont dans l' API 
      fetch("http://localhost:5678/api/works")


    })
   .then(response => response.json()) // convertir la réponse en JSON
    .then(data => {
        console.log(data); // ici tu récupères tes données
    })
    .catch(error => {
        console.error("Erreur :", error);
    });

 


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
