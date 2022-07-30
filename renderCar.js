export function renderCar(car) {
    const carContainer = document.createElement('div');
    const makeEl = document.createElement('h1');
    const modelEl = document.createElement('p'); 
    const transmissionEl = document.createElement('p');
    const powertrainEl = document.createElement('p');
    makeEl.textContent = car.make;
    modelEl.textContent = `Model Name: ${car.model}`;
    transmissionEl.textContent = `Transmission: ${car.options.transmission}`;
    powertrainEl.textContent = `Transmission: ${car.options.powertrain}`;
    carContainer.append(makeEl, modelEl, transmissionEl, powertrainEl);
    carContainer.classList.add('car-item');
    return carContainer;
}