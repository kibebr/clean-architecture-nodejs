export default function makePostUser({ addUser }) {
    return async function (req, res) {
        try {
            const { username, email, password } = req.body;
            const added = await addUser({ username, email, password });

            return res.send(201);
        } catch (err) {
            console.error(err);
            return res.send(500);
        }
    };
}