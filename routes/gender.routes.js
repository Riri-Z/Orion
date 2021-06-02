const gendersController = require('../controllers/gender.controller.js');
const router = require('express').Router();
const errorHandler = require('../controllers/error');

router.post('/', errorHandler.errorHandler(gendersController.createGender));
router.get('/', errorHandler.errorHandler(gendersController.getAllGenders));
router.put('/:id', errorHandler.errorHandler(gendersController.putGender));
router.delete('/:id', errorHandler.errorHandler(gendersController.deleteGender));

module.exports = router;