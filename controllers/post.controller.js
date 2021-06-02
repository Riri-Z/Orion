const Post = require('../models/post.model');

exports.getAllPosts = async (req, res, next) => {
    try{
        const [allPost] = await Post.fetchAll();
        res.status(200).json(allPost);
    }catch(err){
        if(!err.statusCode){
            err.statusCode = 500
        }
        next(err);
    }
};

exports.createPost = async (req, res, next) => {
    const  clientPayload = req.body 
    try{
     const post = new Post(clientPayload)
     const data = await Post.create(post)
     res.status(201).send({data})
    }catch(err){  
         if(!err.statusCode){
            err.statusCode = 500
        }
        next(err); 
    }
};


exports.putPost = async (req, res, next) => {
    try{
        const id = req.params.id
        const post = req.body

        const putPostResponse = await Post.update(id, new Post(post));
        res.status(201).json(putPostResponse);
    }catch(err){
        if(!err.statusCode){
            err.statusCode = 500
        }
        next(err);
    }
};

exports.deletePost = async (req, res, next) => {
    try{
        const deletePostResponse = await Post.delete(req.params.id);
        res.status(201).json(deletePostResponse);
    }catch(err){
        if(!err.statusCode){
            err.statusCode = 500
        }
        next(err);
    }
};

