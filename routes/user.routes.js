
const usersController = require('../controllers/user.controller.js');
/* const errorController = require('../controllers/error'); */
const router = require('express').Router();

router.post('/', usersController.createUser);
router.get('/',usersController.getAllUsers);
router.patch('/:id',usersController.putUser);
router.delete('/:id',usersController.deleteUser);

module.exports = router;
