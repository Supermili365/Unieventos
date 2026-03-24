# Unieventos

**Unieventos** es una aplicación web diseñada para la comunidad de la Universidad del Magdalena (estudiantes, docentes, egresados y administrativos). Su propósito principal es facilitar la publicación, gestión y descubrimiento de eventos institucionales (académicos, culturales, deportivos, sociales, tecnológicos y de bienestar), manteniendo a toda la comunidad informada y conectada.

## Árbol del proyecto

```
Unieventos/
├── src/
│   ├── shared/
│   │   ├── components/
│   │   │   ├── components.js (funciones para renderizar componentes reutilizables en todas las paginas)
│   │   ├── css/
│   │   │   ├── header.css (estilo general del header)
│   │   │   ├── footer.css (estilo general del footer)
│   │   │   ├── breadcrumb.css (estilo general del breadcrumb)
│   │   │   ├── menuLateral.css (estilo general del menu lateral)
│   │   │   ├── estilosGenerales.css (estilo general de la aplicacion)
│   │   |──  img/
│   │       ├── logo.png (logo de la header)
│   │       └── ... (contiene otras imagenes de la aplicacion)
│   ├── index.html (raiz de la aplicacion muestra el home sin logueo)
│   ├── crear-evento/
│   │   └── crear_evento.html (formulario para crear eventos)
│   │   └── crear_evento.css (estilo general del formulario de crear eventos)
│   │   └── crear_evento.js (logica del formulario de crear eventos)
│   └── mis-eventos/
│       └── mis_eventos.html (pagina para ver los eventos del usuario)
│       └── mis_eventos.css (estilo general de la pagina de mis eventos)
│       └── mis_eventos.js (logica de la pagina de mis eventos)
│   └── dashboard/
│       └── logueado.html (pagina principal)
│       └── logueado.js (logica de la pagina principal)
    |___home/
    |   └── index.css (estilo general de la pagina principal)
    |   └── index.js (logica de la pagina principal)
│   └── login/
│       └── login.html (pagina de login)
│       └── login.css (estilo general de la pagina de login)
│       └── login.js (logica de la pagina de login)
└── README.md (documentacion del proyecto)

```

## Especificaciones del Proyecto

- **Arquitectura Frontend**: Desarrollado con HTML5, CSS3 y JavaScript, sin depender de frameworks pesados para un rendimiento óptimo y carga rápida.
- **Componentes Reutilizables**: Implementación de un sistema de renderizado de componentes globales en el DOM (Header, Footer, Menú lateral, Migas de pan) mediante el archivo `components.js`.
- **Diseño Responsivo (Mobile-First)**: Interfaz adaptativa construida mediante CSS Grid y Flexbox. Uso de variables CSS, fuentes de Google ("Outfit") e iconos dinámicos ("Material Symbols Outlined").
- **UX/UI Mejorado**: Incorporación de modales interactivos para visualización de detalles y códigos QR, alertas atractivas impulsadas por la librería *SweetAlert2*, y navegación limpia con un menú lateral (Sidebar) retráctil.

## Características Principales

1. **Dashboard Principal**: Búsqueda interactiva y filtrado de eventos (Actuales, Próximos, Asistidos) segmentados por diversas categorías.
2. **Autenticación Institucional**: Sistema de login estrictamente validado para admitir acceso **únicamente** a personas con correo `@unimagdalena.edu.co`.
3. **Gestión de "Mis Eventos"**: Panel de administración visual donde el usuario puede ver los eventos que coordina, con opciones para iniciar, ver detalle del evento (incluye listado de preinscritos, horarios y pre-registro rápido vía código QR), modificar y eliminar.
4. **Formulario de Creación de Eventos**: Permite parametrizar título, descripción, público dirigido, categoría, carga de imágenes de portada, y un generador dinámico de múltiples franjas de "Horarios Disponibles".

---

## Última Actualización v24.03.2026

*Recopilación de los últimos cambios y mejoras incorporadas en la aplicación (como versión se estandariza la fecha en formato dia.mes.año) del último commit.*

- **Agregado (Features)**:
  - **Validación de Login:** Rutina de seguridad estricta para aceptar únicamente correos del dominio `@unimagdalena.edu.co` y extracción del alias del usuario para mostrar una bienvenida personalizada usando `SweetAlert2`.
  - **Menú Lateral (Sidebar):** Integrado de forma exitosa a toda la aplicación unificando la barra de navegación, el menú izquierdo y la capa de desenfoque (`overlay`).
  - **Multihop en "Crear Evento":** Implementación de la lógica en JS que permite añadir y remover campos de "Horarios Disponibles" ilimitadamente de manera dinámica.
  - **Modal Interactivo "Ver Evento":** Nueva interfaz sobrepuesta en *Mis Eventos* para renderizar la información detallada (descripción, horarios y prerregistros) junto a un selector de visualización en primer plano del código QR.

- **Corregido (Bugfixes)**:
  - **Posicionamiento del Botón de Usuario**: Se organiza el arbol del proyecto dejando un estandar tipo angular para facilitar el mantenimiento.
  - **Posicionamiento del Botón de Usuario**: Se reparó el `grid-template-columns` del documento `header.css` moviendo el Action-Slot al lado de la derecha (`.header-right`), solucionando que el botón del perfil no fuera visible en vistas como la de Crear Evento.
  - **Renderizado Dinámico de Cartas**: Se sincronizó la carga de iteración de `renderEventos(...)` dentro de `DOMContentLoaded` para asegurar que el DOM estuviese listo a pesar de las importaciones del `<script>` situadas en el `<head>`.
  - **Lógica de Módulos Compartidos**: Se abandonó el estándar ES6 `export function` desde archivos sin compilador que traían errores en HTML clásico, atando ahora las extensiones al objeto global local `window.Components`.

- **Actualizado (Refactors & Estilos)**:
  - Refinación del set de CSS: Se aislaron los módulos de estilo separando `menuLateral.css` y `estilosGenerales.css` facilitando el mantenimiento.
  - La visualización principal ahora tiene diferenciados los mensajes condicionales de "No hay eventos registrados" para cada sección ("Eventos actuales", "Próximos Eventos", "Eventos Asistidos").

## Pendiente a mejorar

- **Estilos y Comportamientos**:
  - **Validación de Login:** La contraseña no se valida correctamente (se puede iniciar sesión con cualquier contraseña).
  - **Menu lateral:** No se muestra correctamente en todas las páginas.
  - **Header:** No se muestra correctamente en todas las páginas (icono del usuario en crear evento no se muestra).
  - **Formulario de creación de eventos:** No se muestra correctamente en todas las páginas.
  - **Modal de ver evento:** El QR no se visualiza correctamente en primer plano.

## Pendiente a realizar

- **Guardar los eventos en la session:** Los eventos no se guardan en la session.
- **Menu lateral:** No se redirige a todos los componentes que muestra el menu
- **Componentes:** Aun falta la creación de varios componentes y creacion de varias funcionalidades.
