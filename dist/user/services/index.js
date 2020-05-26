import makeAddUser from "./add_user.js";
import makeRemoveUser from "./remove_user.js";
import userDB from "../data-access/index.js";

const addUser = makeAddUser({ userDB });
const removeUser = makeRemoveUser({ userDB });

const userService = Object.freeze({
    addUser,
    removeUser
});

export default userService;
export { addUser, removeUser };