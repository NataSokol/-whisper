const ProductServices = require("../services/Product.services");
const { Image } = require("../../db/models");

exports.getAllProducts = async (req, res) => {
  try {
    console.log(req.query);
    
    const products = await ProductServices.getAllProducts(req.query);
    
    res.status(200).json({ message: "success", products });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await ProductServices.getProductById(id);
    res.status(200).json({ message: "success", product });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const {
      title,
      price,
      salePrice,
      description,
      composition,
      collectionId,
      categoryId,
      subcategoryId,
    } = req.body;

    // Создаем массив путей к изображениям
    const imagePaths = req.files.map((file) => `/img/${file.filename}`);

    if (
      title === "" ||
      price === "" ||
      description === "" ||
      composition === "" ||
      collectionId === "" ||
      categoryId === "" ||
      subcategoryId === ""
    ) {
      res.status(400).json({ message: "All fields are required" });
      return;
    }

    const product = await ProductServices.createProduct(
      title,
      price,
      salePrice,
      description,
      composition,
      imagePaths,
      collectionId,
      categoryId,
      subcategoryId
    );

    if (product && req.files) {
      const imagePaths = req.files.map((file) => `/img/${file.filename}`);

      // Запись изображений в таблице Image
      const images = imagePaths.map((path) => ({
        productId: product.id,
        url: path,
      }));

      // Сохраняем все изображения через bulkCreate
      await Image.bulkCreate(images);

      return res
        .status(201)
        .json({ message: "Product and images created successfully", product });
    }

    return res
      .status(404)
      .json({ message: "There was an error creating the product" });
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(500).json({ error: error.message });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const productData = req.body;

    const product = await ProductServices.updateProduct(id, productData, {
      new: true,
    });
    res.status(200).json({ message: "success", product });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await ProductServices.getProductById(id);
    if (!product) {
      res.status(404).json({ message: "Product not found" });
    }
    await ProductServices.deleteProduct(id);
    res.status(200).json({ message: "success" });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
};
