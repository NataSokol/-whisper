const router = require('express').Router();
const userController = require('../controllers/userController');
const { verifyAccessToken } = require('../middlewares/verifyToken');

router
  .route('/')
  .get(userController.getUserInfo)
  .put(verifyAccessToken, userController.updateUserInfo);



module.exports = router;