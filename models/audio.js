const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const audioSchema = new Schema({
  url: String,
  cover: String,
  title: String,
  artist: Array
});

const Audio = mongoose.model("audio", audioSchema);
module.exports = Audio;
