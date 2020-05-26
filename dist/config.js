const config = require("dotenv").config();

let MONGODB_URI = process.env.NODE_ENV === "test" ? process.env.MONGODB_URI : process.env.MONGODB_URI_TEST;
let SERVER_URI = process.env.NODE_ENV === "test" ? process.env.SERVER_URI : process.env.SERVER_URI_TEST;
const PORT = process.env.PORT;
const configs = {
  MONGODB_URI,
  SERVER_URI,
  PORT
};
export default configs;
export { MONGODB_URI, SERVER_URI, PORT };