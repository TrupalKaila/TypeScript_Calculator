let memoryStack: number[] = [];
// Show History or Memory
function showSection(section: string): void {
    const historybtn = document.getElementById('historySection');
    const memorybtn = document.getElementById('memorySection');
    if (!historybtn || !memorybtn) return;

    historybtn.classList.add('d-none');
    memorybtn.classList.add('d-none');

    if (section === 'history') {
        historybtn.classList.remove('d-none');
    } else if (section === 'memory') {
        memorybtn.classList.remove('d-none');
        renderMemory(); // update memory display when opened
    }
}

// MS – Store to memory stack
function memoryStore(): void {
    const input = document.getElementById('calculations') as HTMLInputElement | null;
    if (!input) return;

    const value = parseFloat(input.value);
    if (!isNaN(value)) {
        memoryStack.push(value);
        localStorage.setItem('memoryStack', JSON.stringify(memoryStack));
        renderMemory();
    }
}

// MR – Recall last memory
function memoryRecall(): void {
    const input = document.getElementById('calculations') as HTMLInputElement | null;
    if (!input || memoryStack.length === 0) return;

    const lastValue: number = memoryStack[memoryStack.length - 1] ?? 0;
    input.value = lastValue.toString();
}

// MC – Clear all memory
function memoryClear(): void {
    memoryStack = [];
    localStorage.removeItem('memoryStack');
    renderMemory();
}

function memoryAdd(): void {
    const input = document.getElementById('calculations') as HTMLInputElement | null;
    if (!input || memoryStack.length === 0) return;

    const val = parseFloat(input.value);
    if (!isNaN(val)) {
        const lastIndex = memoryStack.length - 1;
        const lastValue = memoryStack[lastIndex] ?? 0;
        memoryStack[lastIndex] = lastValue + val;

        localStorage.setItem('memoryStack', JSON.stringify(memoryStack));
        renderMemory();
    }
}

// M- – Subtract from last memory value
function memorySubtract(): void {
    const input = document.getElementById('calculations') as HTMLInputElement | null;
    if (!input || memoryStack.length === 0) return;

    const val = parseFloat(input.value);
    if (!isNaN(val)) {
        const lastIndex = memoryStack.length - 1;
        const lastValue = memoryStack[lastIndex] ?? 0;
        memoryStack[lastIndex] = lastValue + val;
        localStorage.setItem('memoryStack', JSON.stringify(memoryStack));
        renderMemory();
    }
}

// Render memory values in UI
function renderMemory(): void {
    const list = document.getElementById('memoryList');
    const display = document.getElementById('memoryDisplay');

    if (!list || !display) return;

    list.innerHTML = '';

    memoryStack.forEach((val, index) => {
        const li = document.createElement('li');
        li.textContent = `M${index + 1}: ${val}`;
        list.appendChild(li);
    });

    const lastIndex = memoryStack.length - 1;
    const lastValue: number = lastIndex >= 0 ? (memoryStack[lastIndex] ?? 0) : 0;
    display.textContent = lastValue.toString();

}


// History clear
function clearHistory(): void {
    const historyList = document.getElementById('historyList');
    if (!historyList) return;

    historyList.innerHTML = "";
    localStorage.removeItem('history');
}

// Restore memory on page load
window.onload = (): void => {
    const storedStack = localStorage.getItem('memoryStack');
    if (storedStack) {
        try {
            memoryStack = JSON.parse(storedStack) as number[];
            renderMemory();
        } catch {
            memoryStack = [];
        }
    }
};

(window as any).showSection = showSection;
(window as any).memoryStore = memoryStore;
(window as any).memoryRecall = memoryRecall;
(window as any).memoryClear = memoryClear;
(window as any).memoryAdd = memoryAdd;
(window as any).memorySubtract = memorySubtract;
(window as any).clearHistory = clearHistory;