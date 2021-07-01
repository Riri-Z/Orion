const ChoicesController = require('../controllers/choice.controller.js');
const router = require('express').Router();
const errorHandler = require('../controllers/error');

router.post('/', errorHandler.errorHandler(ChoicesController.createChoice));
router.get('/', errorHandler.errorHandler(ChoicesController.getAllChoices));
router.put('/:id', errorHandler.errorHandler(ChoicesController.putChoice));
router.delete('/:id', errorHandler.errorHandler(ChoicesController.deleteChoice));

module.exports = router;