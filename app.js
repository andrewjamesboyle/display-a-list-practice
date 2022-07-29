// import functions and grab DOM elements
const candiesListEl = document.getElementById('candies-list');
const bikesListEl = document.getElementById('bikes-list');

import { bikes } from './bikes-data.js';
import { candies } from './candies-data.js';
import { renderCandy } from './renderCandy.js';
import { renderBike } from './renderBike.js';

// const candyEl = document.createElement('div');

for (let candy of candies) {
    const candyEl = renderCandy(candy);
    candiesListEl.append(candyEl);
}

for (let bike of bikes) {
    const bikeBrandEl = renderBike(bike);
    bikesListEl.append(bikeBrandEl);
}

console.log(bikesListEl);

// initialize global state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state