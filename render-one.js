export function renderCandy(candy) {
    const candiesEl = document.createElement('div');
    candiesEl.textContent = candy;
    return candiesEl;
}