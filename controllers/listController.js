const knex = require("knex")(require("../knexfile"));

const getList = (req, res) => {
    knex("user_list")
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).send(`Error retrieving lists`);
    });
  };

  const getListItems = (req, res) => {
    knex("user_plants")
      .where({ list_id: req.params.id })
      .join('plant_details', "plant_details.id", "user_plants.plant_id")
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => {
        res.status(400).send(`Error retrieving list items ${err}`);
      });
  };

const postList = (req, res) => {
    console.log(req.body);          
    const list_name = req.body.list_name;
      knex('user_list')
      .insert({list_name})
      .then(([listId]) => {
        // Use the generated list ID to insert the items into the "items" table
        const plants = req.body.plants.map(plant => {
            return {plant_id: plant.id, list_id:listId}
        });
        knex('user_plants')
          .insert(plants)
          .then((response) => {
        console.log(response)
        res.status(200).json(response)
        })
      .catch(err => {
        console.error(err);
        res.sendStatus(500);
        });
  })};

module.exports = {
    getList,
    getListItems,
    postList
    };