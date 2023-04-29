const express = require("express");
const router = express.Router();
const {
  controller,
  uploadController,
} = require("../controllers/userController.js");

const upload = require("../config/multer.js");

router.post("/uploadAll", upload.single("file"), uploadController);

router.get("/", controller);

module.exports = router;
