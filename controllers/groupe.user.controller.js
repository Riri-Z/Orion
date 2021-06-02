const GroupUser = require('../models/groupe.user.model.js');

exports.getAllGroupUser = async (req, res, next) => {
    const [allGroupUser] = await GroupUser.fetchAll();
    res.status(200).json(allGroupUser);
};

exports.createGroupUser= async (req, res, next) => {
    const  clientPayload = req.body 
    const groupUser = new GroupUser(clientPayload)
    const data = await GroupUser.create(groupUser)
    res.status(201).send({data});
};

exports.putGroupUser = async (req, res, next) => {
    const id = req.params.id
    const groupUser = req.body
    const putGroupUserResponse = await GroupUser.update(id, new GroupUser(groupUser));
    res.status(201).json(putGroupUserResponse);
};

exports.deleteGroupUser = async (req, res, next) => {
    const deleteGroupUserResponse = await GroupUser.delete(req.params.id);
    res.status(204).json(deleteGroupUserResponse);
};