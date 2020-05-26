export default function makeGetUsers({listUsers})
{
    return async function getUsers(req, res){
        const user = await listUsers();

        return res
               .status(200)
               .json(user);
    };
}