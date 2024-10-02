const { Collection } = require('../db/models');

class CollectionServices {
  // получить все коллекции
  static getAllCollections = async () =>
    (await Collection.findAll()).map((collection) => collection.get());
  // получить одну коллекцию
  static getCollectionById = async (id) => {
    const collection = await Collection.findByPk(id);
    return collection ? collection.get() : null;
  };

  // Админка
  // создать коллекцию
  static createCollection = async (title, image) => {
    const collection = await Collection.create({ title, image });
    return collection.get();
  };

  static updateCollection = async (id, { title, image }) => {
    const collection = await Collection.findByPk(id);
    if (collection) {
      await collection.update({ title, image });
      return collection.get();
    }
    return null;
  };

  static deleteCollection = async (id) => {
    const collection = await Collection.findByPk(id);
    if (collection) {
      return collection.destroy();
    }
    return 'Collection not found';
  };
}

module.exports = CollectionServices;
