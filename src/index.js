const bodyParser = require("body-parser");
const express = require("express");
const mysql = require("./models.js");
const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({
    respuesta: "ok",
  });
});

app.post("/db", (req, res) => {
  mysql.Observacion.create(req.body)
    .then((response) => {
      console.log(response.toJSON());
      res.json(response.toJSON());
    })
    .catch((response) => {
      res.json(response);
    });
});

app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});
