const knex = require("knex")(require("../knexfile"));

const getPlants = (req, res) => {
        knex("plant_details")
        .join('perrennial_zones', "perrennial_zones.plant_id", "plant_details.id")
        .join("sun_exposure", "sun_exposure.plant_id", "plant_details.id")
        .where( req.zone, 1 )
        .where( req.body.sunlight, 1 )
        .then((response) => {
            res.status(200).json(response)
        })
  };

module.exports = {
    getPlants
    };