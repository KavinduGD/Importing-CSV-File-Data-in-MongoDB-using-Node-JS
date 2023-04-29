const controller = (req, res) => {
  res.send("Hello from controller");
};

//
const csv = require("csvtojson");
const User = require("../models/userModel");
const fs = require("fs");

const uploadController = async (req, res) => {
  const jsonArray = await csv().fromFile(req.file.path);
  const result = User.insertMany(jsonArray);

  if (!result) {
    return res.status(500).send("Could not add data to the database");
  }

  // remove the file after processing
  fs.unlink(req.file.path, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`File ${req.file.filename} has been removed`);
  });

  res.json(jsonArray);
};

module.exports = { controller, uploadController };
