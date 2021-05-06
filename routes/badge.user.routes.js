const userBadgesController = require('../controllers/badge.user.controller.js');
const router = require('express').Router();

router.post('/', userBadgesController.createUserBadge);
router.get('/', userBadgesController.getAllUserBadge);
router.patch('/:id', userBadgesController.putUserBadge);
router.delete('/:id', userBadgesController.deleteUserBadge);

module.exports = router;