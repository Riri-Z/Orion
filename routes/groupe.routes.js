const groupesController = require('../controllers/groupe.controller.js');
const router = require('express').Router();

router.post('/',groupesController.createGroupe);
router.get('/',groupesController.getAllGroupes);
router.put('/:id',groupesController.putGroupe);
router.delete('/:id',groupesController.deleteGroupe);

module.exports = router;