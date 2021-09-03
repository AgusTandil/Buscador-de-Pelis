const express = require("express");
const router = express.Router();

const  Favs = require("../models/Favs");

router.post("/", (req, res) => {
  Favs.create(req.body)
    .then((favs) => res.status(201).json(favs))
    .catch((err) => console.log(err));
});

router.get("/", (req, res) => {
  Favs.findAll(req.body)
    .then((favs) => res.send(favs))
    .catch((err) => console.log(err));
});

router.delete("/:id", (req, res) => {
  Favs.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(() => res.sendStatus(202))
    .catch(err =>  console.log(err));
});

module.exports = router