import express from "express";
import bodyParser from "body-parser";
import config from "./config.js";
import userController from "./user/controllers/index.js";
const app = express();
app.use(bodyParser.json());
app.post("/api/users", postUser);
app.get("/api/users", getUsers);
app.listen(config.PORT, () => {
  console.log(`Server is running on port ${config.PORT}`);
});
export default app;