// admin.js - Panel de Administración

let allResults = [];
let filteredResults = [];

// Variable global para la instancia del gráfico
let subjectsChartInstance = null;

// Inicializar mapa de preguntas
let questionsMap = new Map();

function initQuestionMap() {
    if (typeof questionBankMultiGrado === 'undefined') {
        console.warn('Advertencia: questionBankMultiGrado no está definido. Asegúrate de cargar questions-multigrado.js antes de admin.js');
        return;
    }

    // Recorrer ambos grados ('2' y '3') y cualquier otro que exista
    Object.keys(questionBankMultiGrado).forEach(grado => {
        questionBankMultiGrado[grado].forEach(q => {
            questionsMap.set(q.id.toString(), {
                ...q,
                gradoDB: grado // Guardamos el grado del banco original
            });
        });
    });
    console.log(`Mapa de preguntas inicializado: ${questionsMap.size} preguntas encontradas.`);
}

// Cargar resultados al iniciar
document.addEventListener('DOMContentLoaded', () => {
    console.log('Panel de administración cargado');
    initQuestionMap(); // Inicializar mapa de preguntas
    loadResults();
});

// Función para actualizar los gráficos
function updateCharts(resultsSource) {
    if (!resultsSource || resultsSource.length === 0) return;

    const ctx = document.getElementById('subjectsChart').getContext('2d');

    // Calcular promedios por materia
    const subjectStats = {};

    resultsSource.forEach(result => {
        if (!result.resultados || !result.resultados.porMateria) return;

        Object.entries(result.resultados.porMateria).forEach(([materia, stats]) => {
            if (!subjectStats[materia]) {
                subjectStats[materia] = { totalPercentage: 0, count: 0 };
            }

            // Calculamos el porcentaje de este examen individual
            const percent = (stats.aciertos / stats.total) * 100;
            subjectStats[materia].totalPercentage += percent;
            subjectStats[materia].count += 1;
        });
    });

    // Preparar datos para el gráfico
    const labels = Object.keys(subjectStats);
    const data = labels.map(materia => {
        const stats = subjectStats[materia];
        return (stats.totalPercentage / stats.count).toFixed(1);
    });

    // Colores dinámicos según desempeño
    const backgroundColors = data.map(value => {
        if (value >= 80) return 'rgba(40, 167, 69, 0.6)'; // Verde excelente
        if (value >= 60) return 'rgba(255, 193, 7, 0.6)'; // Amarillo regular
        return 'rgba(220, 53, 69, 0.6)'; // Rojo reprobado
    });

    const borderColors = data.map(value => {
        if (value >= 80) return 'rgba(40, 167, 69, 1)';
        if (value >= 60) return 'rgba(255, 193, 7, 1)';
        return 'rgba(220, 53, 69, 1)';
    });

    // Destruir gráfico anterior si existe
    if (subjectsChartInstance) {
        subjectsChartInstance.destroy();
    }

    subjectsChartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Promedio de Aciertos (%)',
                data: data,
                backgroundColor: backgroundColors,
                borderColor: borderColors,
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    title: {
                        display: true,
                        text: 'Porcentaje de Efectividad'
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            return `Promedio: ${context.raw}%`;
                        }
                    }
                }
            }
        }
    });

    console.log('Gráfico actualizado con ' + labels.length + ' materias.');
}

// ... resto del código ...

// Exportar a CSV detallado
function exportToCSV() {
    if (filteredResults.length === 0) {
        alert('No hay resultados para exportar');
        return;
    }

    if (questionsMap.size === 0) {
        initQuestionMap(); // Intentar inicializar de nuevo si estaba vacío
        if (questionsMap.size === 0) {
            alert('No se pudo cargar el banco de preguntas. La exportación detallada no incluirá textos de temas, solo respuestas.');
        }
    }

    // Obtener todos los IDs de preguntas ordenados numéricamente
    const allQuestionIds = Array.from(questionsMap.keys()).map(Number).sort((a, b) => a - b);

    // --- CONSTRUCCIÓN DE ENCABEZADOS ---
    // 1. Datos del Alumno
    let headers = ['Grado', 'Nombre', 'Matrícula', 'Email', 'Fecha', 'Hora', 'Duración', 'Correctas', 'Total', 'Porcentaje'];

    // 2. Bloque de RESPUESTAS (Letra elegida)
    allQuestionIds.forEach(id => headers.push(`R_P${id}`)); // R = Respuesta

    // 3. Bloque de PUNTAJES (1 o 0)
    allQuestionIds.forEach(id => headers.push(`P_P${id}`)); // P = Puntos

    // 4. Bloque de TEMAS (Opcional, al final para referencia)
    allQuestionIds.forEach(id => headers.push(`T_P${id}`)); // T = Tema

    let csv = headers.join(',') + '\n';

    // --- CONSTRUCCIÓN DE FILAS ---
    filteredResults.forEach(result => {
        let row = [];

        // 1. Datos del Alumno
        row.push(`"${result.alumno.grado || ''}"`);
        row.push(`"${(result.alumno.nombre || '').replace(/,/g, ' ')}"`);
        row.push(`"${result.alumno.matricula || ''}"`);
        row.push(`"${result.alumno.email || ''}"`);
        row.push(`"${result.examen.fecha || ''}"`);
        row.push(`"${result.examen.hora || ''}"`);
        row.push(`"${result.examen.duracion || ''}"`);
        row.push(result.resultados.totalCorrectas || 0);
        row.push(result.resultados.totalPreguntas || 0);
        row.push(`"${result.resultados.porcentaje}%"`);

        // Preparar arrays para los bloques de datos
        let answersBlock = [];
        let scoresBlock = [];
        let topicsBlock = [];

        allQuestionIds.forEach(id => {
            const strId = id.toString();
            const questionData = questionsMap.get(strId);

            let userResp = '';
            let points = '';
            let tema = '';

            // Verificar si el alumno respondió esta pregunta
            if (result.resultados.respuestas && result.resultados.respuestas[strId]) {
                userResp = result.resultados.respuestas[strId];

                if (questionData && questionData.correct) {
                    points = (userResp === questionData.correct) ? '1' : '0';
                    tema = questionData.subject || '';
                } else {
                    points = '?';
                    tema = 'Desconocido';
                }
            } else {
                // No respondida (vacío)
            }

            answersBlock.push(userResp);
            scoresBlock.push(points);
            topicsBlock.push(`"${tema.replace(/,/g, ' ')}"`); // Escapar comas en temas
        });

        // 2. Agregar Bloque RESPUESTAS
        row = row.concat(answersBlock);

        // 3. Agregar Bloque PUNTAJES
        row = row.concat(scoresBlock);

        // 4. Agregar Bloque TEMAS
        row = row.concat(topicsBlock);

        csv += row.join(',') + '\n';
    });

    // ESTRATEGIA ALTERNATIVA: Data URI
    // Esto incrusta los datos directamente en el enlace, evitando problemas con Blob y URLs temporales
    const universalBOM = "\uFEFF";
    const uri = 'data:text/csv;charset=utf-8,' + encodeURIComponent(universalBOM + csv);

    const link = document.createElement('a');

    // Nombre del archivo con fecha y hora
    const now = new Date();
    const timestamp = `${now.getFullYear()}-${(now.getMonth() + 1).toString().padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')}_${now.getHours().toString().padStart(2, '0')}${now.getMinutes().toString().padStart(2, '0')}`;
    const fileName = `Macro_Resultados_Examen_${timestamp}.csv`;

    link.setAttribute('href', uri);
    link.setAttribute('download', fileName);
    link.style.visibility = 'hidden';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    console.log('Macro CSV exportado vía Data URI: ' + fileName);
}

// Exportar a PDF detallado por Grado y Materia
function exportToPDF() {
    if (filteredResults.length === 0) {
        alert('No hay resultados para exportar');
        return;
    }

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Título del Reporte
    doc.setFontSize(18);
    doc.setTextColor(0, 59, 92); // Azul BUAP
    doc.text('Reporte General de Resultados - Simulador BUAP', 14, 20);

    doc.setFontSize(10);
    doc.setTextColor(100);
    const fechaReporte = new Date().toLocaleDateString('es-MX', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' });
    doc.text(`Generado: ${fechaReporte}`, 14, 26);

    // Agrupar resultados por Grado
    const resultadosPorGrado = {};

    // Identificar todas las materias posibles por grado
    const materiasPorGrado = {};

    filteredResults.forEach(result => {
        const grado = result.alumno.grado || 'Sin Grado';

        if (!resultadosPorGrado[grado]) {
            resultadosPorGrado[grado] = [];
            materiasPorGrado[grado] = new Set();
        }

        resultadosPorGrado[grado].push(result);

        // Recolectar nombres de materias de este examen
        if (result.resultados && result.resultados.porMateria) {
            Object.keys(result.resultados.porMateria).forEach(materia => {
                materiasPorGrado[grado].add(materia);
            });
        }
    });

    let startY = 35;

    // Iterar por cada Grado encontrado
    Object.keys(resultadosPorGrado).sort().forEach((grado, index) => {
        const alumnos = resultadosPorGrado[grado];
        const materias = Array.from(materiasPorGrado[grado]).sort(); // Columnas de materias

        // Si no es la primera tabla, añadir nueva página
        if (index > 0) {
            doc.addPage();
            startY = 20;
        }

        doc.setFontSize(14);
        doc.setTextColor(0, 59, 92);
        doc.text(`Resultados ${grado === '2' ? '2° Año' : grado === '3' ? '3° Año' : grado}`, 14, startY);

        // Definir columnas de la tabla
        // Nombre | ...Materias... | Promedio Final
        let columns = [
            { header: 'Alumno', dataKey: 'nombre' },
            // Las materias se generarán dinámicamente
        ];

        materias.forEach(materia => {
            // Abreviar nombres largos de materias para que quepan
            let headerName = materia;
            if (materia.includes('Pensamiento Matemático')) headerName = 'Matemáticas';
            if (materia.includes('Lengua y Comunicación')) headerName = 'Lengua';
            if (materia.includes('Probabilidad')) headerName = 'Probabilidad';
            if (materia.includes('Cultura Digital')) headerName = 'Digital';
            if (materia.includes('Conciencia Histórica')) headerName = 'Historia';
            if (materia.includes('Salud Integral')) headerName = 'Salud';
            if (materia.includes('Ecosistema')) headerName = 'Ecosistema';

            columns.push({ header: headerName, dataKey: materia });
        });

        columns.push({ header: 'Final', dataKey: 'final' });

        // Preparar columnas para autotable
        // Necesitamos arrays de datos y arrays de headers
        const tableColumns = columns.map(col => col.header);
        const tableRows = alumnos.map(alumno => {
            const row = [alumno.alumno.nombre];

            materias.forEach(materia => {
                if (alumno.resultados.porMateria && alumno.resultados.porMateria[materia]) {
                    const datosMateria = alumno.resultados.porMateria[materia];
                    const porcentaje = Math.round((datosMateria.aciertos / datosMateria.total) * 100);
                    row.push(`${porcentaje}%`);
                } else {
                    row.push('-');
                }
            });

            row.push(`${alumno.resultados.porcentaje}%`);
            return row;
        });

        // Generar tabla
        doc.autoTable({
            startY: startY + 10,
            head: [tableColumns],
            body: tableRows,
            theme: 'grid',
            headStyles: {
                fillColor: [0, 59, 92],
                fontSize: 8,
                halign: 'center'
            },
            bodyStyles: {
                fontSize: 8,
                halign: 'center'
            },
            columnStyles: {
                0: { halign: 'left', cellWidth: 40 } // Nombre align left
            },
            styles: { overflow: 'linebreak' },
        });
    });

    // Guardar PDF
    doc.save(`Reporte_Resultados_Simulador_${new Date().toISOString().split('T')[0]}.pdf`);
}

// Cargar todos los resultados de Firebase
async function loadResults() {
    try {
        const results = await obtenerTodosLosResultados();
        allResults = results;
        filteredResults = results;

        // Actualizar estadísticas
        updateStatistics();

        // Actualizar gráficos
        updateCharts(results);

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

    updateCharts(filteredResults);
    renderTable(filteredResults);
}



// Cerrar modal al hacer clic fuera
document.getElementById('details-modal').addEventListener('click', (e) => {
    if (e.target.id === 'details-modal') {
        closeDetailsModal();
    }
});
