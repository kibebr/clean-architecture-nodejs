export default function makeGetAfazeres({findAfazeres})
{
    return async function(req, res){
        const id = req.params.id;
        const afazeres = await findAfazeres({id});

        res.status(200).json(afazeres);
    };
}