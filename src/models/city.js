const { Schema, model } = require("mongoose");

const citySchema = new Schema(
  {
    name: String,
    coord: {
      lon: Number,
      lat: Number,
    },
    main: {
      temp: Number,
      temp_min: Number,
      temp_max: Number,
      pressure: Number,
      humidity: Number,
    },
  }
);

module.exports = model("City", citySchema);
