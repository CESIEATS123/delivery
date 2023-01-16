import dotenv from 'dotenv';

dotenv.config();

//console.log(process.env);
const { PORT } = process.env;

const {
    DBNAME,
    URI,
    TOKEN_SECRET,
} = process.env;

export default {
    port: PORT,
    uri: URI,
    database: DBNAME,
    tokenSecret: TOKEN_SECRET,
};