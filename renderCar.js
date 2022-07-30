export function renderCar(car) {
    const carContainer = document.createElement('div');
    const makeEl = document.createElement('h1');
    const modelEl = document.createElement('p'); 
    const transmissionEl = document.createElement('p');
    const powertrainEl = document.createElement('p');
    makeEl.textContent = car.make;
    modelEl.textContent = car.model;
    transmissionEl.textContent = car.options.transmission;
    powertrainEl.textContent = car.options.powertrain;
    carContainer.append(makeEl, modelEl, transmissionEl, powertrainEl);
    return carContainer;
}