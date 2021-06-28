const Post = require('../models/post.model');

exports.getAllPosts = async (req, res, next) => {
    const [allPost] = await Post.fetchAll();
    res.status(200).json(allPost);

};

exports.createPost = async (req, res, next) => {
    const clientPayload = req.files?.sampleFile ?  {...req.body, pos_image : req.files.sampleFile.name.toLowerCase() } : req.body
    clientPayload.pos_imgURL = clientPayload.imgURL
    delete clientPayload.imgURL    
    const post = new Post(clientPayload)
    const data = await Post.create(post)
    res.status(201).send({ data })

};


exports.putPost = async (req, res, next) => {
    const clientPayload = req.files?.sampleFile ?  {...req.body, pos_image : req.files.sampleFile.name.toLowerCase() } : req.body
    clientPayload.pos_imgURL = clientPayload.imgURL
    delete clientPayload.imgURL
    const id = req.params.id
    const post = clientPayload
    const putPostResponse = await Post.update(id, new Post(post));
    res.status(201).json(putPostResponse);

};

exports.deletePost = async (req, res, next) => {
    const deletePostResponse = await Post.delete(req.params.id);
    res.status(201).json(deletePostResponse);

};

