const express = require('express');
const authController = require('../controllers/authController');
const registerMiddleware = require('../middlewares/registerMiddleware');

const router = express.Router();

router.post('/register', registerMiddleware, authController.register);
router.post('/login', authController.login);

module.exports = router;
