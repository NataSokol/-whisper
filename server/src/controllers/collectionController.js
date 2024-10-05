const CollectionServices = require("../services/Collection.services");

exports.getAllCollections = async (req, res) => {
  try {
    const collections = await CollectionServices.getAllCollections();
    res.status(200).json({ message: "success", collections });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
};

exports.getCollectionById = async (req, res) => {
  try {
    const { id } = req.params;

    const collection = await CollectionServices.getCollectionById(id);
    res.status(200).json({ message: "success", collection });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
};

exports.createCollection = async (req, res) => {
  try {
    const { title } = req.body;
    const imagePath = `/img/${req.file.filename}`;

    const collection = await CollectionServices.createCollection(
      title,
      imagePath
    );
    res.status(201).json({ message: "success", collection });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
};

exports.updateCollection = async (req, res) => {
  try {
    const { id } = req.params;
    const { title } = req.body; 
    let imagePath = null; 

    if (req.file) {
      imagePath = `/img/${req.file.filename}`;
    }

    const collection = await CollectionServices.updateCollection(id, {
      title,
      imagePath,
    });
    res.status(200).json({ message: "success", collection });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
};

exports.deleteCollection = async (req, res) => {
  try {
    const { id } = req.params;

    const collection = await CollectionServices.getCollectionById(id);
    if (!collection) {
      res.status(404).json({ message: "Collection not found" });
      return;
    }
    await CollectionServices.deleteCollection(id);
    res.status(200).json({ message: "success" });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
};
