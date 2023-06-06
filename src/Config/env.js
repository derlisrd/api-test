import * as dotenv from 'dotenv'
dotenv.config()

const env = {
    PORT:process.env.PORT,
    DATABASE: process.env.DB_NAME,
    USER: process.env.DB_USER,
    PASS:process.env.DB_PASS,
    HOST: process.env.HOST,
    DB_DIALECT: process.env.DB_DIALECT,
    TIME_ZONE: process.env.TIME_ZONE
}

export default env