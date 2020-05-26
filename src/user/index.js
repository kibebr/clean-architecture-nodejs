// injects dependecies on makeUser. the beauty of this is that you can change
// dependencies. you can make your own password hasher, etc, good for testing

import bcrypt from "bcrypt";
import buildMakeUser from "./entity/user.js";

function pwdHasher(password){
    return bcrypt.hashSync(password, 10);
}

const makeUser = buildMakeUser({pwdHasher});

export default makeUser;