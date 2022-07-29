// import functions and grab DOM elements
const candiesListEl = document.getElementById('candies-list');
const candiesListTwoEl = document.getElementById('candies-list-two');

import { candiesTwo } from './candies-data-two.js';
import { candies } from './candies-data.js';
import { renderCandy } from './render-one.js';

// const candyEl = document.createElement('div');

for (let candy of candies) {
    const candyEl = renderCandy(candy);
    candiesListEl.append(candyEl);
}

for (let candyTwo of candiesTwo) {
    const candyTwoEl = document.createElement('div');
    candyTwoEl.textcontent = candyTwo;
    candiesListTwoEl.append(candyTwoEl);
}

function renderCandyTwo(candiesTwo) {};



// initialize global state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state