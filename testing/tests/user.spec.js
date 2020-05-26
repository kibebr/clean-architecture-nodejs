import makeFakeUser from "../fixtures/user.js";
import makeUser from "../../src/user/index.js";

describe("username", () => 
{
    it("must have", () => {
        const user = makeFakeUser({username: null});
        expect(() => makeUser(user)).toThrow("Username must be provided.");
    });

    it("must be alphanumeric", () => {
        const user = makeFakeUser({
            username: "kibe###_",
            email: "okay@gmail.com", 
            password: "okay"
        });
        expect(() => makeUser(user)).toThrow("Username can only be alphanumeric.");       
    });

    it("must not be shorter than 3 chars", () => {
        const user = makeFakeUser({
            username: "xx"
        });
        expect(() => makeUser(user)).toThrow("Username must be longer than 3 characters.");
    });

    it("must not be longer than 10 chars", () => {
        const user = makeFakeUser({
            username: "thisismorethan10charstrustme"
        });
        expect(() => makeUser(user)).toThrow("Username must not be longer than 10 characters.");
    });
});

describe("email", () => {
    it("must have", () => {
        const user = makeFakeUser({
            username: "okay", 
            email: null
        });
        expect(() => makeUser(user)).toThrow("Email must be provided.");
    });
});

describe("password hash", () => {
    it("must be hashed", () => {
        const user = makeFakeUser({
            username: "okay",
            email: "okay@gmail.com",
            password: "samplepwd"
        });

        const createdUser = makeUser(user);

        expect(createdUser.getHashedPassword().length).toBeGreaterThan(0);
    });
});