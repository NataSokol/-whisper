
const cookiesConfig = require("../configs/cookiesConfig");
const UserInfoServices = require("../services/UserInfo.services");
const generateToken = require("../utils/generateToken");

exports.getUserInfo = async (req, res) => {
  try {
    const userId = res.locals.user.id;
    const { user } = await UserInfoServices.getUserInfoById(userId);
    res.status(200).json({ message: 'success', user });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
};

exports.updateUserInfo = async (req, res) => {
  
  try {
    const userId = res.locals.user.id;
    const { phone, email, name, surname, birthday, address } = req.body;



    const updatedUser = await UserInfoServices.updateUserInfo(
      userId,
      phone,
      email,
      name,
      surname,
      birthday,
      address

    );
    if (updatedUser) {
      // Генерация токенов после успешного обновления
      const { accessToken, refreshToken } = generateToken({ user: updatedUser });

      // Удаляем старый refreshToken и устанавливаем новый
      res.clearCookie('refreshToken')
        .status(200)
        .cookie('refreshToken', refreshToken, cookiesConfig.refresh)
        .json({ user: updatedUser, accessToken });
    } else {
      res.status(404).json({
        data: null,
        message: 'User not found',
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      data: null,
      message: error.message,
    });
  }
}