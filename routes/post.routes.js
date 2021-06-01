const PostsController = require('../controllers/post.controller.js');
const router = require('express').Router();

router.post('/', PostsController.createPost);
router.get('/',PostsController.getAllPosts);
router.put('/:id',PostsController.putPost);
router.delete('/:id',PostsController.deletePost);

module.exports = router;