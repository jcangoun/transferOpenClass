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

    
    fetch("https://api.exemple.com/data")
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

const gallery = document.querySelector(".gallery");

async function works () {
    try {
        const response = await fetch("http://localhost:5678/api/works");
        const data = await response.json();
        console.log(data);
        data.forEach((data) => {
            work(data);
        });
    } catch (error) {
        console.log(error);
    }
}
works();
function work (data) {
    const figure = document.createElement("figure");
    const img = document.createElement("img");
    img.src = data.imageUrl;
    img.alt = data.title;
    const figcaption = document.createElement("figcaption");
    figcaption.textContent = data.title;
    figure.appendChild(img);
    figure.appendChild(figcaption);
    gallery.appendChild(figure);
}