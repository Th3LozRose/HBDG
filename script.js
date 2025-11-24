const btnCelebrar = document.getElementById("celebrarBtn");
const globosContainer = document.getElementById("globos");

btnCelebrar.addEventListener("click", () => {
    for (let i = 0; i < 20; i++) {
        crearGlobo();
    }
});

function crearGlobo() {
    const globo = document.createElement("div");
    globo.classList.add("globo");

    const colores = ["#7b3fff", "#4b6aff", "#5f7bff", "#8a4dff", "#6a5af9"];
    globo.style.background = colores[Math.floor(Math.random() * colores.length)];

    globo.style.left = Math.random() * 95 + "vw";
    globo.style.animationDuration = (4 + Math.random() * 4) + "s";

    globosContainer.appendChild(globo);
    setTimeout(() => globo.remove(), 7000);
}
