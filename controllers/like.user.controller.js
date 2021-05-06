const UserLike = require('../models/like.user.model');

exports.getAllUserLikes = async (req, res, next) => {
  try {
    const [allUserLike] = await UserLike.fetchAll();
    res.status(200).json(allUserLike);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500
    }
    next(err);
  }
};

exports.createUserLike = async (req, res, next) => {
  const clientPayload = req.body
  try {
    const userLike = new UserLike(clientPayload)
    const data = await UserLike.create(userLike)
    res.status(201).send({ data })
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500
    }
    next(err);
  }
};

exports.putUserLike = async (req, res, next) => {
  try {
    const id = req.params.id
    const userLike = req.body
    const putUserLikeResponse = await UserLike.update(id, new UserLike(userLike));
    res.status(201).json(putUserLikeResponse);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500
    }
    next(err);
  }
};

exports.deleteUserLike = async (req, res, next) => {
  try {
    const deleteUserLikeResponse = await UserLike.delete(req.params.id);
    res.status(204).json(deleteUserLikeResponse);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500
    }
    next(err);
  }
};