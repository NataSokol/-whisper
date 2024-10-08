"use strict";
const { Model } = require("sequelize");
// const productquantity = require("./productquantity");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate({
      ColorProduct,
      Image,
      Favorite,
      OrderItem,
      ProductSize,
      Category,
      Subcategory,
      Collection,
      CartItem,
      User,
      Color,
    }) {
      this.hasMany(ProductSize, { foreignKey: "productId" });
      this.belongsTo(Collection, { foreignKey: "collectionId" });
      this.belongsTo(Category, { foreignKey: "categoryId" });
      this.belongsTo(Subcategory, { foreignKey: "subcategoryId" });
      this.hasMany(OrderItem, { foreignKey: "productId" });
      this.belongsToMany(User, { through: Favorite, foreignKey: "productId" });
      this.hasMany(Image, { foreignKey: "productId" });
      // this.hasMany(Color, {
      //   foreignKey: "productId",
      // });
      this.belongsToMany(Color, {through: ColorProduct, foreignKey: "productId"});
      // this.belongsToMany(Cart, {
      //   through: CartItem,
      //   foreignKey: "productId",
      // });
      this.hasMany(CartItem, { foreignKey: "productId" });
    }
  }
  Product.init(
    {
      title: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      price: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      salePrice: {
        type: DataTypes.INTEGER,
      },
      description: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      composition: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      collectionId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "Collections",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      categoryId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "Categories",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      subcategoryId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "Subcategories",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
