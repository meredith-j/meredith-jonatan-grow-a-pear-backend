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
    knex("user_list")
    .join("plant_list", "plant_list.list_id", "user_list.id")
    .where({ plant_id: req.params.id })
    .where({ name: req.params.name})
    .then((response) => {
        res.status(200).json(response)
    })
    .catch((err) => {
        res.status(err).json(response)
    })
}

module.exports = {
    // getList,
    postList
    };