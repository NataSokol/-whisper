const {Subcategory} = require('../../db/models');

class SubcategoryServices {
  // получить все подкатегории
  static getAllSubcategories = async () =>
    (await Subcategory.findAll()).map((subcategory) => subcategory.get());

  // получить одну подкатегорию
  static getSubcategoryById = async (id) => {
    const subcategory = await Subcategory.findByPk(id);
    return subcategory ? subcategory.get() : null;
  };
  // Админка
  // создать подкатегорию
  static createSubcategory = async ({title}) => {
    const subcategory = await Subcategory.create({ title });
    return subcategory.get();
  };

  static updateSubcategory = async (id, {title} ) => {
    const subcategory = await Subcategory.findByPk(id);
    if (subcategory) {
      await subcategory.update({ title });
      return subcategory.get();
    }
    return null;
  };

  static deleteSubcategory = async (id) => {
    const subcategory = await Subcategory.findByPk(id);
    if (subcategory) {
      return subcategory.destroy();
    }
    return 'Subcategory not found';
  };
}

module.exports = SubcategoryServices;
