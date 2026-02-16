// admin.js - Panel de Administración

let allResults = [];
let filteredResults = [];

// Cargar resultados al iniciar
document.addEventListener('DOMContentLoaded', () => {
    console.log('Panel de administración cargado');
    loadResults();
});

// Cargar todos los resultados de Firebase
async function loadResults() {
    try {
        const results = await obtenerTodosLosResultados();
        allResults = results;
        filteredResults = results;

        // Actualizar estadísticas
        updateStatistics();

        // Renderizar tabla
        renderTable(filteredResults);

        // Poblar filtro de fechas
        populateDateFilter();

        console.log(`${results.length} resultados cargados`);
    } catch (error) {
        console.error('Error al cargar resultados:', error);
        document.getElementById('results-tbody').innerHTML = `
            <tr>
                <td colspan="8" style="text-align: center; color: red; padding: 40px;">
                    Error al cargar resultados. Verifica la conexión a Firebase.
                </td>
            </tr>
        `;
    }
}

// Actualizar estadísticas generales
async function updateStatistics() {
    const stats = await obtenerEstadisticasGenerales();

    document.getElementById('total-exams').textContent = stats.totalExamenes;
    document.getElementById('average-score').textContent = `${stats.promedioGeneral}%`;
    document.getElementById('approved-count').textContent = stats.aprobados;
    document.getElementById('approved-percentage').textContent = `${stats.porcentajeAprobados}%`;
}

// Renderizar tabla de resultados
function renderTable(results) {
    const tbody = document.getElementById('results-tbody');

    if (results.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="8" style="text-align: center; padding: 40px;">
                    No hay resultados para mostrar
                </td>
            </tr>
        `;
        return;
    }

    tbody.innerHTML = results.map(result => {
        const percentage = result.resultados.porcentaje;
        const scoreClass = percentage >= 80 ? 'score-excellent' :
            percentage >= 60 ? 'score-good' : 'score-poor';

        const grado = result.alumno.grado || 'N/A';
        const gradoLabel = grado === '2' ? '2°' : grado === '3' ? '3°' : grado;

        return `
            <tr>
                <td><strong>${gradoLabel}</strong></td>
                <td>${result.alumno.nombre}</td>
                <td>${result.alumno.matricula}</td>
                <td>${result.examen.fecha}</td>
                <td>${result.examen.hora}</td>
                <td>${result.examen.duracion || 'N/A'}</td>
                <td>${result.resultados.totalCorrectas}/${result.resultados.totalPreguntas}</td>
                <td>
                    <span class="score-badge ${scoreClass}">
                        ${percentage}%
                    </span>
                </td>
                <td>
                    <button class="btn-view" onclick='viewDetails(${JSON.stringify(result).replace(/'/g, "&apos;")})'>
                        👁 Ver
                    </button>
                </td>
            </tr>
        `;
    }).join('');
}

// Ver detalles de un alumno
function viewDetails(result) {
    const modal = document.getElementById('details-modal');
    const content = document.getElementById('details-content');

    // Construir HTML de detalles
    const gradoLabel = result.alumno.grado === '2' ? '2° Año' : result.alumno.grado === '3' ? '3° Año' : 'No especificado';

    let detailsHTML = `
        <div class="student-info">
            <h3>Información del Alumno</h3>
            <div class="info-grid">
                <div class="info-item">
                    <strong>Grado:</strong>
                    ${gradoLabel}
                </div>
                <div class="info-item">
                    <strong>Nombre:</strong>
                    ${result.alumno.nombre}
                </div>
                <div class="info-item">
                    <strong>NIA:</strong>
                    ${result.alumno.matricula}
                </div>
                <div class="info-item">
                    <strong>Email:</strong>
                    ${result.alumno.email || 'No proporcionado'}
                </div>
                <div class="info-item">
                    <strong>Fecha:</strong>
                    ${result.examen.fecha}
                </div>
                <div class="info-item">
                    <strong>Hora:</strong>
                    ${result.examen.hora}
                </div>
                <div class="info-item">
                    <strong>Duración:</strong>
                    ${result.examen.duracion || 'No registrado'}
                </div>
            </div>
        </div>
        
        <div class="student-info">
            <h3>Resultados Generales</h3>
            <div class="info-grid">
                <div class="info-item">
                    <strong>Calificación:</strong>
                    ${result.resultados.totalCorrectas}/${result.resultados.totalPreguntas}
                </div>
                <div class="info-item">
                    <strong>Porcentaje:</strong>
                    <span class="score-badge ${result.resultados.porcentaje >= 80 ? 'score-excellent' :
            result.resultados.porcentaje >= 60 ? 'score-good' : 'score-poor'}">
                        ${result.resultados.porcentaje}%
                    </span>
                </div>
                <div class="info-item">
                    <strong>Respondidas:</strong>
                    ${result.resultados.respondidas || Object.keys(result.resultados.respuestas).length}
                </div>
            </div>
        </div>
        
        <h3 style="margin-top: 20px; color: var(--buap-blue);">Desempeño por Materia</h3>
        <div class="performance-grid">
    `;

    // Agregar desempeño por materia
    for (const [materia, stats] of Object.entries(result.resultados.porMateria)) {
        const percentage = ((stats.aciertos / stats.total) * 100).toFixed(1);
        detailsHTML += `
            <div class="performance-card">
                <h4>${materia}</h4>
                <p><strong>${stats.aciertos}/${stats.total}</strong> correctas</p>
                <p>Efectividad: <strong>${percentage}%</strong></p>
            </div>
        `;
    }

    detailsHTML += '</div>';

    // Agregar desempeño por subtema
    if (result.resultados.porSubtema) {
        detailsHTML += `
            <h3 style="margin-top: 20px; color: var(--buap-blue);">Desempeño por Subtema</h3>
            <div class="performance-grid">
        `;

        for (const [subtema, stats] of Object.entries(result.resultados.porSubtema)) {
            const percentage = ((stats.aciertos / stats.total) * 100).toFixed(1);
            detailsHTML += `
                <div class="performance-card">
                    <h4 style="font-size: 0.95rem;">${subtema}</h4>
                    <p><strong>${stats.aciertos}/${stats.total}</strong> - ${percentage}%</p>
                </div>
            `;
        }

        detailsHTML += '</div>';
    }

    content.innerHTML = detailsHTML;
    modal.classList.remove('hidden');
}

// Cerrar modal de detalles
function closeDetailsModal() {
    document.getElementById('details-modal').classList.add('hidden');
}

// Poblar filtro de fechas
function populateDateFilter() {
    const dateFilter = document.getElementById('filter-date');
    const dates = [...new Set(allResults.map(r => r.examen.fecha))].sort().reverse();

    dateFilter.innerHTML = '<option value="">Todas las fechas</option>';
    dates.forEach(date => {
        dateFilter.innerHTML += `<option value="${date}">${date}</option>`;
    });
}

// Filtrar resultados
document.getElementById('search-input').addEventListener('input', filterResults);
document.getElementById('filter-grade').addEventListener('change', filterResults);
document.getElementById('filter-date').addEventListener('change', filterResults);

function filterResults() {
    const searchTerm = document.getElementById('search-input').value.toLowerCase();
    const selectedGrade = document.getElementById('filter-grade').value;
    const selectedDate = document.getElementById('filter-date').value;

    filteredResults = allResults.filter(result => {
        const matchesSearch =
            result.alumno.nombre.toLowerCase().includes(searchTerm) ||
            result.alumno.matricula.toLowerCase().includes(searchTerm);

        const matchesGrade = !selectedGrade || (result.alumno.grado === selectedGrade);
        const matchesDate = !selectedDate || result.examen.fecha === selectedDate;

        return matchesSearch && matchesGrade && matchesDate;
    });

    renderTable(filteredResults);
}

// Exportar a CSV
function exportToCSV() {
    if (filteredResults.length === 0) {
        alert('No hay resultados para exportar');
        return;
    }

    // Encabezados
    let csv = 'Nombre,Matrícula,Email,Fecha,Hora,Duración,Correctas,Total,Porcentaje\n';

    // Datos
    filteredResults.forEach(result => {
        csv += `"${result.alumno.nombre}",`;
        csv += `"${result.alumno.matricula}",`;
        csv += `"${result.alumno.email || ''}",`;
        csv += `"${result.examen.fecha}",`;
        csv += `"${result.examen.hora}",`;
        csv += `"${result.examen.duracion || 'N/A'}",`;
        csv += `${result.resultados.totalCorrectas},`;
        csv += `${result.resultados.totalPreguntas},`;
        csv += `${result.resultados.porcentaje}%\n`;
    });

    // Crear y descargar archivo
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);

    link.setAttribute('href', url);
    link.setAttribute('download', `resultados_buap_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    console.log('CSV exportado exitosamente');
}

// Cerrar modal al hacer clic fuera
document.getElementById('details-modal').addEventListener('click', (e) => {
    if (e.target.id === 'details-modal') {
        closeDetailsModal();
    }
});
