function calculateAbs(): void {
    const input = document.getElementById('calculations') as HTMLInputElement | null;
    if (!input) return;

    const value: number = parseFloat(input.value);
    if (isNaN(value)) {
        alert("Enter a valid number");
        return;
    }

    const result: number = Math.abs(value);
    input.value = result.toString();
    localStorage.setItem('calculations', result.toString());
}

function calculateExp(): void {
    const input = document.getElementById('calculations') as HTMLInputElement | null;
    if (!input) return;

    const value: number = parseFloat(input.value);
    if (isNaN(value)) {
        alert("Enter a valid number.");
        return;
    }

    const result: string = value.toExponential(5); // Use fixed precision
    input.value = result;
    localStorage.setItem('calculations', result);
}

let isExponential: boolean = false; // tracks current display format
let lastNumericValue: number | null = null; // stores base number before switching

function toggleExponential(): void {
    const input = document.getElementById('calculations') as HTMLInputElement | null;
    if (!input) return;

    const value: string = input.value;

    if (!isExponential) {
        // Convert to exponential if valid number
        const num = parseFloat(value);
        if (!isNaN(num) && value !== "") {
            lastNumericValue = num;
            input.value = num.toExponential(5);
            isExponential = true;
        }
    } else {
        // Revert to standard format
        if (lastNumericValue !== null) {
            input.value = lastNumericValue.toString();
            isExponential = false;
        }
    }

    localStorage.setItem('calculations', input.value);
}

function calculateReciprocal(): void {
    const input = document.getElementById('calculations') as HTMLInputElement | null;
    if (!input) return;

    const value: number = parseFloat(input.value);
    if (isNaN(value) || value === 0) {
        alert("Invalid input for reciprocal");
        return;
    }

    const result: number = 1 / value;
    input.value = result.toString();
    localStorage.setItem('calculations', result.toString());
}
export function calculateEpowX(): void {
    const input = document.getElementById('calculations') as HTMLInputElement | null;
    if (!input) return;

    const value: number = parseFloat(input.value);
    if (isNaN(value)) {
        alert("Enter a valid number.");
        return;
    }

    const result: number = Math.exp(value); // e^x
    input.value = result.toString();
    localStorage.setItem('calculations', result.toString());
}

export function calculateCube(): void {
    const input = document.getElementById('calculations') as HTMLInputElement | null;
    if (!input) return;

    const value: number = parseFloat(input.value);
    if (isNaN(value)) {
        alert("Invalid input for cube");
        return;
    }

    const result: number = Math.pow(value, 3);
    input.value = result.toString();
    localStorage.setItem('calculations', result.toString());
}

export function calculateCbrt(): void {
    const input = document.getElementById('calculations') as HTMLInputElement | null;
    if (!input) return;

    const value: number = parseFloat(input.value);
    if (isNaN(value)) {
        alert("Invalid input for cube root");
        return;
    }

    const result: number = Math.cbrt(value);
    input.value = result.toString();
    localStorage.setItem('calculations', result.toString());
}

export function calculateYRoot(): void {
    const input = document.getElementById('calculations') as HTMLInputElement | null;
    if (!input) return;

    const x: number = parseFloat(input.value);
    const yRaw: string | null = prompt("Enter root degree (y):");
    const y: number = yRaw !== null ? parseFloat(yRaw) : NaN;

    if (isNaN(x) || isNaN(y) || y === 0) {
        alert("Invalid input for y√x");
        return;
    }

    const result: number = Math.pow(x, 1 / y);
    input.value = result.toString();
    localStorage.setItem('calculations', result.toString());
}

export function calculateTwoPowerX(): void {
    const input = document.getElementById('calculations') as HTMLInputElement | null;
    if (!input) return;

    const x: number = parseFloat(input.value);
    if (isNaN(x)) {
        alert("Invalid input for 2^x");
        return;
    }

    const result: number = Math.pow(2, x);
    input.value = result.toString();
    localStorage.setItem('calculations', result.toString());
}

export function calculateLogY(): void {
    const input = document.getElementById('calculations') as HTMLInputElement | null;
    if (!input) return;

    const x: number = parseFloat(input.value);
    const yRaw: string | null = prompt("Enter base (y):");
    const y: number = yRaw !== null ? parseFloat(yRaw) : NaN;

    if (isNaN(x) || isNaN(y) || y <= 0 || x <= 0) {
        alert("Invalid input for logy(x)");
        return;
    }

    const result: number = Math.log(x) / Math.log(y);
    input.value = result.toString();
    localStorage.setItem('calculations', result.toString());
}


export function calculateLn(): void {
    const input = document.getElementById('calculations') as HTMLInputElement | null;
    if (!input) return;
    let value = parseFloat(input.value);
    if (isNaN(value) || value <= 0) {
        alert("Invalid input for ln");
        return;
    }
    let result = Math.log(value);
    input.value = result.toString();
    localStorage.setItem('calculations', result.toString());
}

export function calculateLog(): void {
    const input = document.getElementById('calculations') as HTMLInputElement | null;
    if (!input) return;

    const value: number = parseFloat(input.value);
    if (isNaN(value) || value <= 0) {
        alert("Invalid input for log");
        return;
    }

    const result: number = Math.log10(value);
    input.value = result.toString();
    localStorage.setItem('calculations', result.toString());
}

export function calculateSqrt(): void {
    const input = document.getElementById('calculations') as HTMLInputElement | null;
    if (!input) return;

    const value: number = parseFloat(input.value);
    if (isNaN(value) || value < 0) {
        alert("Invalid input for square root");
        return;
    }

    const result: number = Math.sqrt(value);
    input.value = result.toString();
    localStorage.setItem('calculations', result.toString());
}

export function calculateSquare(): void {
    const input = document.getElementById('calculations') as HTMLInputElement | null;
    if (!input) return;

    const value: number = parseFloat(input.value);
    if (isNaN(value)) {
        alert("Invalid input for square");
        return;
    }

    const result: number = value * value;
    input.value = result.toString();
    localStorage.setItem('calculations', result.toString());
}

(window as any).calculateAbs = calculateAbs;
(window as any).calculateExp = calculateExp;
(window as any).toggleExponential = toggleExponential;
(window as any).calculateReciprocal = calculateReciprocal;
(window as any).calculateEpowX = calculateEpowX;
(window as any).calculateCube = calculateCube;
(window as any).calculateCbrt = calculateCbrt;
(window as any).calculateYRoot = calculateYRoot;
(window as any).calculateTwoPowerX = calculateTwoPowerX;
(window as any).calculateLogY = calculateLogY;
(window as any).calculateLn = calculateLn;
(window as any).calculateLog = calculateLog;
(window as any).calculateSqrt = calculateSqrt;
(window as any).calculateSquare = calculateSquare;