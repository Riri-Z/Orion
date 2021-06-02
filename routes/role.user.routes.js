const userRolesController = require('../controllers/role.user.controller.js');
const router = require('express').Router();
const errorHandler = require('../controllers/error');

router.post('/', errorHandler.errorHandler(userRolesController.createUserRole));
router.get('/', errorHandler.errorHandler(userRolesController.getAllUserRoles));
router.put('/:id', errorHandler.errorHandler(userRolesController.putUserRole));
router.delete('/:id', errorHandler.errorHandler(userRolesController.deleteUserRole));

module.exports = router;