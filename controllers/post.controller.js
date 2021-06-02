const Post = require('../models/post.model');

exports.getAllPosts = async (req, res, next) => {
    const [allPost] = await Post.fetchAll();
    res.status(200).json(allPost);

};

exports.createPost = async (req, res, next) => {
    const clientPayload = req.body
    const post = new Post(clientPayload)
    const data = await Post.create(post)
    res.status(201).send({ data })

};


exports.putPost = async (req, res, next) => {
    const id = req.params.id
    const post = req.body
    const putPostResponse = await Post.update(id, new Post(post));
    res.status(201).json(putPostResponse);

};

exports.deletePost = async (req, res, next) => {
    const deletePostResponse = await Post.delete(req.params.id);
    res.status(201).json(deletePostResponse);

};

