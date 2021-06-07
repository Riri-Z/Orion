const groupesController = require('../controllers/groupe.controller.js');
const router = require('express').Router();
const errorHandler = require('../controllers/error');

router.post('/', errorHandler.errorHandler(groupesController.createGroupe));
router.get('/', errorHandler.errorHandler(groupesController.getAllGroupes));
router.put('/:id', errorHandler.errorHandler(groupesController.putGroupe));
router.delete('/:id', errorHandler.errorHandler(groupesController.deleteGroupe));

module.exports = router;