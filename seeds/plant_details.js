/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

const plantDetailsData = require('../seed_data/plantDetailsData');
const sunExposureData = require('../seed_data/sunExposureData');
const perrennialData = require('../seed_data/perrennialData');

exports.seed = function(knex) {
    return knex('plant_details')
    .del()
    .then(function () {
      return knex('plant_details').insert(plantDetailsData);
    })
    .then(() => {
      return knex('perrennial_zones').del();
    })
    .then(() => {
      return knex('perrennial_zones').insert(perrennialData);
    })
    .then(() => {
      return knex('sun_exposure').del();
    })
    .then(() => {
      return knex('sun_exposure').insert(sunExposureData);
    });
};