const badgesController = require('../controllers/badge.controller.js');
const router = require('express').Router();

router.post('/', badgesController.create);
router.get('/', badgesController.getAll);
router.patch('/:id', badgesController.put);
router.delete('/:id', badgesController.delete);

module.exports = router;