const User = require('../models/user.model');

exports.getAllUsers = (req, res, next) => {
    res.send(User.fetchAll())
}