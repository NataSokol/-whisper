const router = require('express').Router();
const { signUp, signIn, logout , checkEmailExistence, changePassword, sendLetter } = require('../controllers/authController');

router.post('/signup', signUp);
router.post('/signin', signIn);
router.get('/logout', logout);
router.post('/change-password', changePassword);
router.post('/send-letter', sendLetter);
router.post('/check-email', checkEmailExistence);


module.exports = router;