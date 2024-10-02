const { Category } = require('../db/models');

class CategoryServices {
  // получить все категории
  static getAllCategories = async () =>
    (await Category.findAll()).map((category) => category.get());

  // получить одну категорию
  static getCategoryById = async (id) => {
    const category = await Category.findByPk(id);
    return category ? category.get() : null;
  };
}

module.exports = CategoryServices;
