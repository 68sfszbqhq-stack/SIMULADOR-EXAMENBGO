
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
const subjects = [...new Set(questions.filter(q => q).map(q => q.subject))];

// Prepare CSV Headers
let csv = "Alumno,Matricula,Total Correctas,Porcentaje General";
subjects.forEach(s => {
    csv += `,${s} (Total),${s} (%)`;
});
// Question markers
for (let i = 1; i <= 99; i++) {
    csv += `,P${i}`;
}
csv += "\n";

// Data rows
resultados.forEach(student => {
    let row = `"${student.Nombre}","${student.Matrícula}"`;
    let totalCorrect = 0;
    let totalQuestions = 0;
    let subjectStats = {};
    subjects.forEach(s => subjectStats[s] = { correct: 0, total: 0 });

    let pMarkers = [];

    for (let j = 1; j <= 99; j++) {
        const key = 'R_P' + j;
        const q = questions[j - 1];
        if (student[key] !== undefined && q) {
            totalQuestions++;
            const isCorrect = q.correct === student[key];
            if (isCorrect) {
                totalCorrect++;
                subjectStats[q.subject].correct++;
                pMarkers.push("1");
            } else {
                pMarkers.push("0");
            }
            subjectStats[q.subject].total++;
        } else {
            pMarkers.push("");
        }
    }

    row += `,${totalCorrect},${(totalCorrect / totalQuestions * 100).toFixed(1)}%`;

    subjects.forEach(s => {
        const stats = subjectStats[s];
        row += `,${stats.correct}/${stats.total},${stats.total > 0 ? (stats.correct / stats.total * 100).toFixed(1) + "%" : "0%"}`;
    });

    row += "," + pMarkers.join(",");
    csv += row + "\n";
});

fs.writeFileSync('ANALISIS_DETALLADO_COMPLETO.csv', "\uFEFF" + csv);
console.log('CSV generado en ANALISIS_DETALLADO_COMPLETO.csv');
