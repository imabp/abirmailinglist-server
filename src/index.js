const template = require("./template");
const sgMail = require("@sendgrid/mail");

const sendEmail = (email) => {
  sgMail.setApiKey(process.env.SENDGRID);
  const msg = {
    to: "abir.pal899@gmail.com",
    from: "abirmailinglist@gmail.com",
    subject: "Thank you for having me | Abir Pal, Microsoft Student Ambassador",
    html: template
  };
  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
      return 200;
    })
    .catch((error) => {
      console.error(error);
      return 500;
    });
};
module.exports = { sendEmail };
