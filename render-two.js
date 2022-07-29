function renderCandyTwo(pieceOfCandy) {
    const brandEl = document.createElement('div');
    brandEl.textContent = pieceOfCandy;
    brandEl.classList.add('piece-of-candy');
    return brandEl;
}