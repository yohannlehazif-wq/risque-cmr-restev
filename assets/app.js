/* =========================================================
    APPLICATION RESTEV VENDEE – RISQUE CHIMIQUE CMR
    Chargement des métiers + affichage dynamique des fiches
   ========================================================= */

// Charger le fichier JSON contenant les métiers
fetch("data/metiers.json")
    .then(response => {
        if (!response.ok) {
            throw new Error("Erreur lors du chargement du fichier JSON.");
        }
        return response.json();
    })
    .then(data => initApp(data))
    .catch(error => console.error("Erreur :", error));



/* =========================================================
    INITIALISATION DE L'APPLICATION
   ========================================================= */
function initApp(data) {
    const metierSelect = document.getElementById("metier");

    // Remplir la liste déroulante avec les métiers du JSON
    data.forEach(metier => {
        const option = document.createElement("option");
        option.value = metier.metier;
        option.textContent = metier.metier;
        metierSelect.appendChild(option);
    });

    // Lorsqu'un métier est sélectionné → afficher la fiche
    metierSelect.addEventListener("change", () => {
        const choix = metierSelect.value;

        // Si aucun métier choisi → cacher la carte
        if (choix === "") {
            document.getElementById("result").style.display = "none";
            return;
        }

        const metier = data.find(m => m.metier === choix);
        afficherFiche(metier);
    });
}



/* =========================================================
    AFFICHAGE DE LA FICHE METIER
   ========================================================= */
function afficherFiche(m) {
    // Afficher la carte
    const section = document.getElementById("result");
    section.style.display = "block";

    // Titre
    document.getElementById("title").textContent = m.metier;

    /* ---------------- RISQUES ---------------- */
    const risques = document.getElementById("risques");
    risques.innerHTML = "";  // Reset

    m.risques.forEach(r => {
        const li = document.createElement("li");
        li.textContent = r;
        risques.appendChild(li);
    });

    /* ---------------- PLAN D'ACTION ---------------- */
    const actions = document.getElementById("actions");
    actions.innerHTML = "";  // Reset

    m.actions.forEach(a => {
        const li = document.createElement("li");
        li.textContent = a;
        actions.appendChild(li);
    });

    /* ---------------- LIENS INRS / COMMENTAIRES ---------------- */
    const liens = document.getElementById("liens");
    liens.innerHTML = "";  // Reset

    m.liens.forEach(l => {
        const bloc = document.createElement("p");

        // Si un lien URL est défini → lien cliquable
        if (l.url && l.url !== "") {
            bloc.innerHTML = `${l.url}${l.titre}</a>`;
        }
        // Sinon → simple texte de commentaire
        else {
            bloc.textContent = l.titre;
        }
/* ============================
   BARRE DE RECHERCHE METIERS
   ============================ */

const searchInput = document.getElementById("search");
const metierSelect = document.getElementById("metier");

// Fonction pour filtrer la liste des métiers
searchInput.addEventListener("keyup", () => {
    const filter = searchInput.value.toLowerCase();

    // On parcourt toutes les options de la liste déroulante
    for (let i = 0; i < metierSelect.options.length; i++) {
        const option = metierSelect.options[i];
        const txt = option.textContent.toLowerCase();

        if (txt.includes(filter)) {
            option.style.display = "";
        } else {
            option.style.display = "none";
        }
    }

    // Si l’utilisateur sélectionne via la saisie → on efface le métier affiché
    document.getElementById("result").style.display = "none";
});
        liens.appendChild(bloc);
    });
}
