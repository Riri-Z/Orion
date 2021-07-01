const questionsController = require('../controllers/question.controller.js');
const router = require('express').Router();
const errorHandler = require('../controllers/error');

router.post('/', errorHandler.errorHandler(questionsController.createQuestion));
router.get('/', errorHandler.errorHandler(questionsController.getAllQuestions));
router.get('/:id', errorHandler.errorHandler(questionsController.getOne));
router.put('/:id', errorHandler.errorHandler(questionsController.putQuestion));
router.delete('/:id', errorHandler.errorHandler(questionsController.deleteQuestion));

// a rajouter get one Questions 

module.exports = router;