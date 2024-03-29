const express = require("express");
const router = express.Router();
const listController = require("../controllers/listController");

router
    .route("/")
        .get(listController.getList)
        .post(listController.postList);

router
    .route("/:id")
        .get(listController.getListItems)

module.exports = router;