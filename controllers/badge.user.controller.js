const UserBadge = require('../models/badge.user.model.js');

exports.getAllUserBadge = async (req, res, next) => {
    const [allUserUserBadge] = await UserBadge.fetchAll();
    res.status(200).json(allUserUserBadge);
};

exports.createUserBadge = async (req, res, next) => {
    const clientPayload = req.body
    const userBadge = new UserBadge(clientPayload)
    const data = await UserBadge.create(userBadge)
    res.status(201).send({ data })
};

exports.putUserBadge = async (req, res, next) => {
    const id = req.params.id
    const userBadge = req.body
    const putUserBadgeResponse = await UserBadge.update(id, new UserBadge(userBadge));
    res.status(201).json(putUserBadgeResponse);
};

exports.deleteUserBadge = async (req, res, next) => {
    const deleteUserBadgeResponse = await UserBadge.delete(req.params.id);
    res.status(201).json(deleteUserBadgeResponse);
};