const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const currentMusicStatusSchema = new Schema({
  musicId: mongoose.Types.ObjectId,
  currentPosition: Number,
  playing: Boolean,
  lastPlayed: String
});

const CurrentMusicStatus = mongoose.model(
  "currentMusicStatus",
  currentMusicStatusSchema
);
module.exports = CurrentMusicStatus;
