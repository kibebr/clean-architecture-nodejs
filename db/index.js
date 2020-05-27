import {MONGODB_URI} from "../config.js";
import mongodb from "mongodb";

import makeUserDB from "../src/user/data-access/user-db.js";
import makeAfazeresDB from "../src/afazer/data-access/afazeres-db.js";

const MongoClient = mongodb.MongoClient;
const ObjectId = mongodb.ObjectId;

const client = new MongoClient(MONGODB_URI, 
{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

export async function makeDB()
{
    if(!client.isConnected()){
        await client.connect();
    }

    return client.db("other-users");
}

const userDB = makeUserDB({makeDB, ObjectId});
const afazeresDB = makeAfazeresDB({makeDB});

export default userDB; 
export {userDB, afazeresDB};