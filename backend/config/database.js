import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();
// console.log('DB from .env =>', process.env.DB_HOST, process.env.DB_PORT, process.env.DB_NAME, process.env.DB_USER);
const sequelize = new Sequelize(
);

export { sequelize };

