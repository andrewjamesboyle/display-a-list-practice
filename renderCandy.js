export function renderCandy(candy) {
    const candiesEl = document.createElement('div');
    candiesEl.textContent = `Brand: ${candy}`;
    return candiesEl;   
}