const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extende: true }));
var port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/Route1", (req, res) => {
  res.send("<h1>la tahzan ..</h1>");
});

app.get("/Route2", (req, res) => {
  const nom = req.body.nom;
  res.send("<h1>la tahzan ..ya</h1>" + nom);
});

app.get("/Route3", (req, res) => {
  const x = parseFloat(req.body.x);
  const y = parseFloat(req.body.y);
  if (!isNaN(x) && !isNaN(y)) {
    const s = x + y;
    res.status(200).send(`la somme de ${x} et  ${y} veut  ${s}`);
  } else {
    res.status(400).send("veuiller enter des nomber");
  }
});

app.listen(3000, () => {
  console.log(`the server is listening on ${port}`);
});
