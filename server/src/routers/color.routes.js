const router = require("express").Router();
const colorController = require("../controllers/colorController");

router
  .route("/")
  .get(colorController.getAllColors)
  .post(colorController.createColor);

router.route("/:id")
  .get(colorController.getColor)  
  .put(colorController.updateColor);

module.exports = router;
