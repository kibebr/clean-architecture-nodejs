export default function makeGetUser({displayUser})
{
    return async function(req, res){
        const id = req.params.id;
        const user = await displayUser({id});

        res.status(200).json(user);
    };
}