const mongoose = require("mongoose");
const Subscriber = mongoose.model("Subscriber", { email: String });
module.exports = Subscriber;
