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

  // Админка
  // создать категорию
  static createCategory = async (title, image) => {
    const category = await Category.create({ title, image });
    return category.get();
  };

  static updateCategory = async (id, { title, image }) => {
    const category = await Category.findByPk(id);
    if (category) {
      await category.update({ title, image });
      return category.get();
    }
    return null;
  };

  static deleteCategory = async (id) => {
    const category = await Category.findByPk(id);
    if (category) {
      return category.destroy();
    }
    return 'Category not found';
  };
}

module.exports = CategoryServices;
