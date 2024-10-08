const FavoriteServices = require("../services/Favorite.services");

exports.getFavorites = async (req, res) => {
  try {
    const userId = res.locals.user.id;
    const favorites = await FavoriteServices.getFavorites(userId);
    res.status(200).json({ favorites });
  } catch (error) {
    console.error("Error fetching favorites:", error);
    res.status(500).json({ error: error.message || "Internal Server Error" });
  }
};

exports.createFavorite = async (req, res) => {
  try {
    const { productId } = req.body;
    const userId = res.locals.user.id;

    if (!productId) {
      return res.status(400).json({ error: "Product ID is required" });
    }

    const result = await FavoriteServices.createFavorite({ userId, productId });

    if (typeof result === "string") {
      const statusCode = result === "Favorite already exists" ? 400 : 404;
      return res.status(statusCode).json({ error: result });
    }

    const favoriteWithProduct = await FavoriteServices.getOneFavorite(
      userId,
      productId
    );

    res
      .status(201)
      .json({ message: "Favorite created", favorite: favoriteWithProduct });
  } catch (error) {
    console.error("Error creating favorite:", error);
    res.status(500).json({ error: error.message || "Internal Server Error" });
  }
};

exports.deleteFavorite = async (req, res) => {
  try {
    const { productId } = req.params;
    const userId = res.locals.user.id;

    if (!productId) {
      return res.status(400).json({ error: "Product ID is required" });
    }

    const result = await FavoriteServices.deleteFavorite(userId, productId);

    if (result === "favorite delete") {
      return res.status(200).json({ message: result });
    } else {
      return res.status(404).json({ error: result });
    }
  } catch (error) {
    console.error("Error deleting favorite:", error);
    res.status(500).json({ error: error.message || "Internal Server Error" });
  }
};
