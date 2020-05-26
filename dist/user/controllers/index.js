import { addUser, removeUser } from "../services/index.js";

import makePostUser from "./post_user.js";

const postUser = makePostUser({ addUser });

const userController = Object.freeze({
    postUser
});

export default userController;
export { postUser };