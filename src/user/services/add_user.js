import makeUser from "../index.js";

export default function makeAddUser({userDB})
{
    return async function addUser(userInfo){
        const user = await makeUser(userInfo);
        const exists = await userDB.findByUsername(user.getUsername());

        if(exists){
            throw new Error("User already exists!");
        }
        else{
            return userDB.insert({
                username: user.getUsername(),
                email: user.getEmail(),
                password_hash: user.getHashedPassword(),
                afazeres: user.getAfazeres()
            });
        }
    };
}