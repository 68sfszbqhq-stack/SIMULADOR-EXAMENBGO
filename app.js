// --- ESTADO DE LA APLICACIÓN ---
let currentQuestionIndex = 0;

// Objeto para guardar respuestas: { id_pregunta: 'A', id_pregunta_2: 'B', ... }
let userAnswers = {};

// Grado seleccionado y banco de preguntas activo
let selectedGrade = null;
let activeQuestionBank = [];

// Datos del alumno
let studentData = {
    nombre: '',
    matricula: '',
    email: '',
    grado: '',
    startTime: null
};

// --- FUNCIONES DE PERSISTENCIA ---

// Cargar datos guardados del localStorage
// Cargar datos guardados del localStorage
function loadSavedData() {
    const savedAnswers = localStorage.getItem('buap_exam_answers');
    const savedIndex = localStorage.getItem('buap_exam_current_index');
    const savedStudentData = localStorage.getItem('buap_exam_student_data');

    // 1. Restaurar Respuestas
    if (savedAnswers) {
        try {
            userAnswers = JSON.parse(savedAnswers);
            console.log('Respuestas cargadas desde localStorage:', userAnswers);
        } catch (e) {
            console.error('Error al cargar respuestas:', e);
            userAnswers = {};
        }
    }

    // 2. Restaurar Datos del Alumno y Banco de Preguntas (GRADO)
    if (savedStudentData) {
        try {
            const parsedData = JSON.parse(savedStudentData);
            if (parsedData && parsedData.grado) {
                studentData = parsedData;
                selectedGrade = studentData.grado;
                activeQuestionBank = getQuestionsByGrade(selectedGrade);
                console.log(`Sesión restaurada: Grado ${selectedGrade}, ${activeQuestionBank.length} preguntas.`);
            }
        } catch (e) {
            console.error('Error al cargar datos del alumno:', e);
        }
    }

    // 3. Restaurar Índice (Validando con el banco cargado)
    if (savedIndex) {
        currentQuestionIndex = parseInt(savedIndex, 10);
        // Si hay banco cargado, validar límites
        if (activeQuestionBank.length > 0) {
            if (isNaN(currentQuestionIndex) || currentQuestionIndex < 0 || currentQuestionIndex >= activeQuestionBank.length) {
                console.warn('Índice guardado fuera de rango, reiniciando a 0');
                currentQuestionIndex = 0;
            }
        } else {
            // Si no hay banco, solo aseguramos que sea número
            if (isNaN(currentQuestionIndex)) currentQuestionIndex = 0;
        }
    }
}

// Guardar datos en localStorage
function saveData() {
    try {
        localStorage.setItem('buap_exam_answers', JSON.stringify(userAnswers));
        localStorage.setItem('buap_exam_current_index', currentQuestionIndex.toString());
        localStorage.setItem('buap_exam_student_data', JSON.stringify(studentData)); // Guardar datos del alumno (incluyendo grado)
    } catch (e) {
        console.error('Error al guardar en localStorage:', e);
    }
}

// Limpiar datos guardados
function clearSavedData() {
    localStorage.removeItem('buap_exam_answers');
    localStorage.removeItem('buap_exam_current_index');
    localStorage.removeItem('buap_exam_student_data');
    console.log('Datos del examen eliminados');
}

// --- REFERENCIAS DOM ---
const domQuestionText = document.getElementById('question-text');
const domQuestionSubject = document.getElementById('question-subject');
const domQuestionProgress = document.getElementById('question-progress');
const domQuestionImage = document.getElementById('question-image');

const domTextOptionA = document.getElementById('text-option-A');
const domTextOptionB = document.getElementById('text-option-B');
const domTextOptionC = document.getElementById('text-option-C');
const domTextOptionD = document.getElementById('text-option-D');

const domBtnPrev = document.getElementById('btn-prev');
const domBtnNext = document.getElementById('btn-next');
const domBtnFinish = document.getElementById('btn-finish');
const domBtnRestart = document.getElementById('btn-restart');

const inputsOptions = document.querySelectorAll('input[name="option"]');
const quizContainer = document.getElementById('quiz-container');
const resultsContainer = document.getElementById('results-container');
const detailedStatsContainer = document.getElementById('detailed-stats');
const subtopicStatsContainer = document.getElementById('subtopic-stats');
const domFinalScore = document.getElementById('final-score');
const domTotalQuestions = document.getElementById('total-questions-display');

// --- FUNCIONES DE LÓGICA DE NAVEGACIÓN ---

function loadQuestion(index) {
    const questionData = activeQuestionBank[index];

    domQuestionText.textContent = questionData.question;
    domQuestionSubject.textContent = `${questionData.subject}${questionData.subtema ? ' - ' + questionData.subtema : ''}`;
    domQuestionProgress.textContent = `Pregunta ${index + 1} de ${activeQuestionBank.length}`;

    // Manejo de Imágenes
    if (questionData.image) {
        domQuestionImage.src = questionData.image;
        domQuestionImage.classList.remove('hidden');
    } else {
        domQuestionImage.src = '';
        domQuestionImage.classList.add('hidden');
    }

    domTextOptionA.textContent = questionData.options.A;
    domTextOptionB.textContent = questionData.options.B;
    domTextOptionC.textContent = questionData.options.C;
    domTextOptionD.textContent = questionData.options.D;

    inputsOptions.forEach(input => input.checked = false);

    const questionID = questionData.id;
    if (userAnswers[questionID]) {
        const savedOption = userAnswers[questionID];
        const inputToSelect = document.querySelector(`input[name="option"][value="${savedOption}"]`);
        if (inputToSelect) {
            inputToSelect.checked = true;
        }
    }

    domBtnPrev.disabled = (index === 0);

    if (index === activeQuestionBank.length - 1) {
        domBtnNext.style.display = 'none';
        domBtnFinish.style.display = 'inline-block';
    } else {
        domBtnNext.style.display = 'inline-block';
        domBtnFinish.style.display = 'none';
    }

    window.scrollTo(0, 0);

    // Guardar progreso automáticamente
    saveData();
}

function saveAnswer(selectedOption) {
    const currentQuestion = activeQuestionBank[currentQuestionIndex];
    userAnswers[currentQuestion.id] = selectedOption;
    console.log("Respuestas actuales:", userAnswers);

    // Guardar automáticamente en localStorage
    saveData();
}

// --- FUNCIONES DE CÁLCULO DE RESULTADOS ---

function calculateResults() {
    let totalCorrect = 0;
    let statsBloques = {};
    let statsSubtemas = {};

    activeQuestionBank.forEach(q => {
        const userAnswer = userAnswers[q.id];
        const isCorrect = (userAnswer === q.correct);

        // Conteo Global
        if (isCorrect) totalCorrect++;

        // Inicializar objeto Bloque si no existe
        if (!statsBloques[q.subject]) {
            statsBloques[q.subject] = { aciertos: 0, total: 0 };
        }
        statsBloques[q.subject].total++;
        if (isCorrect) statsBloques[q.subject].aciertos++;

        // Inicializar objeto Subtema si no existe
        const subtemaKey = q.subtema || 'Sin subtema';
        if (!statsSubtemas[subtemaKey]) {
            statsSubtemas[subtemaKey] = { aciertos: 0, total: 0 };
        }
        statsSubtemas[subtemaKey].total++;
        if (isCorrect) statsSubtemas[subtemaKey].aciertos++;
    });

    return {
        totalCorrect,
        totalQuestions: activeQuestionBank.length,
        percentage: Math.round((totalCorrect / activeQuestionBank.length) * 100),
        statsBloques,
        statsSubtemas,
        answeredQuestions: Object.keys(userAnswers).length
    };
}

function renderResults(results) {
    // 1. Mostrar Score Global
    domFinalScore.textContent = results.totalCorrect;
    domTotalQuestions.textContent = `/ ${results.totalQuestions}`;

    // 2. Renderizar Bloques (Subjects)
    detailedStatsContainer.innerHTML = '';
    for (const [bloque, data] of Object.entries(results.statsBloques)) {
        const percentage = Math.round((data.aciertos / data.total) * 100);
        let colorClass = '#dc3545'; // Rojo
        if (percentage >= 60) colorClass = '#ffc107'; // Amarillo
        if (percentage >= 80) colorClass = '#28a745'; // Verde

        const htmlCard = `
            <div class="stat-card">
                <h4>${bloque}</h4>
                <div class="stat-item">
                    <strong>${data.aciertos} / ${data.total}</strong> Aciertos
                </div>
                <div class="stat-item">
                    <span>Efectividad: ${percentage}%</span>
                    <div class="progress-bar-container">
                        <div class="progress-bar" style="width: ${percentage}%; background-color: ${colorClass};"></div>
                    </div>
                </div>
            </div>
        `;
        detailedStatsContainer.innerHTML += htmlCard;
    }

    // 3. Renderizar Subtemas
    subtopicStatsContainer.innerHTML = '';

    // Sort subtemas by percentage (descending) for better visualization
    const sortedSubtemas = Object.entries(results.statsSubtemas).sort((a, b) => {
        const percentA = (a[1].aciertos / a[1].total) * 100;
        const percentB = (b[1].aciertos / b[1].total) * 100;
        return percentB - percentA;
    });

    for (const [subtema, data] of sortedSubtemas) {
        const percentage = Math.round((data.aciertos / data.total) * 100);
        let colorClass = '#dc3545';
        if (percentage >= 60) colorClass = '#ffc107';
        if (percentage >= 80) colorClass = '#28a745';

        const htmlSubCard = `
            <div class="stat-card" style="border-left-color: ${colorClass};">
                <h4 style="color: #555; font-size: 1rem;">${subtema}</h4>
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <span style="font-weight: bold; color: ${colorClass}; font-size: 1.2rem;">${percentage}%</span>
                    <span style="font-size: 0.9rem; color: #777;">(${data.aciertos}/${data.total})</span>
                </div>
            </div>
        `;
        subtopicStatsContainer.innerHTML += htmlSubCard;
    }
}

// Finalizar el examen y mostrar resultados
async function finishQuiz() {
    if (confirm("¿Estás seguro de que deseas finalizar el examen?")) {
        const results = calculateResults();
        renderResults(results);

        quizContainer.classList.add('hidden');
        resultsContainer.classList.remove('hidden');

        window.scrollTo(0, 0);
        console.log("Examen finalizado. Respuestas enviadas:", userAnswers);

        // Calcular duración del examen
        const endTime = new Date();
        const duration = studentData.startTime ?
            Math.round((endTime - studentData.startTime) / 60000) : 0; // en minutos

        // Enviar resultados a Firebase
        try {
            const firebaseResult = await guardarResultadosEnFirebase(
                {
                    ...studentData,
                    duracion: `${duration} minutos`
                },
                results
            );

            if (firebaseResult.success) {
                // Mostrar confirmación
                document.getElementById('confirm-score').textContent =
                    `${results.totalCorrect}/${results.totalQuestions} (${results.percentage}%)`;
                document.getElementById('confirmation-modal').classList.remove('hidden');

                // El usuario debe cerrar el modal manualmente haciendo clic en el botón "Cerrar"
            } else {
                console.error('Error al enviar resultados:', firebaseResult.error);
                alert('Tus resultados se guardaron localmente, pero no se pudieron enviar al servidor. Por favor, contacta al profesor.');
            }
        } catch (error) {
            console.error('Error al enviar a Firebase:', error);
            alert('Tus resultados se guardaron localmente, pero no se pudieron enviar al servidor.');
        }
    }
}

// Reiniciar el simulador
function restartQuiz() {
    if (confirm("¿Estás seguro de que deseas reiniciar el examen? Se perderán todas tus respuestas.")) {
        resultsContainer.classList.add('hidden');
        quizContainer.classList.remove('hidden');
        currentQuestionIndex = 0;
        userAnswers = {};

        // Limpiar datos guardados
        clearSavedData();

        loadQuestion(0);
    }
}

// --- EVENT LISTENERS ---

// Escuchar cambios en los inputs (Radio buttons)
inputsOptions.forEach(input => {
    input.addEventListener('change', (e) => {
        if (e.target.checked) {
            saveAnswer(e.target.value);
        }
    });
});

// Botón Anterior
domBtnPrev.addEventListener('click', () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion(currentQuestionIndex);
    }
});

// Botón Siguiente
domBtnNext.addEventListener('click', () => {
    if (currentQuestionIndex < activeQuestionBank.length - 1) {
        currentQuestionIndex++;
        loadQuestion(currentQuestionIndex);
    }
});

// Botón Finalizar
domBtnFinish.addEventListener('click', finishQuiz);

// Botón Reiniciar
domBtnRestart.addEventListener('click', restartQuiz);

// Navegación con teclado
document.addEventListener('keydown', (e) => {
    // Solo si estamos en la sección de preguntas
    if (!quizContainer.classList.contains('hidden')) {
        if (e.key === 'ArrowLeft' && currentQuestionIndex > 0) {
            currentQuestionIndex--;
            loadQuestion(currentQuestionIndex);
        } else if (e.key === 'ArrowRight' && currentQuestionIndex < activeQuestionBank.length - 1) {
            currentQuestionIndex++;
            loadQuestion(currentQuestionIndex);
        } else if (e.key === 'Enter' && currentQuestionIndex === activeQuestionBank.length - 1) {
            finishQuiz();
        }
    }
});

// --- INICIALIZACIÓN ---
// Cargar la primera pregunta al abrir la página
document.addEventListener('DOMContentLoaded', () => {
    console.log('Simulador Multi-Grado cargado correctamente');
    console.log('Bancos de preguntas disponibles:', getGradeStats());

    // Cargar datos guardados si existen
    loadSavedData();

    // Mostrar mensaje si hay progreso guardado
    const answeredCount = Object.keys(userAnswers).length;
    if (answeredCount > 0) {
        const continueExam = confirm(
            `Se encontró un examen en progreso con ${answeredCount} respuesta(s) guardada(s).\n\n` +
            `¿Deseas continuar donde lo dejaste?\n\n` +
            `Presiona OK para continuar o Cancelar para empezar de nuevo.`
        );

        if (!continueExam) {
            currentQuestionIndex = 0;
            userAnswers = {};
            clearSavedData();
        }
    }

    // Manejar el formulario de identificación del alumno
    const studentForm = document.getElementById('student-form');
    const studentModal = document.getElementById('student-modal');

    studentForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Guardar datos del alumno
        const gradeSelect = document.getElementById('student-grade');
        selectedGrade = gradeSelect.value;

        if (!selectedGrade) {
            alert('Por favor selecciona tu grado');
            return;
        }

        // Cargar banco de preguntas según el grado
        activeQuestionBank = getQuestionsByGrade(selectedGrade);

        if (activeQuestionBank.length === 0) {
            alert('No hay preguntas disponibles para este grado');
            return;
        }

        studentData.grado = selectedGrade;
        studentData.nombre = document.getElementById('student-name').value.trim();
        studentData.matricula = document.getElementById('student-matricula').value.trim();
        studentData.email = document.getElementById('student-email').value.trim();
        studentData.startTime = new Date();

        console.log('Alumno identificado:', studentData);
        console.log(`Banco de preguntas cargado: ${activeQuestionBank.length} preguntas para grado ${selectedGrade}°`);

        // Ocultar modal y cargar primera pregunta
        studentModal.classList.add('hidden');
        loadQuestion(currentQuestionIndex);
    });

    // Si hay progreso guardado Y el banco de preguntas se cargó correctamente
    // Si no hay banco (caso legacy o bug), dejamos el modal para que seleccione grado
    if (answeredCount > 0 && activeQuestionBank.length > 0) {
        console.log("Continuando examen con banco cargado.");
        studentModal.classList.add('hidden');
        loadQuestion(currentQuestionIndex);
    }
});
