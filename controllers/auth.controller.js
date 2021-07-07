const User = require('../models/user.model.js');

exports.login = async (req, res, next) => {
    const user = await User.login(
        req.body.email,
        req.body.password
    ); 
    return res.status(200).send({ user });
};

exports.resetPassword = async (req, res, next) => {
    const putUserResponse = await User.reset(req.body.email);
    res.status(201).json(putUserResponse);
};

exports.newPassword = async (req, res, next) => {
    const [user] = await User.updatePassword(req.body.id, req.body.password);
    res.status(201).json(user);
};