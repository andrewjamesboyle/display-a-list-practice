export function renderBand(anyBand) {
    const bandContainerEl = document.createElement('div');
    const nameEl = document.createElement('p');
    const stageEl = document.createElement('p');
    const genreEl = document.createElement ('div');
    nameEl.textContent = anyBand.name;
    stageEl.textContent = anyBand.stage;
    genreEl.textContent = anyBand.genre[0, 1, 2];
    bandContainerEl.append(nameEl, stageEl, genreEl);
    return bandContainerEl;
}