const multer = require("multer");

const storage = multer.diskStorage({
  //seting the destination of the file
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  //setting the filename
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

//creting a instance of a multer
const upload = multer({
  storage,
});

module.exports = upload;
