export default function makeDisplayUser({userDB}){
    return async function displayUser({id}){
        console.log("the id is: ", id);
        const user = await userDB.findById(id);
        return user;
    };
}