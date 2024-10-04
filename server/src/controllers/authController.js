const cookiesConfig = require('../configs/cookiesConfig');
const userService = require('../services/userService');
const generateToken = require('../utils/generateCOD');

const generateTokens = require('../utils/generateToken');
const { transporter } = require('../utils/mailer');

async function signUp(req, res) {
  const { email, password } = req.body;

  if (!(email && password)) {
    return res.status(400).json({
      data: null,
      message: 'All fields are required',
    });
  }

  try {
    const { user } = await userService.signUp(email, password);
    const { accessToken, refreshToken } = generateTokens({ user });

    res
      .cookie('refreshToken', refreshToken, cookiesConfig.refresh)
      .status(201)
      .json({
        data: { user, accessToken },
        message: 'User registered successfully',
      });
  } catch (error) {
    console.error(error);
    res
      .status(400)
      .json({ status: 'error', data: null, message: error.message });
  }
}



async function signIn(req, res) {
  const { email, password } = req.body;

  if (!(email && password)) {
    return res.status(400).json({
      data: null,
      message: 'All fields are required',
    });
  }

  try {
    const { user } = await userService.signIn(email, password);
    const { accessToken, refreshToken } = generateTokens({ user });

    res
      .cookie('refreshToken', refreshToken, cookiesConfig.refresh)
      .status(200)
      .json({
        data: { user, accessToken },
        message: 'User signed in successfully',
      });
  } catch (error) {
    console.error(error);
    res.status(400).json({ data: null, message: error.message });
  }
}

async function logout(req, res) {
  try {
    res.clearCookie('refreshToken').status(200).json({
      data: null,
      message: 'User logged out successfully',
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({ data: null, message: error.message });
  }
}

async function checkEmail(req, res) {
  const { email, password } = req.body;

  if (!(email && password)) {
    return res.status(400).json({
      data: null,
      message: 'All fields are required',
    });
  }

  try {
    const hashPassword = await userService.check(email, password);
    const token = await generateToken()

    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Подтверждение вашего email",
      text: "Hello БИЧ",
      html: `
      <p>Благодарим вас за выбор магазина "Шепот"! </p>
      <p>Для завершения процесса, пожалуйста, перейдите по ссылке:</p>
      <div style="margin: 20px 0;">
      <a href="http://localhost:5173/confirmemail/${token}" target="_blank" style="display: inline-block; background-color: #4CAF50; color: white; padding: 15px 25px; text-align: center; text-decoration: none; border-radius: 5px; font-weight: bold; transition: background-color 0.3s;">
        Перейти на сайт "Шепот"
      </a>
      </div>
      <p>Если у вас возникли вопросы или вам нужна помощь, не стесняйтесь обращаться к нашей службе поддержки.</p>
      <p>С наилучшими пожеланиями,</p>
      <p>Команда магазина "Шепот"</p>
      <p>[Контактная информация]</p>
         `
    });


    res
      .status(200)
      .json({
        data: { email, hashPassword, token },
        message: 'user has been temporarily registered successfully',
      });
  } catch (error) {
    console.error(error);
    res.status(400).json({ data: null, message: error.message });
  }
}


module.exports = {
  checkEmail,
  signUp,
  signIn,
  logout,
};