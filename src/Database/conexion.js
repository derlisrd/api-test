import { Sequelize } from 'sequelize'
import env from '../Config/env.js';

export const sequelize = new Sequelize(env.DATABASE, env.USER, env.PASS, {
    host: env.HOST,
    dialect: env.DB_DIALECT,
    timezone:env.TIME_ZONE
});
