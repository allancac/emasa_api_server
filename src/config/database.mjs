import config from 'config';

export default {
    dialect: 'postgres',
    host: config.get('database.host'),
    username: config.get('database.user'),
    password: config.get('database.password'),
    database: 'emasa',
    define: {
        timestamps: true
    }

}