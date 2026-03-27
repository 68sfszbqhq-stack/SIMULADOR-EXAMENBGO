// Logic for Special Exams (1st and 2nd Year)
let currentExamType = null;
let currentStudent = null;
let questions = [];
let currentQuestionIndex = 0;
let userAnswers = [];
let timeLeft = 330; // 5m 30s
let timerInterval = null;
let extensionsUsed = 0;
let cheatLogs = [];

// DOM Elements
const selectionContainer = document.getElementById('selection-container');
const examContainer = document.getElementById('exam-container');
const finishedContainer = document.getElementById('finished-container');
const studentList = document.getElementById('student-list');
const examTitle = document.getElementById('exam-title');
const timerDisplay = document.getElementById('timer-display');
const questionProgress = document.getElementById('question-progress');
const studentActiveName = document.getElementById('student-active-name');
const questionText = document.getElementById('question-text');
const answerInput = document.getElementById('answer-input');
const btnNext = document.getElementById('btn-next');
const timeExtensionModal = document.getElementById('time-extension-modal');
const btnExtendTime = document.getElementById('btn-extend-time');
const btnFinishTime = document.getElementById('btn-finish-time');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    currentExamType = urlParams.get('exam');

    if (!currentExamType || !EXAM_DATA[currentExamType]) {
        alert('Tipo de examen no válido.');
        window.location.href = 'index.html';
        return;
    }

    renderSelection();
    setupAntiCheat();
});

function renderSelection() {
    const data = EXAM_DATA[currentExamType];
    examTitle.innerText = data.title;
    studentList.innerHTML = '';

    data.students.forEach(name => {
        const btn = document.createElement('button');
        btn.className = 'btn-student';
        btn.innerText = name;
        btn.onclick = () => startExam(name);
        studentList.appendChild(btn);
    });
}

function startExam(name) {
    currentStudent = name;
    const data = EXAM_DATA[currentExamType];
    
    // Shuffle questions
    questions = [...data.questions].sort(() => Math.random() - 0.5);
    
    // UI Update
    selectionContainer.classList.add('hidden');
    examContainer.classList.remove('hidden');
    studentActiveName.innerText = `Alumno: ${currentStudent}`;
    
    showQuestion();
    startTimer();
}

function showQuestion() {
    const q = questions[currentQuestionIndex];
    questionProgress.innerText = `Pregunta ${currentQuestionIndex + 1} de ${questions.length}`;
    questionText.innerText = q.text;
    answerInput.value = '';
    
    if (currentQuestionIndex === questions.length - 1) {
        btnNext.innerText = 'Finalizar Examen';
    } else {
        btnNext.innerText = 'Siguiente Pregunta';
    }
}

btnNext.onclick = () => {
    const answer = answerInput.value.trim();
    if (!answer) {
        alert('Por favor, escribe una respuesta.');
        return;
    }

    // Save answer
    userAnswers.push({
        pregunta: questions[currentQuestionIndex].text,
        respuesta: answer
    });

    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    } else {
        finishExam();
    }
};

function startTimer() {
    updateTimerDisplay();
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            handleTimeUp();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerDisplay.innerText = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    if (timeLeft < 60) {
        timerDisplay.classList.add('timer-warning');
    } else {
        timerDisplay.classList.remove('timer-warning');
    }
}

function handleTimeUp() {
    if (extensionsUsed < 2) {
        timeExtensionModal.classList.remove('hidden');
    } else {
        alert('Se ha agotado el tiempo máximo permitido.');
        finishExam();
    }
}

btnExtendTime.onclick = () => {
    extensionsUsed++;
    timeLeft = 120; // 2 minutes
    timeExtensionModal.classList.add('hidden');
    startTimer();
    addCheatLog(`Extensión de tiempo solicitada (${extensionsUsed}/2)`);
};

btnFinishTime.onclick = () => {
    timeExtensionModal.classList.add('hidden');
    finishExam();
};

async function finishExam() {
    clearInterval(timerInterval);
    examContainer.classList.add('hidden');
    
    // Show loading or something if needed
    
    // Submit to Firestore
    const resultData = {
        alumno: currentStudent,
        examen: currentExamType,
        fecha: new Date().toLocaleDateString('es-MX'),
        hora: new Date().toLocaleTimeString('es-MX'),
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        respuestas: userAnswers,
        incidentes: cheatLogs,
        extensionesUsed: extensionsUsed
    };

    try {
        await db.collection('examenes_especiales').add(resultData);
        finishedContainer.classList.remove('hidden');
    } catch (error) {
        console.error("Error saving exam:", error);
        alert("Hubo un error al enviar tus resultados. Por favor, contacta al profesor.");
        // Try to print or save locally?
    }
}

// Anti-Cheat Logic
function setupAntiCheat() {
    // Block context menu
    document.addEventListener('contextmenu', e => {
        e.preventDefault();
        addCheatLog('Clic derecho bloqueado');
    });

    // Block copy
    document.addEventListener('copy', e => {
        e.preventDefault();
        addCheatLog('Intento de copiar texto');
    });

    // Detect Tab Switch
    document.addEventListener('visibilitychange', () => {
        if (document.hidden && currentStudent) {
            addCheatLog('Salida del navegador/pestaña detectada');
        }
    });

    // Detect Screenshot Keys
    document.addEventListener('keydown', e => {
        // Block Ctrl+C, Ctrl+V, PrintScreen
        if ((e.ctrlKey || e.metaKey) && (e.key === 'c' || e.key === 'v')) {
            e.preventDefault();
            addCheatLog(`Intento de usar atajo de teclado: ${e.key}`);
        }
        
        if (e.key === 'PrintScreen') {
            addCheatLog('Tecla PrintScreen detectada');
        }

        // Detect macOS screenshot (Shift+Cmd+3/4)
        if (e.metaKey && e.shiftKey && (e.key === '3' || e.key === '4' || e.key === '5')) {
            addCheatLog('Atajo de captura de pantalla detectado (macOS)');
        }
    });

    // Block Drag/Drop
    document.addEventListener('dragstart', e => e.preventDefault());
    document.addEventListener('drop', e => e.preventDefault());
}

function addCheatLog(msg) {
    if (!currentStudent) return; // Only log after starting
    const log = `${new Date().toLocaleTimeString('es-MX')}: ${msg}`;
    console.warn(log);
    cheatLogs.push(log);
}
