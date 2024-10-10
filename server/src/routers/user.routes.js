const router = require('express').Router();
const userController = require('../controllers/userController');
const { verifyAccessToken } = require('../middlewares/verifyToken');


router.get('/',  userController.getUserInfo);
router.put('/', verifyAccessToken, userController.updateUserInfo);



module.exports = router;