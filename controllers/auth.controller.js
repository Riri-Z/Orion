const User = require('../models/user.model.js');

exports.login = async (req, res, next) => {
    const token = await User.login(
        req.body.email,
        req.body.password
    );
    
    return res.status(200).send({ token });
};