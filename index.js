const express = require("express");
var cors = require("cors");
const sounds = require("./sounds.json");

const app = express();
app.use(cors());
app.use(express.static("public"));

app.get("/list", (req, res) => {
  res.json(sounds);
});

app.listen(8080, () => {
  console.log(`Example app listening on port ${8080}`);
});
