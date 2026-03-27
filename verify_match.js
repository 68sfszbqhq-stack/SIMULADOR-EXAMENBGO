
const fs = require('fs');
const resultados = require('./resultados.json');

// We need to load questionBank and questionBankMultiGrado
// Since they are defined in .js files as global variables, we can't easily 'require' them if they aren't exported.
// I'll read the files and extract the objects.

function extractObject(fileName, varName) {
    const content = fs.readFileSync(fileName, 'utf8');
    const start = content.indexOf(varName + ' =');
    if (start === -1) return null;
    const end = content.lastIndexOf(';'); // Simplified
    let jsonStr = content.substring(content.indexOf('{', start), content.lastIndexOf('}') + 1);
    // This is risky because of comments and functions, but let's try a simpler way:
    // Just eval it in a sandbox-ish way
    let sandbox = {};
    try {
        eval(content + '; sandbox.' + varName + ' = ' + varName + ';');
        return sandbox[varName];
    } catch (e) {
        console.error('Error parsing ' + fileName, e);
        return null;
    }
}

const bankBUAP = extractObject('questions.js', 'questionBank');
const bankMulti = extractObject('questions-multigrado.js', 'questionBankMultiGrado');

function getMap(bank) {
    const map = new Map();
    if (Array.isArray(bank)) {
        bank.forEach(q => map.set(q.id.toString(), q));
    } else {
        Object.keys(bank).forEach(grado => {
            bank[grado].forEach(q => map.set(q.id.toString(), q));
        });
    }
    return map;
}

const mapBUAP = getMap(bankBUAP);
const mapMulti = getMap(bankMulti);


function checkIndex(bank, student) {
    let correct = 0;
    let total = 0;
    let flatBank = [];
    if (Array.isArray(bank)) {
        flatBank = bank;
    } else {
        Object.keys(bank).sort().forEach(grado => {
            flatBank = flatBank.concat(bank[grado]);
        });
    }

    for (let i = 1; i <= 200; i++) {
        const key = 'R_P' + i;
        if (student[key] !== undefined) {
            total++;
            const q = flatBank[i - 1];
            if (q && q.correct === student[key]) {
                correct++;
            }
        }
    }
    return { correct, total };
}

console.log('Student 0: ' + resultados[0].Nombre);
console.log('Reported: ' + resultados[0].Correctas + '/' + resultados[0].Total);
console.log('BUAP index match: ', checkIndex(bankBUAP, resultados[0]));
console.log('Multi index match: ', checkIndex(bankMulti, resultados[0]));
