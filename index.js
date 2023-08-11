/* eslint-disable no-unused-vars */
import {plants} from './plantData.js';

console.log(plants);
/** @type {JQuery<HTMLElement>} */
const elem = $('<div>');

/** Class representing a plant. */
class Plant {
  /**
 * @param {String} commonName
 * @param {String} scientificName
 * @param {String} family
 * @param {String} description
 */
  constructor(commonName, scientificName, family, description) {
    this.commonName = commonName;
    this.scientificName = scientificName;
    this.family = family;
    this.description = description;
  }
}

/*
    <div class="card">
        <span id="common-name"> </span>
        <span id="scientific-name"> </span>
        <span id="family"> </span>
        <p id="description"> </p>
    </div>
*/

// function Initialize() {

// }

// function Create() {
//   const p = new Plant( 'a', 'a', 'a', 'a');
// }

// function Read() {

// }

// function Update() {

// }

// function Delete() {

// }
