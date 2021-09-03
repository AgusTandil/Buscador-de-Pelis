const express = require("express");
const router = express.Router();
const usersRouter = require("./users")
const favsRouter = require("./favs")
const authRouter = require("../routes/auth")
const passport = require("passport")

router.use("/users", usersRouter);
router.use("/favs", favsRouter);
router.use("/auth", authRouter)



module.exports = router;