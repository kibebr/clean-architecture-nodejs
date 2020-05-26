export default function makeUserDB({ makeDB }) {
    return Object.freeze({
        findById,
        findByUsername,
        insert,
        remove
    });

    async function findById(id) {
        const db = await makeDB();
        const result = await db.findById(id);
        return result;
    }

    async function findByUsername(username) {
        const db = await makeDB();
        const result = await findByUsername({ username: username });
        return result;
    }

    async function insert(user) {
        const db = await makeDB();
        const result = await db.collection("users").insertOne(user);
        return result;
    }

    async function remove(id) {
        const db = await makeDB();
        const result = await db.collection("users").removeOne({ id: id });
        return result;
    }
}