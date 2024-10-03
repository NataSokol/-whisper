const CategoryServices = require('../services/Category.services');

exports.getAllCategories = async (req, res) => {
  try {
    const categories = await CategoryServices.getAllCategories();
    res.status(200).json({ message: 'success', categories });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
};

exports.getCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    
    const category = await CategoryServices.getCategoryById(id);
    if (category) {
      res.status(200).json({ message: 'success', category });
      return;
    }
    res.status(404).json({ message: 'Category not found' });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
};

exports.createCategory = async (req, res) => {
  try {
    const { title, image } = req.body;

    const category = await CategoryServices.createCategory(title, image);
    if (category) {
      res.status(201).json({ message: 'success', category });
    } else {
      res.status(404).json({ message: 'Failed to create category' });
    }
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
};

exports.updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, image } = req.body;

    const category = await CategoryServices.getCategoryById(id);
    if (category) {
      const category = await CategoryServices.updateCategory(id, {
        title,
        image,
      });
      res.status(200).json({ message: 'success', category });
    } else {
      res.status(404).json({ message: 'Category not found' });
    }
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
};

exports.deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;

    const category = await CategoryServices.getCategoryById(id);
    if (!category) {
      res.status(404).json({ message: 'Category not found' });
      return;
    }
    await CategoryServices.deleteCategory(id);
    res.status(200).json({ message: 'success' });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
};
