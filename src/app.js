const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const city_routes = require("./routes/city");


//settings
app.set("port", process.env.PORT || 3000);

app.get("/", (req, res) => {
  res.send("Ok");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Max-Age", "1800");
  res.setHeader("Access-Control-Allow-Headers", "content-type");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "PUT, POST, GET, DELETE, PATCH, OPTIONS"
  );
});
//middlewares
app.use(cors({ origin: "*" }), bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// CORS middleware

//routes
app.use("/city", city_routes);

module.exports = app;
