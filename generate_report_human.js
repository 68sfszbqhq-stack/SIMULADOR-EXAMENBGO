
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

// Analysis structures using EXCEL REPORTED DATA
const studentAnalysis = [];
const subjectAnalysis = {};
const questionAnalysis = questions.map((q, i) => ({
    id: q.id,
    index: i + 1,
    subject: q.subject,
    subtema: q.subtema,
    correctCount: 0,
    totalCount: 0
}));

resultados.forEach(student => {
    // We use the "Correctas" and "Total" fields directly from Excel (Human corrected)
    const reportedCorrect = student.Correctas;
    const reportedTotal = student.Total;
    const reportedPercent = (student.Porcentaje * 100).toFixed(1);

    const studentStats = {
        Nombre: student.Nombre,
        Matricula: student.Matrícula,
        TotalCorrect: reportedCorrect,
        TotalQuestions: reportedTotal,
        Percent: reportedPercent,
        Subjects: {}
    };

    // For per-subject analysis, we still need to iterate questions to attribute weight
    // BUT we will adjust the totals based on the reported Correctas if needed.
    // However, the user says "SHOW DATA AS REAL" referring to the Excel values.
    // I will use the Excel per-question responses (R_P1, etc) to calculate SUBJECT distribution
    // then scale it to match the reported "Correctas" total if there's a mismatch.

    let calculatedCorrect = 0;
    let tempSubjectStats = {};

    for (let j = 1; j <= 200; j++) {
        const key = 'R_P' + j;
        if (student[key] !== undefined) {
            const i = j - 1;
            const q = questions[i];
            if (!q) continue;

            const isCorrect = q.correct === student[key];
            if (isCorrect) calculatedCorrect++;

            if (!tempSubjectStats[q.subject]) {
                tempSubjectStats[q.subject] = { correct: 0, total: 0 };
            }
            tempSubjectStats[q.subject].total++;
            if (isCorrect) tempSubjectStats[q.subject].correct++;

            if (!subjectAnalysis[q.subject]) {
                subjectAnalysis[q.subject] = { correct: 0, total: 0 };
            }
            subjectAnalysis[q.subject].total++;
            if (isCorrect) subjectAnalysis[q.subject].correct++;

            if (questionAnalysis[i]) {
                questionAnalysis[i].totalCount++;
                if (isCorrect) questionAnalysis[i].correctCount++;
            }
        }
    }

    // Scale subjects to match human corrected total if different
    const factor = reportedCorrect / (calculatedCorrect || 1);
    Object.keys(tempSubjectStats).forEach(sub => {
        studentStats.Subjects[sub] = {
            correct: Math.round(tempSubjectStats[sub].correct * factor),
            total: tempSubjectStats[sub].total
        };
    });

    studentAnalysis.push(studentStats);
});

// Generate Markdown Report
let report = `# Reporte de Resultados Finales (Validado) - Simulador EDIEMS\n\n`;

report += `## 1. Resumen General (Datos Corregidos)\n`;
const totalExams = studentAnalysis.length;
const totalReportedCorrect = studentAnalysis.reduce((a, b) => a + b.TotalCorrect, 0);
const totalReportedQuestions = studentAnalysis.reduce((a, b) => a + b.TotalQuestions, 0);
const globalAverage = (totalReportedCorrect / totalReportedQuestions * 100).toFixed(1);

report += `- **Total de Alumnos:** ${totalExams}\n`;
report += `- **Promedio General (Human Corrected):** ${globalAverage}%\n`;
report += `- **Total de Aciertos Globales:** ${totalReportedCorrect} / ${totalReportedQuestions}\n\n`;

report += `## 2. Desempeño por Asignatura\n`;
report += `| Asignatura | Aciertos (Est.) | Total | Porcentaje |\n`;
report += `| :--- | :---: | :---: | :---: |\n`;

// Scale global subject stats to match global reported total
const globalFactor = totalReportedCorrect / (Object.values(subjectAnalysis).reduce((a, b) => a + b.correct, 0) || 1);

Object.entries(subjectAnalysis).sort((a, b) => (b.correct / b.total) - (a.correct / a.total)).forEach(([subject, stats]) => {
    const adjustedCorrect = Math.round(stats.correct * globalFactor);
    const percent = (adjustedCorrect / stats.total * 100).toFixed(1);
    report += `| ${subject} | ${adjustedCorrect} | ${stats.total} | **${percent}%** |\n`;
});
report += `\n`;

report += `## 3. Desempeño Individual de Alumnos (Datos Reales Excel)\n`;
report += `| Alumno | Aciertos | Porcentaje | Resultado |\n`;
report += `| :--- | :---: | :---: | :--- |\n`;
studentAnalysis.sort((a, b) => b.TotalCorrect - a.TotalCorrect).forEach(s => {
    const status = s.TotalCorrect >= (s.TotalQuestions * 0.6) ? "✅ Aprobado" : "❌ No Aprobado";
    report += `| ${s.Nombre} | **${s.TotalCorrect}** / ${s.TotalQuestions} | ${s.Percent}% | ${status} |\n`;
});

fs.writeFileSync('ANALISIS_CORREGIDO_HUMANO.md', report);
console.log('Reporte generado en ANALISIS_CORREGIDO_HUMANO.md');
