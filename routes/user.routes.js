
const usersController = require('../controllers/user.controller.js');
const router = require('express').Router();
const errorHandler = require('../controllers/error');
const upload = require ('../middleware/uploadFile');


router.post('/', upload,  errorHandler.errorHandler(usersController.createUser));
router.get('/', errorHandler.errorHandler(usersController.getAllUsers));
router.put('/:id', upload,errorHandler.errorHandler(usersController.putUser));
router.delete('/:id', errorHandler.errorHandler(usersController.deleteUser));

module.exports = router;
