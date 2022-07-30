export function renderBike(anyBike) {
    const bikeContainerEl = document.createElement('div');
    const bikeBrandEl = document.createElement('p');
    const bikeModelEl = document.createElement('p');
    const bikeCategoryEl = document.createElement('p');
    bikeContainerEl.append(bikeBrandEl, bikeModelEl, bikeCategoryEl);
    bikeBrandEl.textContent = `Brand: ${anyBike.brand}`;
    bikeModelEl.textContent = `Model: ${anyBike.model}`;
    bikeCategoryEl.textContent = `Category: ${anyBike.category}`;
    bikeContainerEl.classList.add('bike-item');
    return bikeContainerEl;
}