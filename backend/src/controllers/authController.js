const userModel = require('../models/userModel');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const login = async (req, res) => {
  const {email, password} = req.body

  // 1️⃣ buscar usuário
  const user = await userModel.findByEmail(email);
  if (!user) {
    return res.status(401).json({ message: 'Email or senha invalidates' });
  }

  // 2️⃣ comparar senha
  if (password !== user.password) {
    return res.status(401).json({ message: 'Email ou senha inválidos' });
  }

  // 3️⃣ gerar token
  const token = jwt.sign(
    { id: user.id },
    process.env.JWT_SECRET,
    { expiresIn: '1d' }
  );

  return res.json({ token });
};

module.exports = { login };
