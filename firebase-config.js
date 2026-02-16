// Configuración de Firebase
// Proyecto: BUAP Exam Simulator

const firebaseConfig = {
    apiKey: "AIzaSyBCdvgCo4XsFQryJVAa8rk7YUb4RxcdePA",
    authDomain: "buap-exam-simulator.firebaseapp.com",
    projectId: "buap-exam-simulator",
    storageBucket: "buap-exam-simulator.firebasestorage.app",
    messagingSenderId: "369867757222",
    appId: "1:369867757222:web:e3913669faa1882d260667",
    measurementId: "G-9X61Q68FVW"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

// Inicializar Firestore
const db = firebase.firestore();

// Función para guardar resultados en Firebase
async function guardarResultadosEnFirebase(datosAlumno, resultados) {
    try {
        const docRef = await db.collection('resultados').add({
            alumno: {
                nombre: datosAlumno.nombre,
                matricula: datosAlumno.matricula,
                email: datosAlumno.email || '',
                grado: datosAlumno.grado || ''
            },
            examen: {
                fecha: new Date().toLocaleDateString('es-MX'),
                hora: new Date().toLocaleTimeString('es-MX'),
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                duracion: datosAlumno.duracion || 'No registrado'
            },
            resultados: {
                totalCorrectas: resultados.totalCorrect,
                totalPreguntas: resultados.totalQuestions,
                porcentaje: parseFloat(resultados.percentage),
                respuestas: userAnswers, // Todas las respuestas del alumno
                porMateria: resultados.statsBloques,
                porSubtema: resultados.statsSubtemas,
                respondidas: resultados.answeredQuestions
            }
        });

        console.log('Resultados guardados con ID:', docRef.id);
        return { success: true, id: docRef.id };
    } catch (error) {
        console.error('Error al guardar resultados:', error);
        return { success: false, error: error.message };
    }
}

// Función para obtener todos los resultados (para el panel admin)
async function obtenerTodosLosResultados() {
    try {
        const snapshot = await db.collection('resultados')
            .orderBy('examen.timestamp', 'desc')
            .get();

        const resultados = [];
        snapshot.forEach(doc => {
            resultados.push({
                id: doc.id,
                ...doc.data()
            });
        });

        return resultados;
    } catch (error) {
        console.error('Error al obtener resultados:', error);
        return [];
    }
}

// Función para obtener estadísticas generales
async function obtenerEstadisticasGenerales() {
    try {
        const snapshot = await db.collection('resultados').get();

        let totalExamenes = 0;
        let sumaCalificaciones = 0;
        let aprobados = 0;

        snapshot.forEach(doc => {
            const data = doc.data();
            totalExamenes++;
            sumaCalificaciones += data.resultados.porcentaje;
            if (data.resultados.porcentaje >= 60) {
                aprobados++;
            }
        });

        return {
            totalExamenes,
            promedioGeneral: totalExamenes > 0 ? (sumaCalificaciones / totalExamenes).toFixed(1) : 0,
            aprobados,
            porcentajeAprobados: totalExamenes > 0 ? ((aprobados / totalExamenes) * 100).toFixed(1) : 0
        };
    } catch (error) {
        console.error('Error al obtener estadísticas:', error);
        return {
            totalExamenes: 0,
            promedioGeneral: 0,
            aprobados: 0,
            porcentajeAprobados: 0
        };
    }
}
