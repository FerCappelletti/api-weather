const City = require("../models/city");
const Map = require("../services/map");

const getInitialData = async (req, res) => {
  
  const cities = await City.find();
  let n = Math.floor(Math.random() * cities.length);
  const city = cities[n];
  res.json(city);
};

const getOneByName = async (req, res) => {
  const city = await City.find({ name: req.params.name });
  res.json(city);
};

const getAllData = async (req, res) => {
  const cities = await City.find();

  res.json(cities);
};

module.exports = {
  getInitialData,
  getOneByName,
  getAllData,
};
