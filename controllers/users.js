const Audio = require("../models/audio");

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
      console.log("files", req.files[0].filename);
      // req.files.map(each => pic.push({ url: each.path })); //each.path for local ,each.location for aws s3
      // console.log(pic);

      let tempAudio = {
        url: req.files[0].filename,
        title: req.body.title,
        cover: "default.jpg",
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
  }
};

//VALIDATION:DONE

//VALIDATION:DONE

//VALIDATION:DONE

//VALIDATION:DONE
