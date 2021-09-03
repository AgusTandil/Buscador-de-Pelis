const db = require("../db")
const Sequelize = require("sequelize")

class Favs extends Sequelize.Model {}
Favs.init(
  {
    title: {
      type: Sequelize.STRING,
      
     
    },
   content:{
      type: Sequelize.TEXT,
      
    }
   
  },
  { sequelize: db, modelName: "favs" }
);


module.exports = Favs;