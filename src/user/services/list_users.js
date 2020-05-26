export default function makeListUsers({userDB})
{
    return async function listUsers(){
        const allUsers = await userDB.findAll();
        return allUsers;
    };
}