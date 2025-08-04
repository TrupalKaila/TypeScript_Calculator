import { calculate } from './calculator';
import { clearCalc } from './calculator';
import { renderHistory } from './calculator';

export let flag: number = 0;
export function pressKey(char: string): void {
    const input = document.getElementById('calculations') as HTMLInputElement | null;
    const operators: string[] = ['+', '-', '*', '/'];

    //This will check input string is empty or not.
    if (!input) return;

    let current: string = input.value;

    // Handle pi
    if (char === 'pi') {
        if (current == "0" && flag == 0) {
            current = Math.PI.toString();
            flag++;
        }
        else if (flag == 0) {
            current += Math.PI.toString();
            flag++
        }
    }
    if (char == 'e') {
        current = Math.E.toString();
    }
    // If input is 0 and user presses a number
    else if (current === "0" && !operators.includes(char)) {
        current = char;
    }
    // If last character is an operator and user presses another operator
    else if (operators.includes(current.slice(-1)) && operators.includes(char)) {
        current = current.slice(0, -1) + char; // Replace last operator
    }

    else {
        current += char; // Otherwise append
    }

    input.value = current;
    localStorage.setItem('calculations', current);
}

function backspaceKey() {
    const input = document.getElementById('calculations') as HTMLInputElement | null;

    if (!input) return;
    let current: string = input.value;

    // Remove last character
    current = current.slice(0, -1);

    // If empty after delete, set to 0
    if (current === "") current = "0";

    input.value = current;
    localStorage.setItem('calculations', current);
}


document.addEventListener('keydown', function (event) {
    const validKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '(', ')', '.'];

    if (validKeys.includes(event.key)) {
        pressKey(event.key);
    } else if (event.key === 'Backspace') {
        backspaceKey();
    } else if (event.key === 'Enter' || event.key === '=') {
        calculate();
    } else if (event.key === 'Escape') {
        clearCalc();
    }
});


function clearHistory() {
    localStorage.removeItem('history');
    renderHistory();
}
