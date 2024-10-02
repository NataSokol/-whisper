const router = require('express').Router();
const categoryController = require('../controllers/categoryController');

router
  .route('/')
  .get(categoryController.getAllCategories);

router
  .route('/:id')
  .get(categoryController.getCategoryById);

module.exports = router;
