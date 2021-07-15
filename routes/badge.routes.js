const badgesController = require('../controllers/badge.controller.js');
const router = require('express').Router();
const errorHandler = require('../controllers/error');
const upload = require ('../middlewares/uploadFile')

router.get('/', errorHandler.errorHandler(badgesController.getAll));
router.post('/', upload, errorHandler.errorHandler(badgesController.create));
router.put('/:id', upload, errorHandler.errorHandler(badgesController.put));
router.delete('/:id', errorHandler.errorHandler(badgesController.delete));

module.exports = router;