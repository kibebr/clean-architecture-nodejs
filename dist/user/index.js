// injects dependecies on makeUser. the beauty of this is that you can change
// dependencies. you can make your own password hasher, etc, good for testing

import bcrypt from "bcrypt";
import buildMakeUser from "./entity/user.js";

const makeUser = buildMakeUser({ hashPassword });

function hashPassword(password) {
    return bcrypt.hash(password, 10);
}

export default makeUser;