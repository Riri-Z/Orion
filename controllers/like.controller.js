const Like = require('../models/like.model');

exports.getAllLikes = async (req, res, next) => {
    try{
        const [allLike] = await Like.fetchAll();
        res.status(200).json(allLike);
    }catch(err){
        if(!err.statusCode){
            err.statusCode = 500
        }
        next(err);
    }
};

exports.createLike = async (req, res, next) => {
    const  clientPayload = req.body 
    try{
     const like = new Like(clientPayload)
     const data = await Like.create(like)
     res.status(201).send({data})
    }catch(err){  
         if(!err.statusCode){
            err.statusCode = 500
        }
        next(err); 
    }
};


exports.putLike = async (req, res, next) => {
    try{
        const id = req.params.id
        const like = req.body

        const putLikeResponse = await Like.update(id, new Like(like));
        res.status(201).json(putLikeResponse);
    }catch(err){
        if(!err.statusCode){
            err.statusCode = 500
        }
        next(err);
    }
};

exports.deleteLike = async (req, res, next) => {
    try{
        const deleteLikeResponse = await Like.delete(req.params.id);
        res.status(201).json(deleteLikeResponse);
    }catch(err){
        if(!err.statusCode){
            err.statusCode = 500
        }
        next(err);
    }
};

