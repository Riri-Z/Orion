const Answer = require('../controllers/answer.controller.js');
const router = require('express').Router();
const errorHandler = require('../controllers/error');

router.post('/', errorHandler.errorHandler(Answer.createAnswer));
router.get('/', errorHandler.errorHandler(Answer.getAllAnswers));
router.put('/:id', errorHandler.errorHandler(Answer.putAnswer));
router.delete('/:id', errorHandler.errorHandler(Answer.deleteAnswer));

module.exports = router;