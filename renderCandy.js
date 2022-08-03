export function renderCandy(candy) {
    const candiesEl = document.createElement('div');
    candiesEl.textContent = `Brand: ${candy}`;
    candiesEl.classList.add('candy');
    return candiesEl;   
}