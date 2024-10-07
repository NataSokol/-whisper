const router = require("express").Router();
const cartItemController = require("../controllers/cartItemController");

router
    .route("/")
    .post(cartItemController.createCartItem);


router  
    .route("/:id")
    .get(cartItemController.getCartItemById)
    .put(cartItemController.updateCartItem)
    .delete(cartItemController.deleteCartItem);

module.exports = router;