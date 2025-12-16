const registerMiddleware = (req, res, next) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({
      message: "username, email e password são obrigatórios",
    });
  }

  if (username.length < 3) {
    return res.status(400).json({
      message: "username deve ter no mínimo 3 caracteres",
    });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      message: "Email inválido",
    });
  }

  if (password.length < 6) {
    return res.status(400).json({
      message: "A senha deve ter no mínimo 6 caracteres",
    });
  }

  next();
};

module.exports = registerMiddleware;
