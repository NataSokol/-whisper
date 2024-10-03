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

exports.createCollection = async (req, res) => {
  try {
    const { title, image } = req.body;
    
    const collection = await CollectionServices.createCollection(title, image);
    res.status(201).json({ message: 'success', collection });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
};

exports.updateCollection = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, image } = req.body;

    const collection = await CollectionServices.updateCollection(id, {
      title,
      image,
    });
    res.status(200).json({ message: 'success', collection });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
};

exports.deleteCollection = async (req, res) => {
  try {
    const { id } = req.params;
    
    const collection = await CollectionServices.getCollectionById(id);
    if (!collection) {
      res.status(404).json({ message: 'Collection not found' });
    }
    await CollectionServices.deleteCollection(id);
    res.status(200).json({ message: 'success' });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
};
