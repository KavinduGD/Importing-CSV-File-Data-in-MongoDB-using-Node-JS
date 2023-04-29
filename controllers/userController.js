const controller = (req, res) => {
  res.send("Hello from controller");
};

//

//

const uploadController = (req, res) => {
  res.send("Hello from uploadController");
};

module.exports = { controller, uploadController };
