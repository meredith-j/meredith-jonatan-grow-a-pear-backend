const knex = require("knex")(require("../knexfile"));
const { v4: uuidv4 } = require("uuid");

const getPlants = (req, res) => {
    res.json({status:"ok",
              body: req.body,
              zone: req.zone})
    // knex("______")
    //   .join("plant_details", "perrennial_zones", "sun_exposure")
    //   .select(
    //     "plant_details.id",
    //     "perrennial_zones.zone"
    //   )
    //   .then((data) => {
    //     res.status(200).json(data);
    //   })
    //   .catch((err) => {
    //     res.status(400).send(`Error retrieving inventory items ${err}`);
    //   });
  };

module.exports = {
    getPlants
    };