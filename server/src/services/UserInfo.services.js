const { User } = require('../../db/models');

class UserInfoServices {

  static getUserInfoById = async (id) => {
    const userInfo = await User.findByPk(id);
    const plainUser = userInfo.get();
    delete plainUser.password;
    return plainUser ? { user: plainUser } : null;
  };
  static updateUserInfo = async (
    
    userId,
      {phone,
      email,
      name,
      surname,
      birthday }
  ) => {
    const userInfo = await User.findByPk(userId);
    if (userInfo) {
      await userInfo.update({

        phone,
        email,
        name,
        surname,
        birthday
      });
      return userInfo.get();
    }
    return null;
  };




}



module.exports = UserInfoServices;