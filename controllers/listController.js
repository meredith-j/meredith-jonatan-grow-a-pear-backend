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

const postList = (req, res) => {
    console.log(req.body);          
    const list_name = req.body.list_name;
      knex('user_list')
      .insert({list_name})
      .then(([listId]) => {
        // Use the generated list ID to insert the items into the "items" table
        const plants = req.body.plants.map(plant => {
          plant.id
        });
        knex('user_plants')
          .insert({list_id:listId, plant_id:id})
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
    postList
    };