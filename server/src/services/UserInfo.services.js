const { User, Product, Image } = require("../../db/models");

class UserInfoServices {
  static getUserInfoById = async (id) => {
    const userInfo = await User.findByPk(id, {
      include: [
        { model: Product, as: "LikedProducts", include: [{ model: Image }] },
      ],
    });
    const plainUser = userInfo.get();
    delete plainUser.password;
    return plainUser ? { user: plainUser } : null;
  };
  static updateUserInfo = async (
    userId,
    phone,
    email,
    name,
    surname,
    birthday,

    
    address
  ) => {
    const userInfo = await User.findOne({
      where: { id: userId },
      include: [
        { model: Product, as: "LikedProducts", include: [{ model: Image }] },
      ],
    });

    if (userInfo) {
      userInfo.phone = phone;
      userInfo.email = email;
      userInfo.name = name;
      userInfo.surname = surname;
      userInfo.birthday = birthday;
      userInfo.address = address;
      await userInfo.save();
      return userInfo;
    }
    return null;
  };
}

module.exports = UserInfoServices;
