import 
{
    addUser,
    displayUser,
    listUsers,
    removeUser
} from "../services/index.js";

import makePostUser from "./post_user.js";
import makeGetUser from "./get_user.js";
import makeGetUsers from "./get_users.js";

const postUser = makePostUser({addUser});
const getUser = makeGetUser({displayUser});
const getUsers = makeGetUsers({listUsers});

const userController = Object.freeze({
    postUser,
    getUser,
    getUsers
});

export default userController;
export {postUser, getUser, getUsers};