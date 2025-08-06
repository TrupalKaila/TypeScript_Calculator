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
import { pressKey } from './main.js'
export function calculate(): void {
    const input = document.getElementById('calculations') as HTMLInputElement | null;

    if (!input) return;

    try {
        const expression = input.value;
        // Use global math.evaluate
        const result = (window as any).math.evaluate(expression);

        input.value = result.toString();
        localStorage.setItem('calculations', result.toString());

        addToHistory(expression, result); // assuming this is defined
    } catch (e) {
        alert("Invalid expression");
    }
}


function addToHistory(expression: string, result: number): void {
    const stored = localStorage.getItem('history');
    let history: { expression: string; result: number }[] = stored ? JSON.parse(stored) : [];
    history.unshift({ expression, result });
    if (history.length > 50) history = history.slice(0, 50);
    localStorage.setItem('history', JSON.stringify(history));
    renderHistory();
}

export function renderHistory(): void {
    const historyList = document.getElementById('historyList') as HTMLElement | null;
    if (!historyList) return;

    const stored = localStorage.getItem('history');
    const history: { expression: string; result: number }[] = stored ? JSON.parse(stored) : [];

    historyList.innerHTML = '';
    history.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.expression} = ${item.result}`;
        historyList.appendChild(li);
    });
}
// Call renderHistory() on page load
document.addEventListener('DOMContentLoaded', renderHistory);

function toggleSign(): void {
    const input = document.getElementById('calculations') as HTMLInputElement | null;
    if (!input) return;

    let value = input.value;

    if (value === "0" || value === "") {
        value = "0";
    } else if (!isNaN(Number(value))) {
        value = (parseFloat(value) * -1).toString();
    }

    input.value = value;
    localStorage.setItem('calculations', value);
}

export function clearCalc(): void {
    const input = document.getElementById('calculations') as HTMLInputElement | null;
    if (!input) return;
    input.value = "0";
    localStorage.setItem('calculations', "0");
}

let isExponential: boolean = false; // tracks current display format
let lastNumericValue: number | null = null; // stores base number before switching

let isSecond: boolean = false;

function toggleSecond(): void {
    isSecond = !isSecond;

    const secondBtn = document.getElementById('secondBtn') as HTMLElement | null;
    if (secondBtn) {
        secondBtn.classList.toggle('second-active', isSecond);
    }

    const squareBtn = document.getElementById('squareBtn') as HTMLButtonElement | null;
    if (squareBtn) {
        squareBtn.innerHTML = isSecond ? 'x<sup>3</sup>' : 'x<sup>2</sup>';
        squareBtn.onclick = isSecond ? calculateCube : calculateSquare;
    }

    const sqrtBtn = document.getElementById('sqrtBtn') as HTMLButtonElement | null;
    if (sqrtBtn) {
        sqrtBtn.innerHTML = isSecond ? '&sup3;&radic;x' : '&sup2;&radic;x';
        sqrtBtn.onclick = isSecond ? calculateCbrt : calculateSqrt;
    }

    const powerBtn = document.getElementById('powerBtn') as HTMLButtonElement | null;
    if (powerBtn) {
        powerBtn.innerHTML = isSecond ? 'y&radic;x' : 'x<sup>y</sup>';
        powerBtn.onclick = isSecond ? calculateYRoot : () => pressKey('^');
    }

    const tenPowerBtn = document.getElementById('tenPowerBtn') as HTMLButtonElement | null;
    if (tenPowerBtn) {
        tenPowerBtn.innerHTML = isSecond ? '2<sup>x</sup>' : '10<sup>x</sup>';
        tenPowerBtn.onclick = isSecond ? calculateTwoPowerX : () => pressKey('10^');
    }

    const logBtn = document.getElementById('logBtn') as HTMLButtonElement | null;
    if (logBtn) {
        logBtn.innerHTML = isSecond ? 'log<sub>y</sub>(x)' : 'log';
        logBtn.onclick = isSecond ? calculateLogY : calculateLog;
    }

    const lnBtn = document.getElementById('lnBtn') as HTMLButtonElement | null;
    if (lnBtn) {
        lnBtn.innerHTML = isSecond ? 'e<sup>x</sup>' : 'ln';
        lnBtn.onclick = isSecond ? () => calculateEpowX() : calculateLn;
    }
}

(window as any).calculate = calculate;
(window as any).addToHistory = addToHistory;
(window as any).renderHistory = renderHistory;
(window as any).toggleSign = toggleSign;
(window as any).clearCalc = clearCalc;
(window as any).toggleSecond = toggleSecond;