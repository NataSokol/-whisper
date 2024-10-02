const router = require('express').Router();
const collectionController = require('../controllers/collectionController');

router 
  .route('/') 
  .get(collectionController.getAllCollections);


router
  .route('/:id')
  .get(collectionController.getCollectionById);

module.exports = router;
