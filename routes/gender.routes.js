const gendersController = require('../controllers/gender.controller.js');
const router = require('express').Router();

router.post('/', gendersController.createGender);
router.get('/',gendersController.getAllGenders);
router.patch('/:id',gendersController.putGender);
router.delete('/:id',gendersController.deleteGender);

module.exports = router;