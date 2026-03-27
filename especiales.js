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
document.addEventListener('DOMContentLoaded', async () => {
    const urlParams = new URLSearchParams(window.location.search);
    currentExamType = urlParams.get('exam');

    if (!currentExamType || !EXAM_DATA[currentExamType]) {
        alert('Tipo de examen no válido.');
        window.location.href = 'index.html';
        return;
    }

    await renderSelection();
    setupAntiCheat();
});

async function renderSelection() {
    const data = EXAM_DATA[currentExamType];
    examTitle.innerText = data.title;
    studentList.innerHTML = '<p style="text-align: center; grid-column: 1/-1;">Cargando lista de alumnos...</p>';

    // Fetch completed exams for this type
    let completedNames = new Set();
    try {
        const snapshot = await db.collection('examenes_especiales')
            .where('examen', '==', currentExamType)
            .get();
        snapshot.forEach(doc => {
            completedNames.add(doc.data().alumno);
        });
    } catch (error) {
        console.error("Error fetching completed exams:", error);
    }

    studentList.innerHTML = '';
    data.students.forEach(name => {
        const isDone = completedNames.has(name);
        const btn = document.createElement('button');
        btn.className = `btn-student ${isDone ? 'done' : ''}`;
        btn.innerText = name + (isDone ? ' (REALIZADO ✅)' : '');
        
        if (isDone) {
            btn.disabled = true;
            btn.style.opacity = '0.5';
            btn.style.cursor = 'not-allowed';
            btn.style.borderColor = 'var(--success)';
            btn.style.color = 'var(--success)';
        } else {
            btn.onclick = () => startExam(name);
        }
        
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
    if (!examContainer.classList.contains('hidden')) {
        clearInterval(timerInterval);
        examContainer.classList.add('hidden');
        
        // Show submitting message
        studentActiveName.innerText = "Enviando examen...";
    
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
        }
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

    // Detect Tab Switch / Exit -> AUTO SUBMIT
    document.addEventListener('visibilitychange', () => {
        if (document.hidden && currentStudent && finishedContainer.classList.contains('hidden')) {
            addCheatLog('SALIDA FORZADA: El alumno salió del navegador/pestaña. Examen cerrado automáticamente.');
            finishExam(); // Auto submit
        }
    });

    // Detect Focus Loss (Capture prevention on mobile)
    window.addEventListener('blur', () => {
        if (currentStudent && finishedContainer.classList.contains('hidden')) {
            addCheatLog('CAPTURA O SALIDA DETECTADA: Se perdió el foco de la pantalla (posible captura en móvil o cambio de app).');
            finishExam();
        }
    });

    // Mobile: viewport resize detection (sometimes triggered by screenshot overlay)
    window.addEventListener('resize', () => {
        if (currentStudent && finishedContainer.classList.contains('hidden')) {
            // Only log if it's a significant height change usually not from keyboard
            // but for safety, we'll just log it
            addCheatLog('AVISO: Cambio de tamaño de ventana detectado.');
        }
    });

    // Detect Screenshot Keys (Desktop)
    document.addEventListener('keydown', e => {
        if ((e.ctrlKey || e.metaKey) && (e.key === 'c' || e.key === 'v')) {
            e.preventDefault();
            addCheatLog(`Intento de usar atajo de teclado: ${e.key}`);
        }
        
        if (e.key === 'PrintScreen') {
            addCheatLog('TECLA PRINTSCREEN: Intento de captura.');
            finishExam(); // Extreme measure as requested
        }

        if (e.metaKey && e.shiftKey && (e.key === '3' || e.key === '4' || e.key === '5')) {
            addCheatLog('CAPTURA DETECTADA (Mac): Cerrando examen.');
            finishExam();
        }
    });

    // Block Drag/Drop
    document.addEventListener('dragstart', e => e.preventDefault());
    document.addEventListener('drop', e => e.preventDefault());

    // BeforeUnload Warning
    window.addEventListener('beforeunload', (e) => {
        if (currentStudent && finishedContainer.classList.contains('hidden')) {
            e.preventDefault();
            e.returnValue = ''; // Show generic browser alert
            addCheatLog('AVISO: El alumno intentó recargar la página.');
        }
    });
}

function addCheatLog(msg) {
    if (!currentStudent) return; // Only log after starting
    const log = `${new Date().toLocaleTimeString('es-MX')}: ${msg}`;
    console.warn(log);
    cheatLogs.push(log);
}
