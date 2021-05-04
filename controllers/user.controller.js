const User = require('../models/user.model');

class usersController {

    static async getAllUsers(req, res) {
        res.send(User.fetchAll())
    }
    static async create(req, res) {
        const clientPayload = req.body;

        const isNotEmptyString = (str) => {
            return typeof str === 'string' && str.length > 0;
        };

        if (
            !isNotEmptyString(clientPayload.username) ||
            !isNotEmptyString(clientPayload.email) ||
            !isNotEmptyString(clientPayload.password)
        ) {
            return res.status(422).send({ errorMessage: 'Missing attribute !' });
        }
        try {
            const { username, email, password } = clientPayload;
            const user = new User({ username, email, password });
            if (
                (await User.usernameAlreadyExists(user.username)) ||
                (await User.emailAlreadyExists(user.email))
            ) {
                res.status(400).send({
                    errorMessage:
                        'A user with this username or this email already exists !'
                });
            } else {
                const data = await User.create(user);
                res.status(201).send({ data });
            }
        } catch (err) {
            res.status(500).send({
                errorMessage:
                    err.message || 'Some error occurred while creating the user.'
            });
        }
    }

}
module.exports = UsersController;