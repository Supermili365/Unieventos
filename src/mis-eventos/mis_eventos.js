// La data principal de los eventos
const eventosJson = {
  "¡Hackaton al lago!": {
    nombre: "¡Hackaton al lago!",
    descripcion: "Una competencia intensa de 24 horas para resolver retos tecnológicos cerca del lago de la universidad. ¡Trae tu equipo!",
    horarios: ["Viernes 10:00 AM - 10:00 PM", "Sábado 08:00 AM - 12:00 PM"],
    preinscritos: ["Juan Pérez", "Maria Garcia", "Carlos Lopez", "Ana Martinez"],
    img: "../shared/img/hackaton.png"
  },
  "Monitoría Cálculo": {
    nombre: "Monitoría Cálculo",
    descripcion: "Sesiones de refuerzo para estudiantes de primer semestre. Repasaremos derivadas e integrales de forma práctica.",
    horarios: ["Lunes 02:00 PM - 04:00 PM", "Miércoles 10:00 AM - 12:00 PM"],
    preinscritos: ["Sofia Torres", "Luis Ramirez", "Elena Rivas"],
    img: "../shared/img/monitoria.png"
  },
  "Futbolito": {
    nombre: "Futbolito",
    descripcion: "Torneo relámpago de fútbol 5. Inscripciones abiertas para todos los programas académicos.",
    horarios: ["Jueves 04:00 PM - 06:00 PM", "Viernes 04:00 PM - 08:00 PM"],
    preinscritos: ["Pedro Nel", "Jorge Eliécer", "Alvaro Uribe", "Gustavo Petro"],
    img: "../shared/img/futbolito.png"
  }
};

document.addEventListener("DOMContentLoaded", function () {
  
  const listadoEventos = document.getElementById("listadoEventos");

  function renderEventos(list) {
    if(!listadoEventos) return;
    listadoEventos.innerHTML = "";
    Object.values(list).forEach(evento => {
      const divEvento = document.createElement("div");
      divEvento.className = "evento";
      divEvento.innerHTML = `
          <div class="img-box">
              ${
              evento.img 
                  ? `<img src="${evento.img}" alt="${evento.nombre}" class="avatar-img">`
                  : `<img src="../shared/img/hackaton.png" alt="${evento.nombre}" class="avatar-img">`
              }
          </div>
          <p>${evento.nombre}</p>
          <div class="acciones">
            <button class="btn iniciar">Iniciar</button>
            <button class="btn ver">Ver</button>
          </div>
      `;
      
      listadoEventos.appendChild(divEvento);
    });
  }

  renderEventos(eventosJson);

  const botonesVer     = document.querySelectorAll(".ver");
  const botonesIniciar = document.querySelectorAll(".iniciar");
  const agregarEvento  = document.querySelector(".agregar-evento");

  const modalOverlay   = document.getElementById("modalOverlay");
  const modalEvento    = document.getElementById("modalEvento");
  const cerrarModal    = document.getElementById("cerrarModal");
  const btnToggleQR    = document.getElementById("btnToggleQR");
  //const txtToggleQR    = document.getElementById("txtToggleQR");

  const descContainer  = document.getElementById("descContainer");
  const qrContainer    = document.getElementById("qrContainer");

  const modalTitulo    = document.getElementById("modalTitulo");
  const modalPortada   = document.getElementById("modalPortada");
  const modalDesc      = document.getElementById("modalDesc");
  const modalHorarios  = document.getElementById("modalHorarios");
  const modalPreinscritos = document.getElementById("modalPreinscritos");

  const btnModificar   = document.getElementById("btnModificar");
  const btnEliminar    = document.getElementById("btnEliminar");

  function openModal(titulo) {
    const data = eventosJson[titulo];
    if (!data) return;

    modalTitulo.textContent = titulo;
    modalPortada.innerHTML = `<img src="${data.img}" alt="${titulo}">`;
    modalDesc.textContent = data.descripcion;

    modalHorarios.innerHTML = data.horarios.map(h => `<li>${h}</li>`).join("");
    modalPreinscritos.innerHTML = data.preinscritos.map(p => `<li>${p}</li>`).join("");

    // Reset view
    const modalGrid = document.querySelector(".modal-grid");
    descContainer.classList.remove("hidden");
    qrContainer.classList.add("hidden");
    modalPortada.classList.remove("hidden");
    modalGrid.classList.remove("hidden");
    //txtToggleQR.textContent = "Ver QR";

    modalOverlay.classList.remove("hidden");
    modalEvento.classList.remove("hidden");
  }

  function closeModal() {
    modalOverlay.classList.add("hidden");
    modalEvento.classList.add("hidden");
  }

  botonesVer.forEach(function (boton) {
    boton.addEventListener("click", function () {
      const card = boton.closest(".evento");
      const titulo = card.querySelector("p").textContent;
      openModal(titulo);
    });
  });

  botonesIniciar.forEach(function (boton) {
    boton.addEventListener("click", function () {
      alert("Aquí iniciará la gestión del evento.");
    });
  });

  cerrarModal.addEventListener("click", closeModal);
  modalOverlay.addEventListener("click", closeModal);

  btnToggleQR.addEventListener("click", () => {
    const showingQR = !qrContainer.classList.contains("hidden");
    const modalGrid = document.querySelector(".modal-grid");

    if (showingQR) {
      // Switch to Description View
      qrContainer.classList.add("hidden");
      descContainer.classList.remove("hidden");
      modalPortada.classList.remove("hidden");
      modalGrid.classList.remove("hidden");
      //txtToggleQR.textContent = "Ver QR";
    } else {
      // Switch to QR View
      qrContainer.classList.remove("hidden");
      descContainer.classList.add("hidden");
      modalPortada.classList.add("hidden");
      modalGrid.classList.add("hidden");
      //txtToggleQR.textContent = "Ver Descripción";
    }
  });

  btnModificar.addEventListener("click", () => alert("Módulo de modificación próximamente."));
  btnEliminar.addEventListener("click", () => alert("¿Está seguro que desea eliminar este evento? (Función en desarrollo)"));

  if (agregarEvento) {
    agregarEvento.addEventListener("click", function () {
      window.location.href = "../crear-evento/crear_evento.html";
    });
  }
});


