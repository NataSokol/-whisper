const router = require("express").Router();
const productSizeController = require("../controllers/productSizeController");

router
  .route("/")
  .get(productSizeController.getAllProductSizes)
  .post(productSizeController.createProductSize);

router
  .route("/:id")
  .get(productSizeController.getOneProductSize)
  .put(productSizeController.updateProductSize)
  .delete(productSizeController.deleteProductSize);

module.exports = router;
