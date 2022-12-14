require("dotenv").config();

const express = require("express");
const app = express();
const fs = require("fs");
const cors = require("cors");
const plantHardinessRoute = require("./routes/plantHardiness.js");
const plantsRoute = require("./routes/plants.js");

const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

// app.use("/plant-hardiness", plantHardinessRoute);
app.use("/plant", plantsRoute);


app.listen(PORT);

