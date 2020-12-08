const express = require("express");
const api = express.Router();
const cityController = require("../controllers/city");

api.get("/", cityController.getInitialData);
api.get("/all", cityController.getAllData);
api.get("/find/:name", cityController.getOneByName);


module.exports = api;
