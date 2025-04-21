// === CAMBIO DE MODO OSCURO / CLARO ===
const botonModo = document.getElementById("modo-btn");
const icono = document.getElementById("modo-icono");

botonModo.addEventListener("click", () => {
    const body = document.body;
    const esClaro = body.classList.toggle("light-mode");

// Cambiar el ícono dependiendo del modo
    icono.src = esClaro
    ? "./src/storage/img/sol.png"   
    : "./src/storage/img/luna.png"; 
});
