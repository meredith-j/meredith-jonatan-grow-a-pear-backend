const express = require("express");
const router = express.Router();
const listController = require("../controllers/listController");

router
    .route("/list")
        // .get(listController.getList)
        .post(listController.postList);


module.exports = router;