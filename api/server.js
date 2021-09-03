// server configs
const express = require("express");
const app = express();
const db = require("./db/index");
const Sequelize = require("sequelize");
const cookieParser = require("cookie-parser");
const sessions = require("express-session");
const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const Favs = require("./models/Favs");
const Users = require("./models/Users");
const routes = require("./routes");

app.use(express.json());
app.use(cookieParser());

app.use(sessions({ secret: "omdb", resave: true, saveUninitialized: true }));
passport.use(
  new localStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    function (email, password, done) {
      Users.findOne({ where: { email } })
        .then((users) => {
          if (!users) return done("email invalido", false);
          users.hash(password, users.salt).then((hash) => {
            if (hash !== users.password) {
              return done("password invalida", false);
            }
            return done(null, users);
          });
        })
        .catch((err) => {
          done(err);
        });
    }
  )
);
app.use(passport.initialize());
app.use(passport.session());


passport.serializeUser(function (users, done) {
  done(null, users.id);
});
passport.deserializeUser(function (id, done) {
  Users.findByPk(id)
    .then((users) => {
      done(null, users);
    })
    .catch(done);
});

app.use("/api", routes);

db.sync({ force: false})
  .then(() => {
    app.listen(3001, () => {
      console.log("Escuchando en el puerto 3001");
    });
  })
  .catch((err) => console.log(err));
