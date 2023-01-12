require("dotenv").config();

const express = require("express");
const app = express();
const fs = require("fs");
const cors = require("cors");
const plantsRoute = require("./routes/plants.js");
const listRoute = require("./routes/plantList.js");

const PORT = process.env.PORT || 8080;

app.use(express.static('public'));
app.use(cors());
app.use(express.json());

app.use("/plant", plantsRoute);
app.use("/list", listRoute);


app.listen(PORT);

