/**
 * components.js — Componentes reutilizables de header, footer y breadcrumbs.
 * Sin fetch, compatible con file://.
 */

window.Components = (function () {
  function loadMenuUsuario() {
    const el = document.getElementById("menuUsuario");
    if (!el) return;

    el.innerHTML = `
        <div class="menu-top">
          <h3>Mi cuenta</h3>
          <h3 id="usuario"></h3>
          <button id="cerrarMenu" class="btn-cerrar" type="button">&times;</button>
        </div>
        <a href="../dashboard/logeado.html">Mi perfil</a>
        <a href="../mis-eventos/mis_eventos.html">Ver mis eventos</a>
        <a href="#">Guardados</a>
        <a href="#">Reseñas</a>
        <a href="../../index.html">Cerrar sesión</a>`;
    // Inicializar menú lateral
    const userBtn = document.getElementById("userBtn");
    const menuUsuario = document.getElementById("menuUsuario");
    const cerrarMenu = document.getElementById("cerrarMenu");
    const overlay = document.getElementById("overlay");

    function abrirMenu() {
      if (menuUsuario) menuUsuario.classList.add("activo");
      if (overlay) overlay.classList.remove("oculto");
    }

    function cerrarMenuUsuario() {
      if (menuUsuario) menuUsuario.classList.remove("activo");
      if (overlay) overlay.classList.add("oculto");
    }

    if (userBtn) userBtn.addEventListener("click", abrirMenu);
    if (cerrarMenu) cerrarMenu.addEventListener("click", cerrarMenuUsuario);
    if (overlay) overlay.addEventListener("click", cerrarMenuUsuario);
  }

  /**
   * Carga el header en el contenedor #header.
   * @param {string} logoSrc - Ruta al logo.
   * @param {string} actionHTML - HTML para el slot de acciones (opcional).
   */
  function loadHeader(logoSrc, actionHTML) {
    const el = document.getElementById("header");
    if (!el) return;

    el.innerHTML = `
      <header>
        <div class="header-left">
          <div id="headerAction">${actionHTML || ""}</div>
        </div>
        <div class="header-center">
          <img src="${logoSrc}" class="logo" alt="Logo">
          <h1 class="header-title">EVENTOS UNIMAGDALENA</h1>
        </div>
        <div class="header-right"></div>
      </header>`;
  }

  /**
   * Carga el footer en el contenedor #footer.
   */
  function loadFooter() {
    const el = document.getElementById("footer");
    if (!el) return;

    el.innerHTML = `
      <footer>
        <p>Universidad del Magdalena</p>
        <p>Proyecto Academico Programación Web</p>
        <p>&copy; 2026 Todos los derechos reservados</p>
        <p>Santa Marta, Colombia</p>
      </footer>`;
  }

  /**
   * Carga las migas de pan en el contenedor #breadcrumb.
   * @param {Array} items - Arreglo de objetos { label, link }.
   */
  function loadBreadcrumb(items) {
    const el = document.getElementById("breadcrumb");
    if (!el || !items || items.length === 0) return;

    let itemsHTML = items
      .map((item, index) => {
        const isLast = index === items.length - 1;
        if (isLast || !item.link) {
          return `<li class="breadcrumb-item"><span class="active">${item.label}</span></li>`;
        }
        return `<li class="breadcrumb-item"><a href="${item.link}">${item.label}</a></li>`;
      })
      .join("");

    el.innerHTML = `
      <nav class="breadcrumb-container" aria-label="Breadcrumb">
        <ul class="breadcrumb-list">
          ${itemsHTML}
        </ul>
      </nav>`;
  }

  return { loadHeader, loadFooter, loadBreadcrumb, loadMenuUsuario };
})();
