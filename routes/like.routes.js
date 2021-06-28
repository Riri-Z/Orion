const likesController = require('../controllers/like.controller.js');
const groupUserController = require('../controllers/groupe.user.controller.js');
const router = require('express').Router();
const errorHandler = require('../controllers/error');

router.post('/', errorHandler.errorHandler(groupUserController.createGroupUser));
router.post('/', errorHandler.errorHandler(groupUserController.createGroupUser));
router.post('/', errorHandler.errorHandler(likesController.createLike));
router.get('/', errorHandler.errorHandler(likesController.getAllLikes));
router.put('/:id', errorHandler.errorHandler(likesController.putLike));
router.delete('/:id', errorHandler.errorHandler(likesController.deleteLike));

module.exports = router;