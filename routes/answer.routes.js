const Answer = require('../controllers/answer.controller.js');
const router = require('express').Router();
const errorHandler = require('../controllers/error');

router.post('/', errorHandler.errorHandler(Answer.create));
router.get('/', errorHandler.errorHandler(Answer.getAll));
router.get('/availableAnswer', errorHandler.errorHandler(Answer.getSpecific));
router.put('/:id', errorHandler.errorHandler(Answer.put));
router.delete('/:id', errorHandler.errorHandler(Answer.delete));

module.exports = router;