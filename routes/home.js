const express = require("express");
const router = express.Router();
const userController = require("../controllers/users");
const multer = require("multer");

/**local storage */
const storage = multer.diskStorage({
  destination: "./public",
  filename(req, file, cb) {
    cb(null, `${file.originalname}`);
  }
});
// console.log("storage", storage);

const uploadAudio = multer({ storage });

const {
  validateParam,
  validateBody,
  schemas
} = require("../helpers/routeHelpers");

router.route("/").get(userController.index);
router.route("/upload").post(uploadAudio.single("file"), userController.upload);
router.route("/getAudio").get(userController.getAudio);
router.route("/getSelectedAudio").post(userController.getSelectedAudio);

module.exports = router;
