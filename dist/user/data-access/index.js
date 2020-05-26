import makeUserDb from "./user-db.js";
import { MONGODB_URI } from "../../../config.js";
import mongodb from "mongodb";

const MongoClient = mongodb.MongoClient;
const client = new MongoClient(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

export async function makeDB() {
    if (!client.isConnected()) {
        await client.connect();
    }

    return client.db("test-users");
}

const userDB = makeUserDb({ makeDB });
export default userDB;