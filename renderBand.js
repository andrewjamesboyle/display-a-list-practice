export function renderBand(anyBand) {
    const bandContainerEl = document.createElement('div');
    const nameEl = document.createElement('div');
    const stageEl = document.createElement('p');
    const genreEl = document.createElement ('p');
    nameEl.textContent = `Band Name: ${anyBand.name}`;
    stageEl.textContent = `Stage: ${anyBand.stage}`;
    genreEl.textContent = `Genre: ${anyBand.genre[0]}, ${anyBand.genre[1]}, ${anyBand.genre[2]}`;
    bandContainerEl.append(nameEl, stageEl, genreEl);
    bandContainerEl.classList.add('band-item');
    return bandContainerEl;
}