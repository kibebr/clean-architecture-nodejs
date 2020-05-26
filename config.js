import dotenv from "dotenv";

const config = dotenv.config();
let MONGODB_URI = (process.env.NODE_ENV==="test")
? process.env.MONGODB_URI
: process.env.MONGODB_URI_TEST;

let SERVER_URI = (process.env.NODE_ENV==="test")
? process.env.SERVER_URI
: process.env.SERVER_URI_TEST;

const PORT = process.env.PORT;

export default config;
export {MONGODB_URI, SERVER_URI, PORT};