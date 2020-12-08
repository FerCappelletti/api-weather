const { Schema, model } = require("mongoose");

const citySchema = new Schema(
  {
    name: String,
    coord: {
      lon: String,
      lat: String,
    },
    main: {
      temp: String,
      temp_min: String,
      temp_max: String,
      pressure: String,
      humidity: String,
    },
  }
);

module.exports = model("City", citySchema);
