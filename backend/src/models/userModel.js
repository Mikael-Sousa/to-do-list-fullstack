const connection = require('./connection');

const findByEmail = async (email) => {
  const [rows] = await connection.execute(
    'SELECT * FROM users WHERE email = ?',
    [email]
  );
  return rows[0];
};

const registerNewUser = async ( username, email, password) => {
  const [registeredUser] = await connection.execute(
    'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
    [username, email, password]
  );
  return { insertId: registeredUser.insertId};
}

module.exports = {
  findByEmail,
  registerNewUser
};