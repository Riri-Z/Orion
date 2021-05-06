const rolesController = require('../controllers/role.controller.js');
const router = require('express').Router();

router.post('/', rolesController.createRole);
router.get('/',rolesController.getAllRoles);
router.put('/:id',rolesController.putRole);
router.delete('/:id',rolesController.deleteRole);

module.exports = router;