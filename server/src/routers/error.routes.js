const errorRouter = require("express").Router();
const errorController = require("../controllers/errorController");

errorRouter.get("/", errorController.error);

module.exports = errorRouter;
