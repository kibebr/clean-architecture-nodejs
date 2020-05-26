import makeUser from "../index.js";

export default function makeAddUser({ userDB }) {
    return async function addUser(userInfo) {
        const user = makeUser(userInfo);
        const exists = await userDB.findByUsername({ username: user.getUsername() });

        if (exists) {
            throw new Error("user already exists!");
        } else {
            return userDB.insert({
                username: user.getUsername(),
                email: user.getEmail(),
                password_hash: user.getHashedPassword(),
                favorite_color: user.getFavoriteColor()
            });
        }
    };
}