const User = require('../models/user.model');

exports.getAllUsers = async (req, res, next) => {
    const [allUsers] = await User.fetchAll();
    res.status(200).json(allUsers);
};

exports.createUser = async (req, res, next) => {
    const clientPayload = req.files?.sampleFile ?  {...req.body, usr_image : req.files.sampleFile.name.toLowerCase() } : req.body
    const user = new User(clientPayload)
    const data = await User.create(user)
    res.status(201).send({data})
};

exports.putUser = async (req, res, next) => {
    const clientPayload = req.files?.sampleFile ?  {...req.body, usr_image : req.files.sampleFile.name.toLowerCase() } : req.body
    const id = req.params.id
    const user = clientPayload
    const putUserResponse = await User.update(id, new User(user));
    res.status(201).json(putUserResponse);
};

exports.deleteUser = async (req, res, next) => {
    const deleteUserResponse = await User.delete(req.params.id);
    res.status(204).json(deleteUserResponse);
};


exports.upload = async (req,res) =>  {
    const picture = req.file ? req.file.path.replace('\\', '/') : null;
    res.status(200).send( '/' + picture);
}