const express = require("express");
const router = express.Router();
const Users = require("../models/Users");
const passport = require("passport");

router.post("/register", (req, res) => {
  Users.create(req.body)
    .then((users) => res.status(201).send(users))
    .catch((err) => console.log(err));
});

router.post("/login", passport.authenticate("local"), (req, res) => {
  console.log(req.user)
  res.send(req.user);
});

/* router.get("/secret", (req, res) => {
  if (req.users) {
    res.send("Login success");
  } else {
    res.sendStatus(401);
  }
}); */

router.post("/logout", (req, res) => {
  req.logOut();
  res.sendStatus(200);
});

router.get("/me", (req, res) => {
  if (req.user) {
    console.log("ACA LLEGA EM ME", req.user)
    res.send(req.user);
  } else {
    res.sendStatus(401);
  }
});


module.exports = router;
