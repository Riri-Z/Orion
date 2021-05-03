
const usersController = require('../controllers/user.controller.js');

const router = require('express').Router();


router.get('/',usersController.getAllUsers);

module.exports = router;
