const examensController = require('../controllers/examen.controller.js');
const router = require('express').Router();
const errorHandler = require('../controllers/error');
const upload = require ('../middlewares/uploadFile')

router.post('/',upload,errorHandler.errorHandler(examensController.createExamen));
router.get('/', errorHandler.errorHandler(examensController.getAllExamens));
router.get('/:id', errorHandler.errorHandler(examensController.getOne));
router.put('/:id',upload, errorHandler.errorHandler(examensController.putExamens));
router.delete('/:id', errorHandler.errorHandler(examensController.deleteExamen));

    
module.exports = router;