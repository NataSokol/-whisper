const { User, Product, Image } = require("../../db/models");
const bcrypt = require("bcrypt");

class UserService {
  async signUp(email, password) {
    const [user, isCreated] = await User.findOrCreate({
      where: { email },
      defaults: { email, password: await bcrypt.hash(password, 10) },
    });

    if (!isCreated) {
      throw new Error("User already exists");
    }
    const plainUser = (
      await User.findOne({
        where: { email },
        include: [
          { model: Product, as: "LikedProducts", include: [{ model: Image }] },
        ],
      })
    ).get();

    delete plainUser.password;

    return { user: plainUser };
  }

  async signIn(email, password) {
    const user = await User.findOne({
      where: { email },
      include: [
        { model: Product, as: "LikedProducts", include: [{ model: Image }] },
      ],
    });

    if (!user) throw new Error("User not found");

    const isCorrectPassword = await bcrypt.compare(password, user.password);
    if (!isCorrectPassword) throw new Error("Incorrect email or password");

    const plainUser = user.get();
    delete plainUser.password;

    return { user: plainUser };
  }

  async check(email) {
    const user = await User.findOne({
      where: { email },
      include: [
        { model: Product, as: "LikedProducts", include: [{ model: Image }] },
      ],
    });
    if (!user) throw new Error("User not");

    return user;
  }

  async check1(email, password) {
    const user = await User.findOne({
      where: { email },
      include: [
        { model: Product, as: "LikedProducts", include: [{ model: Image }] },
      ],
    });
    if (user) throw new Error("User already exists");

    const hashPassword = await bcrypt.hash(password, 10);

    return hashPassword;
  }

  async updateUserPassword(password, email) {
    try {
      const user = await User.findOne({
        where: { email },
        include: [
          { model: Product, as: "LikedProducts", include: [{ model: Image }] },
        ],
      });

      if (user) {
        user.password = await bcrypt.hash(password, 10);
        //user.password = password;
        await user.save();
        return user;
      } else {
        return null;
      }
    } catch (error) {
      console.error(error);
    }
  }

  async likeProduct(userId, productId) {
    const user = await User.findOne({
      where: { id: userId },
      include: [
        { model: Product, as: "LikedProducts", include: [{ model: Image }] },
      ],
    });

    if (!user) throw new Error("Пользователь не найден");

    const product = await Product.findByPk(productId, {
      include: [{ model: Image }],
    });
    if (!product) throw new Error("Продукт не найден");

    await user.addLikedProduct(product);
    return { message: "Продукт добавлен в лайки", product };
  }

  async unlikeProduct(userId, productId) {
    const user = await User.findOne({
      where: { id: userId },
      include: [
        { model: Product, as: "LikedProducts", include: [{ model: Image }] },
      ],
    });
    if (!user) throw new Error("Пользователь не найден");

    const product = await Product.findByPk(productId, {
      include: [{ model: Image }],
    });
    if (!product) throw new Error("Продукт не найден");

    await user.removeLikedProduct(product);
    return { message: "Продукт удален из лайков" };
  }

  async getLikedProducts(userId) {
    const user = await User.findByPk(userId, {
      include: [
        {
          model: Product,
          as: "LikedProducts",
          include: [{ model: Image }],
        },
      ],
    });

    if (!user) throw new Error("Пользователь не найден");

    return user.LikedProducts;
  }
}

module.exports = new UserService();
