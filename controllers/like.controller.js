const Like = require('../models/like.model');

exports.getAllLikes = async (req, res, next) => {
    const [allLike] = await Like.fetchAll();
    res.status(200).json(allLike);
};

exports.createLike = async (req, res, next) => {
    const  clientPayload = req.body 
    const like = new Like(clientPayload)
    const data = await Like.create(like)
    res.status(201).send({data})
};


exports.putLike = async (req, res, next) => {
    const id = req.params.id
    const like = req.body
    const putLikeResponse = await Like.update(id, new Like(like));
    res.status(201).json(putLikeResponse);
};

exports.deleteLike = async (req, res, next) => {
    const deleteLikeResponse = await Like.delete(req.params.id);
    res.status(201).json(deleteLikeResponse);
};

