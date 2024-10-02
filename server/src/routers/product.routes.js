const router = require('express').Router();
const productController = require('../controllers/productController');

router 
 .route('/')
 .get(productController.getAllProducts);

router
  .route('/:id')
  .get(productController.getProductById);

module.exports = router;
