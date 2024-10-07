const router = require("express").Router();
const collectionController = require("../controllers/collectionController");
const upload = require("../utils/uploadUtils");

router
  .route("/")
  .get(collectionController.getAllCollections)
  .post(upload.single("image"), collectionController.createCollection);

router
  .route("/:id")
  .get(collectionController.getCollectionById)
  .put(upload.single("image"), collectionController.updateCollection)
  .delete(collectionController.deleteCollection);

module.exports = router;
