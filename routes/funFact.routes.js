const funFactController = require('../controllers/funFact.controller.js');
const router = require('express').Router();
const errorHandler = require('../controllers/error');

router.post('/', errorHandler.errorHandler(funFactController.createFunFact));
router.get('/', errorHandler.errorHandler(funFactController.getAllFunFacts));
router.put('/:id', errorHandler.errorHandler(funFactController.putFunFact));
router.delete('/:id', errorHandler.errorHandler(funFactController.deleteFunFact));

module.exports = router;