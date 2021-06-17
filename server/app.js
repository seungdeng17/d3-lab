const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

const { sample01 } = require("./data");

app.get("/api/sample01", (req, res) => {
  return res.status(200).json({ data: sample01 });
});

const PORT = 3001;

app.listen(PORT, function () {
  console.log("\nExpress server has started on port " + PORT + "\n");
});
