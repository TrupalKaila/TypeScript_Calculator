import { number } from "mathjs";
let memoryStack = [];
// Show History or Memory
function showSection(section) {
    const historybtn = document.getElementById('historySection');
    const memorybtn = document.getElementById('memorySection');
    if (!historybtn || !memorybtn)
        return;
    historybtn.classList.add('d-none');
    memorybtn.classList.add('d-none');
    if (section === 'history') {
        historybtn.classList.remove('d-none');
    }
    else if (section === 'memory') {
        memorybtn.classList.remove('d-none');
        renderMemory(); // update memory display when opened
    }
}
// MS – Store to memory stack
function memoryStore() {
    const input = document.getElementById('calculations');
    if (!input)
        return;
    const value = parseFloat(input.value);
    if (!isNaN(value)) {
        memoryStack.push(value);
        localStorage.setItem('memoryStack', JSON.stringify(memoryStack));
        renderMemory();
    }
}
// MR – Recall last memory
function memoryRecall() {
    var _a;
    const input = document.getElementById('calculations');
    if (!input || memoryStack.length === 0)
        return;
    const lastValue = (_a = memoryStack[memoryStack.length - 1]) !== null && _a !== void 0 ? _a : 0;
    input.value = lastValue.toString();
}
// MC – Clear all memory
function memoryClear() {
    memoryStack = [];
    localStorage.removeItem('memoryStack');
    renderMemory();
}
export function memoryAdd() {
    var _a;
    const input = document.getElementById('calculations');
    if (!input || memoryStack.length === 0)
        return;
    const val = parseFloat(input.value);
    if (!isNaN(val)) {
        const lastIndex = memoryStack.length - 1;
        const lastValue = (_a = memoryStack[lastIndex]) !== null && _a !== void 0 ? _a : 0;
        memoryStack[lastIndex] = lastValue + val;
        localStorage.setItem('memoryStack', JSON.stringify(memoryStack));
        renderMemory();
    }
}
// M- – Subtract from last memory value
function memorySubtract() {
    var _a;
    const input = document.getElementById('calculations');
    if (!input || memoryStack.length === 0)
        return;
    const val = parseFloat(input.value);
    if (!isNaN(val)) {
        const lastIndex = memoryStack.length - 1;
        const lastValue = (_a = memoryStack[lastIndex]) !== null && _a !== void 0 ? _a : 0;
        memoryStack[lastIndex] = lastValue + val;
        localStorage.setItem('memoryStack', JSON.stringify(memoryStack));
        renderMemory();
    }
}
// Render memory values in UI
function renderMemory() {
    var _a;
    const list = document.getElementById('memoryList');
    const display = document.getElementById('memoryDisplay');
    if (!list || !display)
        return;
    list.innerHTML = '';
    memoryStack.forEach((val, index) => {
        const li = document.createElement('li');
        li.textContent = `M${index + 1}: ${val}`;
        list.appendChild(li);
    });
    const lastIndex = memoryStack.length - 1;
    const lastValue = lastIndex >= 0 ? ((_a = memoryStack[lastIndex]) !== null && _a !== void 0 ? _a : 0) : 0;
    display.textContent = lastValue.toString();
}
// History clear
function clearHistory() {
    const historyList = document.getElementById('historyList');
    if (!historyList)
        return;
    historyList.innerHTML = "";
    localStorage.removeItem('history');
}
// Restore memory on page load
window.onload = () => {
    const storedStack = localStorage.getItem('memoryStack');
    if (storedStack) {
        try {
            memoryStack = JSON.parse(storedStack);
            renderMemory();
        }
        catch (_a) {
            memoryStack = [];
        }
    }
};
//# sourceMappingURL=memory.js.map