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

    const colores = ["#4f77ff", "#6c4dff", "#8a5cff", "#4b45ff", "#9670ff"];
    globo.style.background = colores[Math.floor(Math.random() * colores.length)];

    globo.style.left = Math.random() * 95 + "vw";
    globo.style.animationDuration = (4 + Math.random() * 4) + "s";

    globosContainer.appendChild(globo);
    setTimeout(() => globo.remove(), 7000);
}
