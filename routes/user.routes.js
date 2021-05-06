
const usersController = require('../controllers/user.controller.js');
const router = require('express').Router();

router.post('/', usersController.createUser);
router.get('/',usersController.getAllUsers);
router.put('/:id',usersController.putUser);
router.delete('/:id',usersController.deleteUser);

module.exports = router;
