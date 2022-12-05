require("dotenv").config();

const express = require("express");
const app = express();
const fs = require("fs");
const cors = require("cors");
const mapRoute = require("./routes/map.js");
const plantHardinessRoute = require("./routes/plantHardiness.js");
const plantsRoute = require("./routes/plants.js");

const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.use("/map", mapRoute);
app.use("/plantHardiness", plantHardinessRoute);
app.use("/plantDetails", plantsRoute);

app.listen(PORT);
