
const fs = require('fs');
const resultados = require('./resultados.json');

function extractObject(fileName, varName) {
    const content = fs.readFileSync(fileName, 'utf8');
    let sandbox = { console };
    try {
        // Remove 'const' or 'let' or 'var' to allow re-assignment in eval
        let cleanContent = content.replace(/^(const|let|var)\s+/gm, '');
        eval(cleanContent + '; sandbox.' + varName + ' = ' + varName + ';');
        return sandbox[varName];
    } catch (e) {
        // Fallback for more complex files
        try {
            eval(content + '; sandbox.' + varName + ' = ' + varName + ';');
            return sandbox[varName];
        } catch (e2) {
            console.error('Error parsing ' + fileName, e2);
            return null;
        }
    }
}

const bankBUAP = extractObject('questions.js', 'questionBank');
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

const flatMulti = getFlatBank(bankMulti);

resultados.forEach((student, i) => {
    let correct = 0;
    for (let j = 1; j <= 200; j++) {
        const key = 'R_P' + j;
        if (student[key] !== undefined) {
            const q = flatMulti[j - 1];
            if (q && q.correct === student[key]) {
                correct++;
            }
        }
    }
    console.log(`${student.Nombre}: Reported ${student.Correctas}, Calculated ${correct}`);
});
