const nodemailer = require("nodemailer");
const userId = process.env.userId;
const pass = process.env.password;

const sendMail = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();


  // connect with the smtp
  let transporter = await nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: userId,
      pass: pass,
    },
  });

  let info = await transporter.sendMail({
    from: '"Atharva Patil" <ath@gmail.com>', // sender address
    to: "atharvapatil6848@gmail.com", // list of receivers
    subject: "Hello World", // Subject line
    text: "Hello World", // plain text body
    html: "<b>Hey What's Up!</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  res.json(info);
};

module.exports = sendMail;