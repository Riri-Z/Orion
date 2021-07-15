const userLikesController = require('../controllers/like.user.controller.js');
const router = require('express').Router();
const errorHandler = require('../controllers/error');

router.post('/', errorHandler.errorHandler(userLikesController.createUserLike));
router.get('/', errorHandler.errorHandler(userLikesController.getAllUserLikes));
router.put('/:id', errorHandler.errorHandler(userLikesController.putUserLike));
router.delete('/:id', errorHandler.errorHandler(userLikesController.deleteUserLike));

module.exports = router;