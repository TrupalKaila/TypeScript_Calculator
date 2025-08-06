import { calculateEpowX } from './complex-operation.js';
import { calculateCube } from './complex-operation.js';
import { calculateCbrt } from './complex-operation.js';
import { calculateYRoot } from './complex-operation.js';
import { calculateLogY } from './complex-operation.js';
import { calculateLn } from './complex-operation.js';
import { calculateLog } from './complex-operation.js';
import { calculateSqrt } from './complex-operation.js';
import { calculateSquare } from './complex-operation.js';
import { calculateTwoPowerX } from './complex-operation.js';
import { pressKey } from './main.js';
export function calculate() {
    const input = document.getElementById('calculations');
    if (!input)
        return;
    try {
        const expression = input.value;
        // Use global math.evaluate
        const result = window.math.evaluate(expression);
        input.value = result.toString();
        localStorage.setItem('calculations', result.toString());
        addToHistory(expression, result); // assuming this is defined
    }
    catch (e) {
        alert("Invalid expression");
    }
}
function addToHistory(expression, result) {
    const stored = localStorage.getItem('history');
    let history = stored ? JSON.parse(stored) : [];
    history.unshift({ expression, result });
    if (history.length > 50)
        history = history.slice(0, 50);
    localStorage.setItem('history', JSON.stringify(history));
    renderHistory();
}
export function renderHistory() {
    const historyList = document.getElementById('historyList');
    if (!historyList)
        return;
    const stored = localStorage.getItem('history');
    const history = stored ? JSON.parse(stored) : [];
    historyList.innerHTML = '';
    history.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.expression} = ${item.result}`;
        historyList.appendChild(li);
    });
}
// Call renderHistory() on page load
document.addEventListener('DOMContentLoaded', renderHistory);
function toggleSign() {
    const input = document.getElementById('calculations');
    if (!input)
        return;
    let value = input.value;
    if (value === "0" || value === "") {
        value = "0";
    }
    else if (!isNaN(Number(value))) {
        value = (parseFloat(value) * -1).toString();
    }
    input.value = value;
    localStorage.setItem('calculations', value);
}
export function clearCalc() {
    const input = document.getElementById('calculations');
    if (!input)
        return;
    input.value = "0";
    localStorage.setItem('calculations', "0");
}
let isExponential = false; // tracks current display format
let lastNumericValue = null; // stores base number before switching
let isSecond = false;
function toggleSecond() {
    isSecond = !isSecond;
    const secondBtn = document.getElementById('secondBtn');
    if (secondBtn) {
        secondBtn.classList.toggle('second-active', isSecond);
    }
    const squareBtn = document.getElementById('squareBtn');
    if (squareBtn) {
        squareBtn.innerHTML = isSecond ? 'x<sup>3</sup>' : 'x<sup>2</sup>';
        squareBtn.onclick = isSecond ? calculateCube : calculateSquare;
    }
    const sqrtBtn = document.getElementById('sqrtBtn');
    if (sqrtBtn) {
        sqrtBtn.innerHTML = isSecond ? '&sup3;&radic;x' : '&sup2;&radic;x';
        sqrtBtn.onclick = isSecond ? calculateCbrt : calculateSqrt;
    }
    const powerBtn = document.getElementById('powerBtn');
    if (powerBtn) {
        powerBtn.innerHTML = isSecond ? 'y&radic;x' : 'x<sup>y</sup>';
        powerBtn.onclick = isSecond ? calculateYRoot : () => pressKey('^');
    }
    const tenPowerBtn = document.getElementById('tenPowerBtn');
    if (tenPowerBtn) {
        tenPowerBtn.innerHTML = isSecond ? '2<sup>x</sup>' : '10<sup>x</sup>';
        tenPowerBtn.onclick = isSecond ? calculateTwoPowerX : () => pressKey('10^');
    }
    const logBtn = document.getElementById('logBtn');
    if (logBtn) {
        logBtn.innerHTML = isSecond ? 'log<sub>y</sub>(x)' : 'log';
        logBtn.onclick = isSecond ? calculateLogY : calculateLog;
    }
    const lnBtn = document.getElementById('lnBtn');
    if (lnBtn) {
        lnBtn.innerHTML = isSecond ? 'e<sup>x</sup>' : 'ln';
        lnBtn.onclick = isSecond ? () => calculateEpowX() : calculateLn;
    }
}
window.calculate = calculate;
window.addToHistory = addToHistory;
window.renderHistory = renderHistory;
window.toggleSign = toggleSign;
window.clearCalc = clearCalc;
window.toggleSecond = toggleSecond;
//# sourceMappingURL=calculator.js.map