import faker from "faker";

export default function makeFakeUser(overrides)
{
    const user = {
        username: faker.name.findName(),
        email: faker.internet.email(),
        password: faker.internet.password()
    };

    return {...user, ...overrides};
}
