import { makeDB } from "./src/user/data-access/index.js";
import {MONGODB_URI} from "./config.js";

(async function setupDB()
{

    console.log(MONGODB_URI);
    console.log("setting up database...");

    const db = await makeDB();

    const result = await db.collection("other-users");

    console.log(result);
    console.log("everything went okay!");
    process.exit();
})();