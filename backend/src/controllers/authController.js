const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await userModel.findByEmail(email);
  if (!user) {
    return res.status(401).json({ message: "Email or senha invalidates" });
  }

  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    return res.status(401).json({ message: "Email ou senha inválidos" });
  }

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  return res.json({ token });
};

const register = async (req, res) => {
  const { username, email, password } = req.body;

  const user = await userModel.findByEmail(email);
  if (user) {
    return res.status(401).json({ message: "Email já cadastrado" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = await userModel.registerNewUser(username, email, hashedPassword);
  return res.status(201).json(newUser);
};

module.exports = {
  login,
  register,
};
