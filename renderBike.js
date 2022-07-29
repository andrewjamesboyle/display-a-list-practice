export function renderBike(anyBike) {
    const bikeContainerEl = document.createElement('div');
    const bikeBrandEl = document.createElement('p');
    const bikeModelEl = document.createElement('p');
    const bikeCategoryEl = document.createElement('p');
    bikeContainerEl.append(bikeBrandEl, bikeModelEl, bikeCategoryEl);
    bikeBrandEl.textContent = anyBike.brand;
    bikeModelEl.textContent = anyBike.model;
    bikeCategoryEl.textContent = anyBike.category;
    return bikeContainerEl;
}