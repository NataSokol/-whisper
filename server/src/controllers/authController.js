const cookiesConfig = require("../configs/cookiesConfig");
const userService = require("../services/userService");
const emailExistence = require("email-existence");
const generateTokens = require("../utils/generateToken");
const nodemailer = require("nodemailer");
const { transporter } = require("../utils/mailer");
const jwt = require("jsonwebtoken");
const jwtConfig = require("../configs/jwtConfig");

async function checkEmailExistence(req, res) {
  const { email } = req.body;
  if (!email) {
    return res
      .status(400)
      .json({ exists: false, message: "Email is required" });
  }

  emailExistence.check(email, (error, result) => {
    if (error) {
      console.error(error);
      return res
        .status(500)
        .json({ exists: false, message: "Internal Server Error" });
    }
    return res.status(200).json({ exists: result });
  });
}

async function signUp(req, res) {
  const { email, password } = req.body;

  if (!(email && password)) {
    return res.status(400).json({
      data: null,
      message: "Заполнитe все пустые поля",
    });
  }

  try {
    const { user } = await userService.signUp(email, password);
    const { accessToken, refreshToken } = generateTokens({ user });

    res
      .cookie("refreshToken", refreshToken, cookiesConfig.refresh)
      .status(201)
      .json({
        data: { user, accessToken },
        message: "User registered successfully",
      });
  } catch (error) {
    console.error(error);
    res
      .status(400)
      .json({ status: "error", data: null, message: error.message });
  }
}

async function signIn(req, res) {
  const { email, password } = req.body;

  if (!(email && password)) {
    return res.status(400).json({
      data: null,
      message: "Заполните все пустые поля",
    });
  }

  try {
    const { user } = await userService.signIn(email, password);
    const { accessToken, refreshToken } = generateTokens({ user });

    res
      .cookie("refreshToken", refreshToken, cookiesConfig.refresh)
      .status(200)
      .json({
        data: { user, accessToken },
        message: "User signed in successfully",
      });
  } catch (error) {
    console.error(error);
    res.status(400).json({ data: null, message: error.message });
  }
}

async function logout(req, res) {
  try {
    res.clearCookie("refreshToken").status(200).json({
      data: null,
      message: "User logged out successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({ data: null, message: error.message });
  }
}

async function sendLetter(req, res) {
  const { email } = req.body;
  if (email.trim() === "") {
    return res.status(400).json({
      data: null,
      message: "All fields are required",
    });
  }
  try {
    const existsEmail = await userService.check(email);
    const transporter = nodemailer.createTransport({
      host: "smtp.mail.ru",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS,
      },
    });

    const generateToken = (email) => {
      return jwt.sign({ email }, process.env.JWT_SECRET, {
        expiresIn: 1000 * 60 * 15,
      });
    };

    if (existsEmail) {
      const token = generateToken(email);
      const resetLink = `http://localhost:5173/reset-password/${token}`;

      const info = await transporter.sendMail({
        from: process.env.EMAIL,
        to: email,
        subject: "Сброс пароля",
        text: "Hello БИЧ",
        html: `
      <p>Благодарим вас за выбор магазина "Шепот"! </p>
      <p>Для завершения процесса, пожалуйста, перейдите по ссылке:</p>
      <div style="margin: 20px 0;">
      <a href=${resetLink} target="_blank" style="display: inline-block; background-color: #4CAF50; color: white; padding: 15px 25px; text-align: center; text-decoration: none; border-radius: 5px; font-weight: bold; transition: background-color 0.3s;">
        Перейти на сайт "Шепот"
      </a>
      </div>
      <p>Если у вас возникли вопросы или вам нужна помощь, не стесняйтесь обращаться к нашей службе поддержки.</p>
      <p>С наилучшими пожеланиями,</p>
      <p>Команда магазина "Шепот"</p>
      <p>[Контактная информация]</p>
         `,
      });

      res.status(200).json({
        message: "The letter was sent successfully",
      });
      return;
    }
    res.status(400).json({
      message: "The letter was not delivered",
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({ data: null, message: error.message });
  }
}

async function changePassword(req, res) {
  const { token, newPassword } = req.body;

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const changePassword = await userService.updateUserPassword(
      newPassword,
      decoded.email
    );
    if (changePassword) {
      res.status(200).json({
        message: "Password changed successfully",
      });
    } else {
      res.status(404).json({
        data: null,
        message: "Not successful",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(400).json({ data: null, message: error.message });
  }
}

module.exports = {
  checkEmailExistence,
  changePassword,
  sendLetter,
  signUp,
  signIn,
  logout,
};
