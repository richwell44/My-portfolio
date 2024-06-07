const express = require("express");

const app = express();

app.use(express.static("./public"));

// 404
app.all("*", (req, res) => {
  res.status(404).send("<h1>Opps page not found ;(</h1>");
});

// listen for port
app.listen(5005, () => {});
