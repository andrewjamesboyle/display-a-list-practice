const candiesListEl = document.getElementById('candies-list');
const bikesListEl = document.getElementById('bikes-list');
const carListEl = document.getElementById('car-list');
const bandsListEl = document.getElementById('band-list');

import { bikes } from './bikes-data.js';
import { candies } from './candies-data.js';
import { renderCandy } from './renderCandy.js';
import { renderBike } from './renderBike.js';
import { cars } from './car-data.js';
import { renderCar } from './renderCar.js';
import { bands } from './bands-data.js';
import { renderBand } from './renderBand.js';

for (let candy of candies) {
    const candyEl = renderCandy(candy);
    candiesListEl.append(candyEl);
    candiesListEl.classList.add('candies');
}

for (let bike of bikes) {
    const bikeBrandEl = renderBike(bike);
    bikesListEl.append(bikeBrandEl);
    bikesListEl.classList.add('bikes');
}

for (let car of cars) {
    const carEl = renderCar(car);
    carListEl.append(carEl);
    carListEl.classList.add('cars');
}

for (let band of bands) {
    const bandsEl = renderBand(band);
    bandsListEl.append(bandsEl);
    bandsListEl.classList.add('bands');
}