/* eslint-disable max-len */
import {plants} from './plantData.js';

/** @type {Number} */
let counter = plants.length;

/** @type {bootstrap.Modal} */
const modal = new bootstrap.Modal(document.getElementById('modalEditEntry'));

/** @type {JQuery<HTMLInputElement>} */
const commonNameInput = $('#common-name-input');
/** @type {JQuery<HTMLInputElement>} */
const scientificNameInput = $('#scientific-name-input');
/** @type {JQuery<HTMLInputElement>} */
const familyInput = $('#family-input');
/** @type {JQuery<HTMLInputElement>} */
const descriptionInput = $('#description-input');


const entriesContainer = $('#entries');

const saveBtn = $('#btn-save');

/** @type{ PlantEntry[] } */
let plantEntries = [];

/** Class representing a plant. */
class PlantEntry {
  /**
 * @param {String} commonName
 * @param {String} scientificName
 * @param {String} family
 * @param {String} description
 * @param {Number} id
 */
  constructor(commonName, scientificName, family, description, id) {
    this.commonName = commonName;
    this.scientificName = scientificName;
    this.family = family;
    this.description = description;
    this.id = id;

    const cardRoot = $('<div>').addClass('card');
    const cardBody = $('<div>').addClass('card-body');
    const plantCommonName = $('<span>').addClass('card-title');
    const plantScientificName = $('<span>').addClass('fw-light fst-italic');
    const plantFamily = $('<span>').addClass('card-text fw-bold');
    const plantDescription = $('<p>').addClass('card-text');
    const editBtn = $('<a>').addClass('btn btn-secondary');

    editBtn.text('Edit');

    const deleteBtn = $('<a>').addClass('btn btn-danger');
    deleteBtn.text('Delete');

    cardBody.append(plantCommonName);
    cardBody.append(plantScientificName);
    cardBody.append(plantFamily);
    cardBody.append(plantDescription);

    cardBody.append(editBtn);
    cardBody.append(deleteBtn);

    cardRoot.append(cardBody);
    entriesContainer.append(cardRoot);

    plantCommonName.text('Common Name: '+ this.commonName + ', ');
    plantScientificName.text('Scientific Name: '+this.scientificName + '\n\n');
    plantFamily.text('Plant Family: ' + this.family + '\n\n');
    plantDescription.text('Description: '+ this.description);

    editBtn.on('click', () => {
      commonNameInput.val(this.commonName);
      scientificNameInput.val(this.scientificName);
      familyInput.val(this.family);
      descriptionInput.val(this.description);
      modal.show();

      saveBtn.off('click');
      saveBtn.on('click', () => {
        this.commonName = commonNameInput.val();
        this.scientificName = scientificNameInput.val();
        this.family = familyInput.val();
        this.description = descriptionInput.val();

        plantCommonName.text('Common Name: '+ this.commonName + ', ');
        plantScientificName.text('Scientific Name: '+this.scientificName + '\n\n');
        plantFamily.text('Plant Family: ' + this.family + '\n\n');
        plantDescription.text('Description: '+ this.description);
        modal.hide();
        saveBtn.off('click');
        console.log(plantEntries);
      });
    });

    deleteBtn.on('click', () => {
      // update array here
      plantEntries = plantEntries.filter((entry) => entry.id != this.id);
      cardRoot.remove();
      modal.hide();
      saveBtn.off('click');
      console.log(plantEntries);
    });
  }
}

$('#btn-new-entry').on('click', () =>{
  commonNameInput.val('');
  scientificNameInput.val('');
  familyInput.val('');
  descriptionInput.val('');
  modal.show();

  saveBtn.on('click', () => {
    plantEntries.push(
        new PlantEntry(
            commonNameInput.val(),
            scientificNameInput.val(),
            familyInput.val(),
            descriptionInput.val(),
            counter++));

    console.log(plantEntries);
    modal.hide();
    saveBtn.off('click');
  });
});

plantEntries = plants.map((plant, i) => {
  return new PlantEntry(plant.commonName, plant.scientificName, plant.family, plant.description, i);
});
