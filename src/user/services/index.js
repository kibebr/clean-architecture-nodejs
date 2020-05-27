import makeAddUser from "./add_user.js";
import makeRemoveUser from "./remove_user.js";
import makeDisplayUser from "./display_user.js";
import makeListUsers from "./list_users.js";
import userDB from "../../../db/index.js";

const addUser = makeAddUser({userDB});
const displayUser = makeDisplayUser({userDB});
const listUsers = makeListUsers({userDB});
const removeUser = makeRemoveUser({userDB});

const userService = Object.freeze({
    addUser,
    displayUser,
    listUsers,
    removeUser
});

export default userService;
export {addUser, displayUser, listUsers, removeUser};