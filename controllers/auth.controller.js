const User = require('../models/user.model.js');

exports.login = async (req, res, next) => {
    const token = await User.login(
        req.body.email,
        req.body.password
    ); 
    return res.status(200).send({ token });
};

exports.resetPassword = async (req, res, next) => {
    const putUserResponse = await User.reset(req.body.email)
    res.status(201).json(putUserResponse)
};