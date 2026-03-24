document.addEventListener('DOMContentLoaded', () => {

  // Load components
  Components.loadHeader('../shared/img/logo.png');
  Components.loadBreadcrumb([
    { label: 'Inicio', link: '../dashboard/logeado.html' },
    { label: 'Mis Eventos', link: '../mis-eventos/mis_eventos.html' },
    { label: 'Crear Evento' }
  ]);
  Components.loadFooter();

  // Data for selects (simulating data from an array)
  const dirigidoAOptions = ['Estudiantes', 'Docentes', 'Egresados', 'Administrativos'];
  const tipoEventoOptions = ['Académico', 'Cultural', 'Deportivo', 'Social', 'Tecnológico', 'Bienestar'];

  const dirigidoAContainer = document.getElementById('dirigidoA');
  const tipoEventoContainer = document.getElementById('tipoEvento');

  /**
   * Populates a select container with option elements.
   * @param {HTMLSelectElement} select 
   * @param {Array} options 
   */
  function populateOptions(select, options) {
    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = 'Seleccione una opción';
    defaultOption.disabled = true;
    defaultOption.selected = true;
    select.appendChild(defaultOption);

    options.forEach(opt => {5
      const option = document.createElement('option');
      option.value = opt;
      option.textContent = opt;
      select.appendChild(option);
    });
  }

  populateOptions(dirigidoAContainer, dirigidoAOptions);
  populateOptions(tipoEventoContainer, tipoEventoOptions);

  // Schedules Logic
  const schedulesList = document.getElementById('schedulesList');
  const addScheduleBtn = document.getElementById('addScheduleBtn');

  function addScheduleRow() {
    const row = document.createElement('div');
    row.className = 'schedule-row';
    row.innerHTML = `
      <div class="time-field">
        <label>Inicio</label>
        <input type="time" name="horaInicio[]" required>
      </div>
      <div class="time-field">
        <label>Fin</label>
        <input type="time" name="horaFin[]" required>
      </div>
      <button type="button" class="btn-remove" title="Eliminar Horario">
        <span class="material-symbols-outlined">delete</span>
      </button>
    `;
    schedulesList.appendChild(row);

    row.querySelector('.btn-remove').addEventListener('click', () => {
      if (schedulesList.children.length > 1) {
        row.remove();
      } else {
        alert('Debe haber al menos un horario.');
      }
    });
  }

  addScheduleBtn.addEventListener('click', addScheduleRow);
  addScheduleRow();

  // Image Upload Logic
  const uploadArea = document.getElementById('uploadArea');
  const fileInput = document.getElementById('portada');

  uploadArea.addEventListener('click', () => {
    fileInput.click();
  });

  fileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        uploadArea.innerHTML = `<img src="${event.target.result}" style="max-height: 100%; max-width: 100%; object-fit: contain;">`;
      };
      reader.readAsDataURL(file);
    }
  });

  // Form submission
  const form = document.getElementById('formCrearEvento');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    console.log('Formulario enviado:', Object.fromEntries(formData.entries()));
    alert('¡Evento creado con éxito!');
    window.location.href = '../mis-eventos/mis_eventos.html';
  });
});
