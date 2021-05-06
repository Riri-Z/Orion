const userLikesController = require('../controllers/like.user.controller.js');
const router = require('express').Router();

router.post('/', userLikesController.createUserLike);
router.get('/',userLikesController.getAllUserLikes);
router.put('/:id',userLikesController.putUserLike);
router.delete('/:id',userLikesController.deleteUserLike);

module.exports = router;