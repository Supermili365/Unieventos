document.addEventListener("DOMContentLoaded", function () {
    const userBtn = document.getElementById("userBtn");
    const menuUsuario = document.getElementById("menuUsuario");
    const cerrarMenu = document.getElementById("cerrarMenu");
    const overlay = document.getElementById("overlay");

    if (!userBtn || !menuUsuario || !cerrarMenu || !overlay) {
        console.error("No se encontraron algunos elementos del menú de usuario");
        return;
    }

    function abrirMenu() {
        menuUsuario.classList.add("activo");
        overlay.classList.remove("oculto");
    }

    function cerrarMenuUsuario() {
        menuUsuario.classList.remove("activo");
        overlay.classList.add("oculto");
    }

    userBtn.addEventListener("click", abrirMenu);
    cerrarMenu.addEventListener("click", cerrarMenuUsuario);
    overlay.addEventListener("click", cerrarMenuUsuario);
});