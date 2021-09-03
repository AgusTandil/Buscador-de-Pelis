const db = require("../db");
const Sequelize = require("sequelize");
const bcrypt = require("bcrypt");

class Users extends Sequelize.Model {
  hash(password, salt) {
    return bcrypt.hash(password, salt);
  }
}
Users.init(
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    salt: {
      type: Sequelize.STRING,
    },
  },
  { sequelize: db, modelName: "users" }
);

Users.beforeCreate((users) => {
  return bcrypt
    .genSalt(16)
    .then((salt) => {
      users.salt = salt;
      return users.hash(users.password, salt);
    })
    .then((hash) => {
      users.password = hash;
    });
});

module.exports = Users;
