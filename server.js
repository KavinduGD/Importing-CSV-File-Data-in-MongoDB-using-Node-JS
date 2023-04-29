const express = require("express");
const dotenv = require("dotenv").config();
const connectDb = require("./config/db");
const router = require("./routes/userRoutes.js");

// Create express app
const app = express();

app.use("/api/users", router);

connectDb();
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
