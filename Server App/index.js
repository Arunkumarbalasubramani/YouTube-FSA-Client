const express = require("express");
const dbConnection = require("./Monogoconnection/Connection");
require("dotenv").config();
const app = express();
dbConnection();
const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Welcome to YouTube App");
});
app.listen(PORT, () => {
  console.log(`App Started and Listening to ${PORT}`);
});
