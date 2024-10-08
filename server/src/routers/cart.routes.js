const router = require("express").Router();
const cartController = require("../controllers/cartController");
const { verifyAccessToken } = require("../middlewares/verifyToken");

// TODO проверить с логой регой, если что изменить логику 

router
    .route("/")
    .get( cartController.getCartByUserId)
    .post(verifyAccessToken, cartController.createCart);

router   
    .route("/:id")
    .put(verifyAccessToken, cartController.updateCart)
    .delete(verifyAccessToken, cartController.deleteCart);

module.exports = router;  
