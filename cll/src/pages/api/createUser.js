import { connectDB } from "@/middleware/connectDB";
import User from "@/models/User";
var CryptoJS = require("crypto-js");

const handler = function (req, res) {
  try {
    const { email, password } = JSON.parse(req.body);

    // Encrypt
    var encryptedPassword = CryptoJS.AES.encrypt(
      password,
      "p2pclouds"
    ).toString();

    const newUser = new User({
      email,
      encryptedPassword,
    });
    newUser.save();

    res.status(200).json({ success: true, message: "Successfully Created" });
  } catch (err) {
    res.status(400).json({ success: false, message: "Something Went Wrong" });
  }
};

export default connectDB(handler);
