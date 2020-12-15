const express = require("express");
const sendEmail = require("./index.js");
const app = express();
// For parsing application/json
app.use(express.json());

// For parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.send("AbirMailingListServer-Status:200");
});

app.post("/", (req, res) => {
  if (req.body.email) {
    const email = req.body.email;
    const response = sendEmail(email);
    res.send(response);
  } else {
    res.send("Enter a valid email");
  }
});
app.listen(process.env.PORT);
