const SubcategoryServices = require("../services/Subcategory.services");

exports.getAllSubcategories = async (req, res) => {
  try {
    const subcategories = await SubcategoryServices.getAllSubcategories();
    res.status(200).json({ message: "success", subcategories });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
};

exports.getSubcategoryById = async (req, res) => {
  try {
    const { id } = req.params;

    const subcategory = await SubcategoryServices.getSubcategoryById(+id);
    if (subcategory) {
      res.status(200).json({ message: "success", subcategory });
      return;
    }
    res.status(404).json({ message: "Subcategory not found" });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
};

exports.createSubcategory = async (req, res) => {
  try {
    const { title } = req.body;

    if (title === "") {
      res.status(400).json({ message: "Title is required" });
      return;
    }

    const subcategory = await SubcategoryServices.createSubcategory({ title });
    if (subcategory) {
      res.status(201).json({ message: "success", subcategory });
    } else {
      res.status(404).json({ message: "Failed to create subcategory" });
    }
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
};

exports.updateSubcategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { title } = req.body;

    const subcategory = await SubcategoryServices.getSubcategoryById(+id);
    if (subcategory) {
      const subcategory = await SubcategoryServices.updateSubcategory(id, {
        title,
      });
      res.status(200).json({ message: "success", subcategory });
    } else {
      res.status(404).json({ message: "Subcategory not found" });
    }
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
};

exports.deleteSubcategory = async (req, res) => {
  try {
    const { id } = req.params;

    const subcategory = await SubcategoryServices.getSubcategoryById(+id);
    if (!subcategory) {
      res.status(404).json({ message: "Subcategory not found" });
      return;
    }
    await SubcategoryServices.deleteSubcategory(id);
    res.status(200).json({ message: "success" });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
};
