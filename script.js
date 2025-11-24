const btn = document.getElementById("celebrarBtn");
const globosContainer = document.getElementById("globos");

btn.addEventListener("click", () => {
    // Generar 15 globos
    for (let i = 0; i < 15; i++) {
        crearGlobo();
    }

    // Mensaje al hacer clic
    alert("🎉 ¡Que tu día sea tan precioso como tú! 💙💜🎂");
});

function crearGlobo() {
    const globo = document.createElement("div");
    globo.classList.add("globo");

    // Colores azul + morado
    const colores = ["#6a5af9", "#7b3fff", "#4b6aff", "#5f7bff", "#8a4dff"];
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
