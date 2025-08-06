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
let isExponential = false; // tracks current display format
let lastNumericValue = null; // stores base number before switching
function toggleExponential() {
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
function calculateReciprocal() {
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
export function calculateEpowX() {
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
export function calculateCube() {
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
export function calculateCbrt() {
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
export function calculateYRoot() {
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
export function calculateTwoPowerX() {
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
export function calculateLn() {
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
export function calculateSqrt() {
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
export function calculateSquare() {
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
window.calculateAbs = calculateAbs;
window.calculateExp = calculateExp;
window.toggleExponential = toggleExponential;
window.calculateReciprocal = calculateReciprocal;
window.calculateEpowX = calculateEpowX;
window.calculateCube = calculateCube;
window.calculateCbrt = calculateCbrt;
window.calculateYRoot = calculateYRoot;
window.calculateTwoPowerX = calculateTwoPowerX;
window.calculateLogY = calculateLogY;
window.calculateLn = calculateLn;
window.calculateLog = calculateLog;
window.calculateSqrt = calculateSqrt;
window.calculateSquare = calculateSquare;
//# sourceMappingURL=complex-operation.js.map