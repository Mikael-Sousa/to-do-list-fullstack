const connection = require('./connection');

const findByEmail = async (email) => {
  const [rows] = await connection.execute(
    'SELECT * FROM users WHERE email = ?',
    [email]
  );
  return rows[0];
};

module.exports = { findByEmail };