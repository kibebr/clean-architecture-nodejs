export default function buildMakeUser({pwdHasher})
{
    return function makeUser({
        username,
        email,
        password,
        password_hash = pwdHasher(password),
        afazeres
    } = {}){

        if(!username){
            throw new Error("Username must be provided.");
        }       

        let i=0;
        for(; username[i]; ++i){
            if(!username[i].match(/^[a-z0-9]+$/i)){
                throw new Error("Username can only be alphanumeric.");
            }
        }

        if(i<3){
            throw new Error("Username must be longer than 3 characters.");
        }
        else if(i>10){
            throw new Error("Username must not be longer than 10 characters.");
        }

        if(!email){
            throw new Error("Email must be provided.");
        }

        if(password_hash === '' || !password){
            throw new Error("Password must be provided.");
        }

        return Object.freeze({
            getUsername: () => username,
            getEmail: () => email,
            getHashedPassword: () => password_hash,
            getAfazeres: () => afazeres
        });
    };
}