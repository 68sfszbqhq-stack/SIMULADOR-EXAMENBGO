// --- ESTADO DE LA APLICACIÓN ---
let currentQuestionIndex = 0;

// Objeto para guardar respuestas: { id_pregunta: 'A', id_pregunta_2: 'B', ... }
let userAnswers = {};

// --- FUNCIONES DE PERSISTENCIA ---

// Cargar datos guardados del localStorage
function loadSavedData() {
    const savedAnswers = localStorage.getItem('buap_exam_answers');
    const savedIndex = localStorage.getItem('buap_exam_current_index');

    if (savedAnswers) {
        try {
            userAnswers = JSON.parse(savedAnswers);
            console.log('Respuestas cargadas desde localStorage:', userAnswers);
        } catch (e) {
            console.error('Error al cargar respuestas:', e);
            userAnswers = {};
        }
    }

    if (savedIndex) {
        currentQuestionIndex = parseInt(savedIndex, 10);
        if (isNaN(currentQuestionIndex) || currentQuestionIndex < 0 || currentQuestionIndex >= questionBank.length) {
            currentQuestionIndex = 0;
        }
    }
}

// Guardar datos en localStorage
function saveData() {
    try {
        localStorage.setItem('buap_exam_answers', JSON.stringify(userAnswers));
        localStorage.setItem('buap_exam_current_index', currentQuestionIndex.toString());
    } catch (e) {
        console.error('Error al guardar en localStorage:', e);
    }
}

// Limpiar datos guardados
function clearSavedData() {
    localStorage.removeItem('buap_exam_answers');
    localStorage.removeItem('buap_exam_current_index');
    console.log('Datos del examen eliminados');
}

// --- REFERENCIAS DOM ---
const domQuestionText = document.getElementById('question-text');
const domQuestionSubject = document.getElementById('question-subject');
const domQuestionProgress = document.getElementById('question-progress');

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
    const questionData = questionBank[index];

    domQuestionText.textContent = questionData.question;
    domQuestionSubject.textContent = `${questionData.subject}${questionData.subtema ? ' - ' + questionData.subtema : ''}`;
    domQuestionProgress.textContent = `Pregunta ${index + 1} de ${questionBank.length}`;

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

    if (index === questionBank.length - 1) {
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
    const currentQuestion = questionBank[currentQuestionIndex];
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

    questionBank.forEach(q => {
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
        totalQuestions: questionBank.length,
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
function finishQuiz() {
    if (confirm("¿Estás seguro de que deseas finalizar el examen?")) {
        const results = calculateResults();
        renderResults(results);

        quizContainer.classList.add('hidden');
        resultsContainer.classList.remove('hidden');

        window.scrollTo(0, 0);
        console.log("Examen finalizado. Respuestas enviadas:", userAnswers);
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
    if (currentQuestionIndex < questionBank.length - 1) {
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
        } else if (e.key === 'ArrowRight' && currentQuestionIndex < questionBank.length - 1) {
            currentQuestionIndex++;
            loadQuestion(currentQuestionIndex);
        } else if (e.key === 'Enter' && currentQuestionIndex === questionBank.length - 1) {
            finishQuiz();
        }
    }
});

// --- INICIALIZACIÓN ---
// Cargar la primera pregunta al abrir la página
document.addEventListener('DOMContentLoaded', () => {
    console.log('Simulador BUAP cargado correctamente');
    console.log(`Total de preguntas: ${questionBank.length}`);

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

    loadQuestion(currentQuestionIndex);
});
