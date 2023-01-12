const knex = require("knex")(require("../knexfile"));

// const getList = (req, res) => {
//         knex("user_plants")
//         .join('user_list', "user_list.id", "user_plants.list_id")
//         .join("plant_details", "plant_details.id", "user_plants.plants_id")
//         .then((response) => {
//             res.status(200).json(response)
//         })
//   };

const postList = (req, res) => {
    console.log(req.body);

//     knex("user_list")
//     .join("plant_list", "plant_list.list_id", "user_list.id")
//     .where({ plant_id: req.params.id })
//     .where({ name: req.params.name})
//     .then((response) => {
//         res.status(200).json(response)
//     })
//     .catch((err) => {
//         res.status(err).json(response)
//     })
// }
          
    const list_name = req.body.list_name;
      knex('user_list')
      .insert({list_name})
      .then(([listId]) => {
        // Use the generated list ID to insert the items into the "items" table
        const plants = req.body.plants.map(plant => ({
          ...plant,
          plant_id: plant.id,
          list_id: listId
           }));
        return knex('user_plants')
            .insert({plant_id:plants, list_id:listId});
        })
      .then((response) => {
        res.status(200).json(response)
        })
      .catch(err => {
        console.error(err);
        res.sendStatus(500);
        });
  };

module.exports = {
    // getList,
    postList
    };