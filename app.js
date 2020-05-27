import express from "express";
import bodyParser from "body-parser";
import {PORT} from "./config.js";
import userController from "./src/user/controllers/index.js";
import afazeresController from "./src/afazer/controllers/index.js";

const app = express();
app.use(bodyParser.json());

app.get("/api/afazeres", afazeresController.getAfazeres);
app.get("/api/users/:id", userController.getUser);
app.get("/api/users", userController.getUsers);
app.post("/api/users", userController.postUser);
app.post("/api/afazeres", afazeresController.postAfazer);

app.listen(PORT, () => 
{
    console.log(`Server is running on port ${PORT}`);
});

export default app; 