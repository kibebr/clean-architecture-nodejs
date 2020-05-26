export default function makeRemoveUser({userDB})
{
    return async function removeUser({id}){
        if(!id){
            throw new Error("You must supply an user id.");
        }

        const userToDelete = userDB.findById({id});

        if(!userToDelete){
            throw new Error("User not found.");
        }

        hardDelete(user);
    };  
}

async function hardDelete(user){
    await userDB.remove();
}