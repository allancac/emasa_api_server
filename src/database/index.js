import  { Sequelize } from "sequelize";
import process from "process";
import config from "../../config/config.json";
import  Usuario from "../models/Usuario"

const env = process.env.NODE_ENV;
const dbconfig = config[env]

const sequelize = new Sequelize(dbconfig);

Usuario.init(sequelize);


export default sequelize;