const Audio = require("../models/audio");
const { getAudioDurationInSeconds } = require("get-audio-duration");
const NodeID3 = require("node-id3");
const mongoose = require("mongoose");

const ObjectId = require("mongodb").ObjectID;
const Joi = require("joi");

//promise
module.exports = {
  //VALIDATION:DONE
  index: async (req, res, next) => {
    res.json("home");
    console.log("oksy");
  },
  upload: async (req, res, next) => {
    console.log("db saving");

    try {
      let pic = [];
      // req.files.map(each => pic.push({ url: each.path })); //each.path for local ,each.location for aws s3
      // console.log(pic);
      let path = req.file.path;
      //saving duration in db
      let duration = await getAudioDurationInSeconds(path);
      let tempAudio = {
        url: req.file.filename,
        title: req.body.title,
        cover: "default.jpg",
        duration: Math.floor(duration),
        artist: req.body.artist
      };
      let newBike = new Audio(tempAudio);
      await newBike.save();
      res.status(200).json("saved!!");
    } catch (e) {
      res.status(400).json(e);
    }
    //VALIDATION:DONE
  },
  getAudio: async (req, res, next) => {
    try {
      const result = await Audio.find();
      console.log("result", result);
      res.status(200).json(result);
    } catch (error) {
      console.log(error);
    }
  },
  getSelectedAudio: async (req, res, next) => {
    try {
      let id = req.body.id;
      // id = ObjectId(id);

      const result = await Audio.find({
        _id: mongoose.Types.ObjectId(id)
      });
      console.log("result", result, id);
      res.status(200).json(result);
    } catch (e) {
      console.log(e);
    }
  }
};

//VALIDATION:DONE

//VALIDATION:DONE

//VALIDATION:DONE

//VALIDATION:DONE
