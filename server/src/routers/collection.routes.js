const router = require('express').Router();
const collectionController = require('../controllers/collectionController');

router
  .route('/')
  .get(collectionController.getAllCollections)
  .post(collectionController.createCollection);

router
  .route('/:id')
  .get(collectionController.getCollectionById)
  .put(collectionController.updateCollection)
  .delete(collectionController.deleteCollection);

module.exports = router;
