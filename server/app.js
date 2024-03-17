const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');

// config dotenv 
dotenv.config({ path: "./config/config.env" });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// duas 
const dua = require("./routers/duaRouter");

app.use("/api/v1", dua);



module.exports = app;