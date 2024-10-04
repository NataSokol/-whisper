const nodemailer = require("nodemailer");


const transporter = nodemailer.createTransport({
  host: "smtp.mail.ru",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER, 
    pass: process.env.EMAIL_PASS, 
  },
});

module.exports=transporter