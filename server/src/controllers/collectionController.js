const CollectionServices = require('../services/Collection.services');

exports.getAllCollections = async (req, res) => {
  try {
    const collections = await CollectionServices.getAllCollections();
    res.status(200).json({ message: 'success', collections });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
};

exports.getCollectionById = async (req, res) => {
  try {
    const { id } = req.params;
    const collection = await CollectionServices.getCollectionById(id);
    res.status(200).json({ message: 'success', collection });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
};
