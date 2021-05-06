const userRolesController = require('../controllers/role.user.controller.js');
const router = require('express').Router();

router.post('/', userRolesController.createUserRole);
router.get('/',userRolesController.getAllUserRoles);
router.patch('/:id',userRolesController.putUserRole);
router.delete('/:id',userRolesController.deleteUserRole);

module.exports = router;