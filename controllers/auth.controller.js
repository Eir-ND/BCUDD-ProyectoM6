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
        expiresIn: 300000,
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

const verifyToken = async (req, res) => {
  try {
    const foundUser = await User.findById(req.user.id).select("-password");

    return res.json({
      msg: "User data found.",
      data: foundUser,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      msg: "The user is not logged in.",
    });
  }
};

const update = async (req, res) => {
  let newDataForOurUser = req.body;

  if (newDataForOurUser.password) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newDataForOurUser.password, salt);

    newDataForOurUser.password = hashedPassword;
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.user.id,
      newDataForOurUser,
      { new: true }
    ).select("-password");

    res.json({
      msg: "User updated successfully",
      data: updatedUser,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      msg: "There was an error updating the user.",
    });
  }
};

module.exports = { signUp, signIn, verifyToken, update };
