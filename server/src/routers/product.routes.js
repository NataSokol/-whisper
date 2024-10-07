const router = require("express").Router();
const productController = require("../controllers/productController");
const upload = require('../utils/uploadUtils');

router
  .route("/")
  .get(productController.getAllProducts)
  .post(upload.array("images", 10), productController.createProduct);

router
  .route("/:id")
  .get(productController.getProductById)
  .put(productController.updateProduct)
  .delete(productController.deleteProduct);

module.exports = router;
