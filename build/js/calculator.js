import { evaluate } from 'mathjs'; // if using mathjs from npm
import { pressKey, flag } from './main';
export function calculate() {
    const input = document.getElementById('calculations');
    if (!input)
        return;
    try {
        const expression = input.value;
        const result = evaluate(expression); // Use imported function
        input.value = result.toString(); // Ensure it's string
        localStorage.setItem('calculations', result.toString());
        // Store history (assuming it's defined elsewhere or also imported)
        addToHistory(expression, result);
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
export function toggleSign() {
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
export function toggleExponential() {
    const input = document.getElementById('calculations');
    if (!input)
        return;
    const value = input.value;
    if (!isExponential) {
        // Convert to exponential if valid number
        const num = parseFloat(value);
        if (!isNaN(num) && value !== "") {
            lastNumericValue = num;
            input.value = num.toExponential(5);
            isExponential = true;
        }
    }
    else {
        // Revert to standard format
        if (lastNumericValue !== null) {
            input.value = lastNumericValue.toString();
            isExponential = false;
        }
    }
    localStorage.setItem('calculations', input.value);
}
function calculateLn() {
    const input = document.getElementById('calculations');
    if (!input)
        return;
    let value = parseFloat(input.value);
    if (isNaN(value) || value <= 0) {
        alert("Invalid input for ln");
        return;
    }
    let result = Math.log(value);
    input.value = result.toString();
    localStorage.setItem('calculations', result.toString());
}
export function calculateLog() {
    const input = document.getElementById('calculations');
    if (!input)
        return;
    const value = parseFloat(input.value);
    if (isNaN(value) || value <= 0) {
        alert("Invalid input for log");
        return;
    }
    const result = Math.log10(value);
    input.value = result.toString();
    localStorage.setItem('calculations', result.toString());
}
export function calculateReciprocal() {
    const input = document.getElementById('calculations');
    if (!input)
        return;
    const value = parseFloat(input.value);
    if (isNaN(value) || value === 0) {
        alert("Invalid input for reciprocal");
        return;
    }
    const result = 1 / value;
    input.value = result.toString();
    localStorage.setItem('calculations', result.toString());
}
function calculateSqrt() {
    const input = document.getElementById('calculations');
    if (!input)
        return;
    const value = parseFloat(input.value);
    if (isNaN(value) || value < 0) {
        alert("Invalid input for square root");
        return;
    }
    const result = Math.sqrt(value);
    input.value = result.toString();
    localStorage.setItem('calculations', result.toString());
}
function calculateSquare() {
    const input = document.getElementById('calculations');
    if (!input)
        return;
    const value = parseFloat(input.value);
    if (isNaN(value)) {
        alert("Invalid input for square");
        return;
    }
    const result = value * value;
    input.value = result.toString();
    localStorage.setItem('calculations', result.toString());
}
let isSecond = false;
export function toggleSecond() {
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
function calculateAbs() {
    const input = document.getElementById('calculations');
    if (!input)
        return;
    const value = parseFloat(input.value);
    if (isNaN(value)) {
        alert("Enter a valid number");
        return;
    }
    const result = Math.abs(value);
    input.value = result.toString();
    localStorage.setItem('calculations', result.toString());
}
function calculateEpowX() {
    const input = document.getElementById('calculations');
    if (!input)
        return;
    const value = parseFloat(input.value);
    if (isNaN(value)) {
        alert("Enter a valid number.");
        return;
    }
    const result = Math.exp(value); // e^x
    input.value = result.toString();
    localStorage.setItem('calculations', result.toString());
}
function calculateExp() {
    const input = document.getElementById('calculations');
    if (!input)
        return;
    const value = parseFloat(input.value);
    if (isNaN(value)) {
        alert("Enter a valid number.");
        return;
    }
    const result = value.toExponential(5); // Use fixed precision
    input.value = result;
    localStorage.setItem('calculations', result);
}
function calculateCube() {
    const input = document.getElementById('calculations');
    if (!input)
        return;
    const value = parseFloat(input.value);
    if (isNaN(value)) {
        alert("Invalid input for cube");
        return;
    }
    const result = Math.pow(value, 3);
    input.value = result.toString();
    localStorage.setItem('calculations', result.toString());
}
function calculateCbrt() {
    const input = document.getElementById('calculations');
    if (!input)
        return;
    const value = parseFloat(input.value);
    if (isNaN(value)) {
        alert("Invalid input for cube root");
        return;
    }
    const result = Math.cbrt(value);
    input.value = result.toString();
    localStorage.setItem('calculations', result.toString());
}
function calculateYRoot() {
    const input = document.getElementById('calculations');
    if (!input)
        return;
    const x = parseFloat(input.value);
    const yRaw = prompt("Enter root degree (y):");
    const y = yRaw !== null ? parseFloat(yRaw) : NaN;
    if (isNaN(x) || isNaN(y) || y === 0) {
        alert("Invalid input for y√x");
        return;
    }
    const result = Math.pow(x, 1 / y);
    input.value = result.toString();
    localStorage.setItem('calculations', result.toString());
}
function calculateTwoPowerX() {
    const input = document.getElementById('calculations');
    if (!input)
        return;
    const x = parseFloat(input.value);
    if (isNaN(x)) {
        alert("Invalid input for 2^x");
        return;
    }
    const result = Math.pow(2, x);
    input.value = result.toString();
    localStorage.setItem('calculations', result.toString());
}
export function calculateLogY() {
    const input = document.getElementById('calculations');
    if (!input)
        return;
    const x = parseFloat(input.value);
    const yRaw = prompt("Enter base (y):");
    const y = yRaw !== null ? parseFloat(yRaw) : NaN;
    if (isNaN(x) || isNaN(y) || y <= 0 || x <= 0) {
        alert("Invalid input for logy(x)");
        return;
    }
    const result = Math.log(x) / Math.log(y);
    input.value = result.toString();
    localStorage.setItem('calculations', result.toString());
}
// yroot(x)
//logy(x)
//->deg
//# sourceMappingURL=calculator.js.map