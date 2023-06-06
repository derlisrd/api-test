import * as dotenv from 'dotenv'
dotenv.config()



const env = {
    PORT:process.env.PORT,
    DATABASE: process.env.DB_NAME,
    USER: process.env.DB_USER,
    PASS:process.env.DB_PASS,
    HOST: process.env.HOST
}

export default env