
const fs = require('fs');
const resultados = require('./resultados.json');

function extractObject(fileName, varName) {
    const content = fs.readFileSync(fileName, 'utf8');
    let sandbox = { console };
    try {
        let cleanContent = content.replace(/^(const|let|var)\s+/gm, '');
        eval(cleanContent + '; sandbox.' + varName + ' = ' + varName + ';');
        return sandbox[varName];
    } catch (e) {
        return null;
    }
}

const bankMulti = extractObject('questions-multigrado.js', 'questionBankMultiGrado');

function getFlatBank(bank) {
    let flatBank = [];
    if (Array.isArray(bank)) {
        flatBank = bank;
    } else {
        Object.keys(bank).sort().forEach(grado => {
            flatBank = flatBank.concat(bank[grado]);
        });
    }
    return flatBank;
}

const questions = getFlatBank(bankMulti);

// Analysis structures
const studentAnalysis = [];
const subjectAnalysis = {};
const questionAnalysis = questions.map((q, i) => ({
    id: q.id,
    index: i + 1,
    subject: q.subject,
    subtema: q.subtema,
    question: q.question,
    correctCount: 0,
    totalCount: 0
}));

resultados.forEach(student => {
    const studentStats = {
        Nombre: student.Nombre,
        Matricula: student.Matrícula,
        TotalCorrect: 0,
        TotalQuestions: 0,
        Subjects: {}
    };

    for (let j = 1; j <= 200; j++) {
        const key = 'R_P' + j;
        if (student[key] !== undefined) {
            const i = j - 1;
            const q = questions[i];
            if (!q) continue;

            studentStats.TotalQuestions++;
            const isCorrect = q.correct === student[key];
            if (isCorrect) studentStats.TotalCorrect++;

            // Subject stats for student
            if (!studentStats.Subjects[q.subject]) {
                studentStats.Subjects[q.subject] = { correct: 0, total: 0 };
            }
            studentStats.Subjects[q.subject].total++;
            if (isCorrect) studentStats.Subjects[q.subject].correct++;

            // Global subject stats
            if (!subjectAnalysis[q.subject]) {
                subjectAnalysis[q.subject] = { correct: 0, total: 0 };
            }
            subjectAnalysis[q.subject].total++;
            if (isCorrect) subjectAnalysis[q.subject].correct++;

            // Question difficulty
            if (questionAnalysis[i]) {
                questionAnalysis[i].totalCount++;
                if (isCorrect) questionAnalysis[i].correctCount++;
            }
        }
    }
    studentAnalysis.push(studentStats);
});

// Generate Markdown Report
let report = `# Reporte Detallado de Resultados - Simulador EDIEMS\n\n`;

report += `## 1. Resumen General\n`;
const totalExams = studentAnalysis.length;
const globalCorrect = Object.values(subjectAnalysis).reduce((a, b) => a + b.correct, 0);
const globalTotal = Object.values(subjectAnalysis).reduce((a, b) => a + b.total, 0);
const globalAverage = (globalCorrect / globalTotal * 100).toFixed(1);

report += `- **Total de Alumnos:** ${totalExams}\n`;
report += `- **Promedio General de Aciertos:** ${globalAverage}%\n`;
report += `- **Total de Preguntas Evaluadas:** ${questions.length}\n\n`;

report += `## 2. Desempeño por Asignatura\n`;
report += `| Asignatura | Aciertos | Total | Porcentaje |\n`;
report += `| :--- | :---: | :---: | :---: |\n`;
Object.entries(subjectAnalysis).sort((a, b) => (b.correct / b.total) - (a.correct / a.total)).forEach(([subject, stats]) => {
    const percent = (stats.correct / stats.total * 100).toFixed(1);
    report += `| ${subject} | ${stats.correct} | ${stats.total} | **${percent}%** |\n`;
});
report += `\n`;

report += `## 3. Top 5 Temas con Mayor Dificultad\n`;
const hardestQuestions = questionAnalysis
    .filter(q => q.totalCount > 0)
    .sort((a, b) => (a.correctCount / a.totalCount) - (b.correctCount / b.totalCount))
    .slice(0, 10);

report += `| # | Asignatura | Subtema | Efectividad |\n`;
report += `| :--- | :--- | :--- | :---: |\n`;
hardestQuestions.forEach(q => {
    const percent = (q.correctCount / q.totalCount * 100).toFixed(1);
    report += `| ${q.index} | ${q.subject} | ${q.subtema} | ${percent}% |\n`;
});
report += `\n`;

report += `## 4. Desempeño Individual de Alumnos\n`;
report += `| Alumno | Aciertos | % Total | Mejor Asignatura |\n`;
report += `| :--- | :---: | :---: | :--- |\n`;
studentAnalysis.sort((a, b) => b.TotalCorrect - a.TotalCorrect).forEach(s => {
    const percent = (s.TotalCorrect / s.TotalQuestions * 100).toFixed(1);
    let bestSubject = "N/A";
    let maxSubPercent = -1;
    Object.entries(s.Subjects).forEach(([sub, stats]) => {
        const p = stats.correct / stats.total;
        if (p > maxSubPercent) {
            maxSubPercent = p;
            bestSubject = sub;
        }
    });
    report += `| ${s.Nombre} | ${s.TotalCorrect}/${s.TotalQuestions} | ${percent}% | ${bestSubject} |\n`;
});

fs.writeFileSync('ANALISIS_DETALLADO.md', report);
console.log('Reporte generado en ANALISIS_DETALLADO.md');
