const express = require("express");
const app = express();
const template = require("./template");
const sgMail = require("@sendgrid/mail");
// For parsing application/json
app.use(express.json());

// For parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.send(
    "AbirMailingListServer-Status:200, Visit: abirpal.netlify.com to subscribe"
  );
});

app.post("/", (req, res) => {
  if (req.body.email) {
    const email = req.body.email;
    sgMail.setApiKey(process.env.SENDGRID);
    const msg = {
      to: email,
      from: "abirmailinglist@gmail.com",
      subject:
        "Thank you for having me | Abir Pal, Microsoft Student Ambassador",
      html: template
    };
    sgMail
      .send(msg)
      .then(() => {
        res.send("Thank you for Subscribing.");
      })
      .catch((error) => {
        res.send("Refresh your browser and try again.");
      });
  } else {
    res.send("Enter a valid email");
  }
});

app.listen(process.env.PORT);
