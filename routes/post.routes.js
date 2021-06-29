const PostsController = require('../controllers/post.controller.js');
const router = require('express').Router();
const errorHandler = require('../controllers/error');
const upload = require ('../middleware/uploadFile')

router.post('/',upload, errorHandler.errorHandler(PostsController.createPost));
router.get('/', errorHandler.errorHandler(PostsController.getAllPosts));
router.put('/:id',upload, errorHandler.errorHandler(PostsController.putPost));
router.delete('/:id', errorHandler.errorHandler(PostsController.deletePost));

module.exports = router;