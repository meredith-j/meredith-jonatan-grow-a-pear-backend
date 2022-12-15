const express = require("express");
const router = express.Router();
const plantsController = require("../controllers/plantsController");
const getZone = require("../middleware/getZone")

router
    .route("/")
        .post(getZone, plantsController.getPlants)


module.exports = router;