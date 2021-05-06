const usersController = require('../controllers/gender.controller.js');
const router = require('express').Router();

router.post('/', usersController.createGender);
router.get('/',usersController.getAllGenders);
router.patch('/:id',usersController.putGender);
router.delete('/:id',usersController.deleteGender);

module.exports = router;