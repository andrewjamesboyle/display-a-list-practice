export function renderBand(anyBand) {
    const bandContainerEl = document.createElement('div');
    const nameEl = document.createElement('div');
    const stageEl = document.createElement('p');
    nameEl.textContent = `Band Name: ${anyBand.name}`;
    stageEl.textContent = `Stage: ${anyBand.stage}`;

    for (let genre of anyBand.genres) {
        const genreEl = document.createElement ('p');
        genreEl.textContent = `Genre: ${genre}`;
        bandContainerEl.append(genreEl);
    }
    
    bandContainerEl.append(nameEl, stageEl);
    bandContainerEl.classList.add('band-item');
    return bandContainerEl;
}
