const likesController = require('../controllers/like.controller.js');
const router = require('express').Router();

router.post('/', likesController.createLike);
router.get('/',likesController.getAllLikes);
router.patch('/:id',likesController.putLike);
router.delete('/:id',likesController.deleteLike);

module.exports = router;