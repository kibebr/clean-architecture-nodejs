export default function makeUserDB({makeDB, ObjectId})
{
    return Object.freeze({
        findAll,
        findById,
        findByUsername,
        insert,
        remove
    });

    async function findAll(){
        const db = await makeDB();
        const result = await db.collection("other-users")
                               .find({});
        return (await result.toArray()).map(user => {
            return {...user, password_hash: null};
        });
    }

    async function findById(id){ 
        const db = await makeDB();
        const result = await db.collection("other-users")
                               .findOne({_id: ObjectId(`${id}`)});
        return result;
    }

    async function findByUsername(username){
        const db = await makeDB();
        const result = await db.collection("other-users")
                               .findOne({username: username});
        return result;
    }

    async function insert(user){
        const db = await makeDB();
        const result = await db.collection("other-users")
                               .insertOne(user);
        return result;
    }

    async function remove(id){
        const db = await makeDB();
        const result = await db.collection("other-users")
                               .removeOne({id: id});
        return result;
    }
}
