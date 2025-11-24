const btn = document.getElementById("celebrarBtn");
const globosContainer = document.getElementById("globos");

btn.addEventListener("click", () => {
    // Generar 15 globos
    for (let i = 0; i < 15; i++) {
        crearGlobo();
    }

    // Mensaje al hacer clic
    alert("🎉 ¡Que tu día sea tan precioso como tú! 🎂💖");
});

function crearGlobo() {
    const globo = document.createElement("div");
    globo.classList.add("globo");

    // Colores tiernos aleatorios
    const colores = ["#ffcee6", "#ffc8dd", "#ffd6ff", "#cdb4db", "#deaaff", "#f8c8dc"];
    globo.style.background = colores[Math.floor(Math.random() * colores.length)];

    // Posición aleatoria
    globo.style.left = Math.random() * 95 + "vw";

    // Velocidad aleatoria
    globo.style.animationDuration = (4 + Math.random() * 4) + "s";

    globosContainer.appendChild(globo);

    // Eliminar después de la animación
    setTimeout(() => {
        globo.remove();
    }, 7000);
}
