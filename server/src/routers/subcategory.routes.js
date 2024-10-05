const router = require('express').Router();
const subcategoryController = require('../controllers/subcategoryController');

router
  .route('/')
  .get(subcategoryController.getAllSubcategories)
  .post(subcategoryController.createSubcategory);

router
  .route('/:id')
  .get(subcategoryController.getSubcategoryById)
  .put(subcategoryController.updateSubcategory)
  .delete(subcategoryController.deleteSubcategory);

module.exports = router;
