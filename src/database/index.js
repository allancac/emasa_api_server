import Sequelize from 'sequelize';
import dbConfig from '../config/database.mjs'

const connection = new Sequelize(dbConfig)

export default connection;