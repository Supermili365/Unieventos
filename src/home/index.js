/* JS del componente home — index.html */

let eventosActuales = [
  {
    nombre: "Clases de Baile",
    categoria: "Cultural",
    descripcion: "Sesiones abiertas de danza para estudiantes.",
    img: "https://cdn-icons-png.flaticon.com/512/3048/3048122.png",
  },
  {
    nombre: "Campaña Ambiental",
    categoria: "Social",
    descripcion: "Actividades de reciclaje y concientización.",
    img: "https://cdn-icons-png.flaticon.com/512/427/427735.png",
  },
];
let proximosEventos = [
  {
    nombre: "Semana Cultural",
    categoria: "Social",
    descripcion: "Evento cultural universitario.",
    img: "https://cdn-icons-png.flaticon.com/512/854/854878.png",
  },
  {
    nombre: "Club de Lectura",
    categoria: "Académico",
    descripcion: "Reunión para amantes de los libros.",
    img: "https://cdn-icons-png.flaticon.com/512/29/29302.png",
  },
  {
    nombre: "Festival de la Felicidad",
    categoria: "Social",
    descripcion: "Festival con música y actividades.",
    img: "https://cdn-icons-png.flaticon.com/512/616/616489.png",
  },
];

function mostrarEventos() {
  const eActuales = document.getElementById("eventosActuales");
  const pEventos = document.getElementById("proximosEventos");
  eActuales.innerHTML = "";
  pEventos.innerHTML = "";

  const texto = document.getElementById("buscar").value.toLowerCase();
  const categoria = document.getElementById("categoria").value;

  const filtradosActuales = eventosActuales.filter((e) => {
    const t = e.nombre.toLowerCase().includes(texto);
    const c = categoria === "todos" || e.categoria === categoria;
    return t && c;
  });
  const filtradosProximos = proximosEventos.filter((e) => {
    const t = e.nombre.toLowerCase().includes(texto);
    const c = categoria === "todos" || e.categoria === categoria;
    return t && c;
  });
  document.getElementById("mensajeProximos").style.display =
    filtradosProximos.length === 0 ? "block" : "none";

  filtradosProximos.forEach((e) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<img src="${e.img}"><p>${e.nombre}</p>`;
    card.onclick = () => verDetalle(e);
    pEventos.appendChild(card);
  });

  document.getElementById("mensajeActuales").style.display =
    filtradosActuales.length === 0 ? "block" : "none";

  filtradosActuales.forEach((e) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<img src="${e.img}"><p>${e.nombre}</p>`;
    card.onclick = () => verDetalle(e);
    eActuales.appendChild(card);
  });
}

function verDetalle(e) {
  document.querySelector(".container").style.display = "none";
  const d = document.getElementById("detalleEvento");
  d.classList.remove("oculto");
  document.getElementById("tituloDetalle").innerText = e.nombre;
  document.getElementById("imgDetalle").src = e.img;
  document.getElementById("descDetalle").innerText = e.descripcion;
}

function volver() {
  document.getElementById("detalleEvento").classList.add("oculto");
  document.querySelector(".container").style.display = "";
}

document.getElementById("buscar").addEventListener("keyup", mostrarEventos);
document.getElementById("categoria").addEventListener("change", mostrarEventos);

mostrarEventos();
