const User = require('../models/user.model');

exports.getAllUsers = async (req, res, next) => {
    const [allUsers] = await User.fetchAll()
    res.status(200).json(allUsers)
};

exports.deleteUser = async (req, res, next) => {
    const deleteUserResponse = await User.delete(req.params.id)
    res.status(204).json(deleteUserResponse)
};

exports.createUser = async (req, res, next) => {
    const user = new User(req.body)
    const data = await User.create(user)
    res.status(200).send()
};
    
exports.putUser = async (req, res, next) => {
    const id = req.params.id
    const user = req.body
    const putUserResponse = await User.update(id, new User(user))
    res.status(201).json(putUserResponse)
};



