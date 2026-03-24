document.addEventListener("DOMContentLoaded", function () {
  const usuario = localStorage.getItem("usuario");
  document.getElementById("usuario").innerText = usuario;
  // Listado de eventos actuales
  const eventosActuales = [
    {
      nombre: "Simposio de Innovación",
      categoria: "Académico",
      descripcion: "Charlas en vivo sobre emprendimiento e innovación.",
      img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    },
    {
      nombre: "Maratón de Programación",
      categoria: "Tecnológico",
      descripcion: "Competencia activa de resolución de problemas.",
      img: "https://cdn-icons-png.flaticon.com/512/2721/2721279.png",
    },
    {
      nombre: "Clases de Baile",
      categoria: "Cultural",
      descripcion: "Sesiones abiertas de danza para estudiantes.",
      img: "https://cdn-icons-png.flaticon.com/512/3048/3048122.png",
    },
    {
      nombre: "Ajedrez al lago",
      categoria: "Deportivo",
      descripcion: "Partidas en curso entre estudiantes.",
      img: "https://cdn-icons-png.flaticon.com/512/3655/3655666.png",
    },
    {
      nombre: "Campaña Ambiental",
      categoria: "Social",
      descripcion: "Actividades de reciclaje y concientización.",
      img: "https://cdn-icons-png.flaticon.com/512/427/427735.png",
    },
    {
      nombre: "Taller de Oratoria",
      categoria: "Académico",
      descripcion: "Prácticas en vivo para mejorar la comunicación.",
      img: "https://cdn-icons-png.flaticon.com/512/1995/1995574.png",
    },
    {
      nombre: "Zona Gamer",
      categoria: "Social",
      descripcion: "Espacio activo con videojuegos y torneos.",
      img: "https://cdn-icons-png.flaticon.com/512/686/686589.png",
    },
  ];

  // ── Listado de eventos ───────────────────────────────────────
  const proximosEventos = [
    // Sociales
    {
      nombre: "Semana Cultural",
      categoria: "Social",
      descripcion: "Evento cultural universitario.",
      img: "https://cdn-icons-png.flaticon.com/512/854/854878.png",
    },
    {
      nombre: "Festival de la Felicidad",
      categoria: "Social",
      descripcion: "Festival con música y actividades.",
      img: "https://cdn-icons-png.flaticon.com/512/616/616489.png",
    },
    {
      nombre: "Fiesta de Bienvenida",
      categoria: "Social",
      descripcion: "Evento para integrar a los nuevos estudiantes.",
      img: "https://cdn-icons-png.flaticon.com/512/3176/3176298.png",
    },

    // Académicos
    {
      nombre: "Club de Lectura",
      categoria: "Académico",
      descripcion: "Reunión para amantes de los libros.",
      img: "https://cdn-icons-png.flaticon.com/512/29/29302.png",
    },
    {
      nombre: "Seminario de Inteligencia Artificial",
      categoria: "Académico",
      descripcion: "Conferencia sobre avances en IA.",
      img: "https://cdn-icons-png.flaticon.com/512/4149/4149676.png",
    },
    {
      nombre: "Feria de Proyectos",
      categoria: "Académico",
      descripcion: "Exposición de proyectos estudiantiles.",
      img: "https://cdn-icons-png.flaticon.com/512/3135/3135755.png",
    },

    // Deportivos
    {
      nombre: "Torneo de Fútbol",
      categoria: "Deportivo",
      descripcion: "Competencia entre facultades.",
      img: "https://cdn-icons-png.flaticon.com/512/861/861512.png",
    },
    {
      nombre: "Carrera 5K Universitaria",
      categoria: "Deportivo",
      descripcion: "Evento atlético para toda la comunidad.",
      img: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
    },
    {
      nombre: "Clases de Yoga",
      categoria: "Deportivo",
      descripcion: "Sesiones de relajación y ejercicio.",
      img: "https://cdn-icons-png.flaticon.com/512/1686/1686406.png",
    },

    // Tecnológicos
    {
      nombre: "Hackathon 24h",
      categoria: "Tecnológico",
      descripcion: "Desarrollo de soluciones en 24 horas.",
      img: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",
    },
    {
      nombre: "Taller de Desarrollo Web",
      categoria: "Tecnológico",
      descripcion: "Aprende HTML, CSS y JavaScript.",
      img: "https://cdn-icons-png.flaticon.com/512/2721/2721297.png",
    },
    {
      nombre: "Conferencia de Ciberseguridad",
      categoria: "Tecnológico",
      descripcion: "Buenas prácticas en seguridad digital.",
      img: "https://cdn-icons-png.flaticon.com/512/3064/3064197.png",
    },

    // Culturales
    {
      nombre: "Festival de Cine",
      categoria: "Cultural",
      descripcion: "Proyección de películas independientes.",
      img: "https://cdn-icons-png.flaticon.com/512/744/744922.png",
    },
    {
      nombre: "Exposición de Arte",
      categoria: "Cultural",
      descripcion: "Muestra de obras de estudiantes.",
      img: "https://cdn-icons-png.flaticon.com/512/1829/1829586.png",
    },
    {
      nombre: "Concierto Universitario",
      categoria: "Cultural",
      descripcion: "Presentación de bandas locales.",
      img: "https://cdn-icons-png.flaticon.com/512/727/727218.png",
    },

    // Bienestar
    {
      nombre: "Jornada de Salud",
      categoria: "Bienestar",
      descripcion: "Chequeos médicos gratuitos.",
      img: "https://cdn-icons-png.flaticon.com/512/2966/2966480.png",
    },
    {
      nombre: "Taller de Manejo del Estrés",
      categoria: "Bienestar",
      descripcion: "Estrategias para mejorar la salud mental.",
      img: "https://cdn-icons-png.flaticon.com/512/2913/2913465.png",
    },
    {
      nombre: "Meditación Guiada",
      categoria: "Bienestar",
      descripcion: "Sesión para relajación mental.",
      img: "https://cdn-icons-png.flaticon.com/512/4333/4333609.png",
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

    document.getElementById("mensajeActuales").style.display =
      filtradosActuales.length === 0 ? "block" : "none";

    filtradosActuales.forEach((e) => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `<img src="${e.img}"><p>${e.nombre}</p>`;
      card.onclick = () => verDetalle(e);
      eActuales.appendChild(card);
    });

    filtradosProximos.forEach((e) => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `<img src="${e.img}"><p>${e.nombre}</p>`;
      card.onclick = () => verDetalle(e);
      pEventos.appendChild(card);
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

  window.volver = function () {
    document.getElementById("detalleEvento").classList.add("oculto");
    document.querySelector(".container").style.display = "";
  };

  document.getElementById("buscar").addEventListener("keyup", mostrarEventos);
  document
    .getElementById("categoria")
    .addEventListener("change", mostrarEventos);

  mostrarEventos();
});
