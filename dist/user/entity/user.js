// closure which receives dependecies to make a user (make, not create, nothing 
// will be pushed to the database)

export default function buildMakeUser({ pwdHasher }) {
    return function makeUser({
        username,
        email,
        password_hash = pwdHasher("test"),
        favoriteColor
    }) {
        if (!username || username.length < 3) {
            throw new Error("username doesn't exist or is too short!");
        }

        if (!email || email.length < 3) {
            throw new Error("email doesn't exist or is too short!");
        }

        if (favoriteColor != "red") {
            throw new Error("your favorite color must be red!");
        }

        return Object.freeze({
            getUsername: () => username,
            getEmail: () => email,
            getHashedPassword: () => password_hash,
            getFavoriteColor: () => favoriteColor
        });
    };
}