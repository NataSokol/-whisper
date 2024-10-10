const ProductSizeServices = require("../services/ProductSize.services");

exports.getAllProductSizes = async (req, res) => {
  try {
    const productSizes = await ProductSizeServices.getAllProductSizes();
    res.status(200).json({ message: "success", productSizes });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
};

exports.getOneProductSize = async (req, res) => {
  try {
    const { id } = req.params;
    const productSize = await ProductSizeServices.getOneProductSize(id);
    res.status(200).json({ message: "success", productSize });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
};

exports.createProductSize = async (req, res) => {
  try {
    const {
      productId,
      sizeTitle,
      length,
      width,
      chestGirth,
      waistGirth,
      hipGirth,
      chestUnderGirth,
      frontLength,
      externalSeamLength,
      innerSeamLength,
      sleeveLength,
      quantity,
    } = req.body;

    const productSize = await ProductSizeServices.createProductSize({
      productId,
      sizeTitle,
      length,
      width,
      chestGirth,
      waistGirth,
      hipGirth,
      chestUnderGirth,
      frontLength,
      externalSeamLength,
      innerSeamLength,
      sleeveLength,
      quantity,
    });
    if (productSize) {
      res.status(201).json({ message: "success", productSize });
      return
    }
    res.status(404).json({ message: "There was an error" });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
};

exports.updateProductSize = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      sizeTitle,
      length,
      width,
      chestGirth,
      waistGirth,
      hipGirth,
      chestUnderGirth,
      frontLength,
      externalSeamLength,
      innerSeamLength,
      sleeveLength,
      quantity,
    } = req.body;

    const productSize = await ProductSizeServices.updateProductSize(
      id,
      {
        sizeTitle,
        length,
        width,
        chestGirth,
        waistGirth,
        hipGirth,
        chestUnderGirth,
        frontLength,
        externalSeamLength,
        innerSeamLength,
        sleeveLength,
        quantity,
      },
      {
        new: true,
      }
    );

    res.status(200).json({ message: "success", productSize });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
};

exports.deleteProductSize = async (req, res) => {
  try {
    const { id } = req.params;
    const productSize = await ProductSizeServices.deleteProductSize(id);
    res.status(200).json({ message: "success", productSize });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
};
