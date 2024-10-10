const ColorServices = require("../services/Color.services");
const { Color, ColorProduct } = require("../../db/models");

exports.getAllColors = async (req, res) => {
  try {
    const colors = await ColorServices.getAllColors();
    res.status(200).json({ message: "success", colors });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
};

exports.getColor = async (req, res) => {
  try {
    const { id } = req.params;
    const color = await ColorServices.getOneColor(id);
    if (!color) {
      res.status(404).json({ message: "Color not found" });
    }
    res.status(200).json({ message: "success", color });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
};

// !!!  !!!

exports.createColor = async (req, res) => {
  try {
    const { title, colorCode, productId } = req.body;
    const color = await ColorServices.createColor(title, colorCode, productId);
    console.log(color);

    const allColors = await ColorProduct.findAll({
      where: { productId },
      include: [{ model: Color }], 
    });

    res.status(201).json({ message: "success", color, colors: allColors });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: error.message });
  }
};

exports.updateColor = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, colorCode } = req.body;
    const color = await ColorServices.updateColor(id, title, colorCode);
    res.status(200).json({ message: "success", color });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
};
