const UserLike = require('../models/like.user.model');

exports.getAllUserLikes = async (req, res, next) => {
    const [allUserLike] = await UserLike.fetchAll();
    res.status(200).json(allUserLike);
};

exports.createUserLike = async (req, res, next) => {
    const clientPayload = req.body
    const userLike = new UserLike(clientPayload)
    const data = await UserLike.create(userLike)
    res.status(201).send({ data });
};

exports.putUserLike = async (req, res, next) => {
    const id = req.params.id
    const userLike = req.body
    const putUserLikeResponse = await UserLike.update(id, new UserLike(userLike));
    res.status(201).json(putUserLikeResponse);
};

exports.deleteUserLike = async (req, res, next) => {
    const deleteUserLikeResponse = await UserLike.delete(req.params.id);
    res.status(204).json(deleteUserLikeResponse);
};