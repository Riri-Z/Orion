const userBadgesController = require('../controllers/badge.user.controller.js');
const router = require('express').Router();
const errorHandler = require('../controllers/error');

router.post('/', errorHandler.errorHandler(userBadgesController.createUserBadge));
router.get('/', errorHandler.errorHandler(userBadgesController.getAllUserBadge));
router.put('/:id', errorHandler.errorHandler(userBadgesController.putUserBadge));
router.delete('/:id', errorHandler.errorHandler(userBadgesController.deleteUserBadge));

module.exports = router;