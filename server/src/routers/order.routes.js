const router = require("express").Router();
const orderController = require("../controllers/orderController");
const { verifyAccessToken } = require("../middlewares/verifyToken");


router
  .route("/")
  .get(verifyAccessToken, orderController.getAllOrders)

//  verifyAccessToken,

router
  .route("/:orderId")
  .get(orderController.getOrderById)
  // .get(verifyAccessToken, orderController.getOrderById)


module.exports = router;