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
    res.status(200).json({ message: 'success', category });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
}