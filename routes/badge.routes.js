const badgesController = require('../controllers/badge.controller.js');
const router = require('express').Router();
const errorHandler = require('../controllers/error');

router.post('/', errorHandler.errorHandler(badgesController.create));
router.get('/', errorHandler.errorHandler(badgesController.getAll));
router.put('/:id', errorHandler.errorHandler(badgesController.put));
router.delete('/:id', errorHandler.errorHandler(badgesController.delete));

module.exports = router;