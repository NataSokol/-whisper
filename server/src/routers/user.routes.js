const router = require("express").Router();
const userController = require("../controllers/userController");
const { verifyAccessToken } = require("../middlewares/verifyToken");


router.get('/',  userController.getUserInfo);
router.put('/', verifyAccessToken, userController.updateUserInfo);


router.post("/favorites", verifyAccessToken, userController.addFavorite);
router.delete("/favorites/:productId", verifyAccessToken, userController.deleteFavorite);
router.get("/favorites", verifyAccessToken, userController.getAllFavorites);

module.exports = router;