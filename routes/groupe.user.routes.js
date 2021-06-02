const groupUserController = require('../controllers/groupe.user.controller.js');
const router = require('express').Router();
const errorHandler = require('../controllers/error');

router.post('/', errorHandler.errorHandler(groupUserController.createGroupUser));
router.get('/', errorHandler.errorHandler(groupUserController.getAllGroupUser));
router.put('/:id', errorHandler.errorHandler(groupUserController.putGroupUser));
router.delete('/:id', errorHandler.errorHandler(groupUserController.deleteGroupUser));

module.exports = router;