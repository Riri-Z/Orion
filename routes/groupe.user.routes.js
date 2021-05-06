const groupUserController = require('../controllers/groupe.user.controller.js');
const router = require('express').Router();

router.post('/',groupUserController.createGroupUser);
router.get('/',groupUserController.getAllGroupUser);
router.put('/:id',groupUserController.putGroupUser);
router.delete('/:id',groupUserController.deleteGroupUser);

module.exports = router;