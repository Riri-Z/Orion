
const usersController = require('../controllers/user.controller.js');
const authenticateJWT =require('../middlewares/auth.middlewares')
const router = require('express').Router();


router.get('/',authenticateJWT,usersController.getAllUsers);

module.exports = router;
