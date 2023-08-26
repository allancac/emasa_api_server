const { Sequelize } = require("sequelize");
const process = require("process");
const env = process.env.NODE_ENV;
const dbconfig = require("../../config/config.json")[env];
const Usuario = require("../models/Usuario")

const sequelize = new Sequelize(dbconfig);

Usuario.init(sequelize);


module.exports = sequelize;