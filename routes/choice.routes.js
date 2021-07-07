const ChoicesController = require('../controllers/choice.controller.js');
const router = require('express').Router();
const errorHandler = require('../controllers/error');

router.post('/', errorHandler.errorHandler(ChoicesController.create));
router.get('/', errorHandler.errorHandler(ChoicesController.getAll));
router.get('/choice', errorHandler.errorHandler(ChoicesController.getSpecific));
router.put('/:id', errorHandler.errorHandler(ChoicesController.put));
router.delete('/:id', errorHandler.errorHandler(ChoicesController.delete));

module.exports = router;