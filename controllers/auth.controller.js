const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

require("dotenv").config();

const signUp = async (req, res) => {
  try {
    const { name, username, password, active } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await User.create({
      name,
      username,
      password: hashedPassword,
      active,
    });
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Error on Sign Up" });
  }
};

const signIn = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ msg: "User or password incorrect" });
    }

    const passwordCorrect = await bcrypt.compare(password, user.password);
    if (!passwordCorrect) {
      return res.status(400).json({ msg: "User or password incorrect" });
    }

    const payload = { user: { id: user.id } };
    jwt.sign(
      payload,
      process.env.SECRET,
      {
        expiresIn: 3600000,
      },
      (error, token) => {
        if (error) throw error;
        res.status(200).json({ token });
      }
    );
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Error on Sign In" });
  }
};

module.exports = { signUp, signIn };
