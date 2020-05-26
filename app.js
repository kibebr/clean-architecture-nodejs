import express from "express";
import bodyParser from "body-parser";
import {PORT} from "./config.js";
import userController from "./src/user/controllers/index.js";

const app = express();
app.use(bodyParser.json());

app.get("/api/users/:id", userController.getUser);
app.get("/api/users", userController.getUsers);
app.post("/api/users", userController.postUser);

app.listen(PORT, () => 
{
    console.log(`Server is running on port ${PORT}`);
});

export default app; 