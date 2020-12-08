const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const host = process.env.HOST || '0.0.0.0'
const port = process.env.PORT || 3000;
const city_routes = require("./routes/city");


//settings
app.set("port", port);


app.use(cors({ origin: "*" }), bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// CORS middleware

//routes
app.use("/", city_routes);

module.exports = app;
