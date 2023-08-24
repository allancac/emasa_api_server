const Sequelize = require('sequelize')
const process = require('process');
const env = process.env.NODE_ENV;
const dbconfig = require('../../config/config.json')[env];

const Usuario = require('../models/Usuario')

const connection = new Sequelize(dbconfig)

Usuario.init(connection);

module.exports = connection;