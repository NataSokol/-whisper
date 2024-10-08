const favoriteRouter = require("express").Router();
const { verifyAccessToken } = require("../middlewares/verifyToken");
const {
  getFavorites,
  createFavorite,
  deleteFavorite,
} = require("../controllers/favoriteController");

favoriteRouter.get("/", verifyAccessToken, getFavorites);

favoriteRouter.post("/", verifyAccessToken, createFavorite);

favoriteRouter.delete("/:productId", verifyAccessToken, deleteFavorite);

module.exports = favoriteRouter;
