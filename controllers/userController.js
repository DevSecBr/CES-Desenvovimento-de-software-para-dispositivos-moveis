const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

let db = new sqlite3.Database('./mydb.sqlite3');

exports.createUser = (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  const sql = 'INSERT INTO Users (name, email, password) VALUES (?, ?, ?)';
  db.run(sql, [name, email, hashedPassword], function(err) {
    if (err) {
      return res.status(500).send({ error: err.message });
    }
    return res.status(201).send({ id: this.lastID });
  });
};

exports.loginUser = (req, res) => {
  const { email, password } = req.body;
  const sql = 'SELECT * FROM Users WHERE email = ?';
  db.get(sql, [email], (err, row) => {
    if (err) {
      return res.status(500).send({ error: err.message });
    }
    if (!row) {
      return res.status(404).send({ error: 'User not found' });
    }
    const passwordCorrect = bcrypt.compareSync(password, row.password);
    if (!passwordCorrect) {
      return res.status(401).send({ error: 'Password is incorrect' });
    }
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
        expiresIn: 86400 
      });
    res.status(200).send({ auth: true, token: token });
  });
};
