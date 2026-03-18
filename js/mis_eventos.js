document.addEventListener("DOMContentLoaded", function () {
    const botonesVer = document.querySelectorAll(".ver");
    const botonesIniciar = document.querySelectorAll(".iniciar");
    const agregarEvento = document.querySelector(".agregar-evento");

    botonesVer.forEach(function (boton) {
        boton.addEventListener("click", function () {
            alert("Aquí se abrirá el detalle del evento.");
        });
    });

    botonesIniciar.forEach(function (boton) {
        boton.addEventListener("click", function () {
            alert("Aquí iniciará la gestión del evento.");
        });
    });

    if (agregarEvento) {
        agregarEvento.addEventListener("click", function () {
            alert("Aquí podrás agregar un nuevo evento.");
        });
    }
});