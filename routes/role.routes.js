const rolesController = require('../controllers/role.controller.js');
const router = require('express').Router();
const errorHandler = require('../controllers/error');

router.post('/', errorHandler.errorHandler(rolesController.createRole));
router.get('/', errorHandler.errorHandler(rolesController.getAllRoles));
router.put('/:id', errorHandler.errorHandler(rolesController.putRole));
router.delete('/:id', errorHandler.errorHandler(rolesController.deleteRole));

module.exports = router;