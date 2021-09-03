const express = require("express");
const router = express.Router();
const passport = require("passport")

const Users = require("../models/Users");

router.get("/", (req, res) => {
  Users.findAll(users)
    .then((users) => {
      res.send(users);
    })
    .catch((err) => console.log(err));
});

router.get("/:id", (req, res) => {
  Users.findByPk(req.params.id)
    .then((users) => {
      res.send(users);
    })
    .catch((err) => console.log(err));
});

module.exports = router;
