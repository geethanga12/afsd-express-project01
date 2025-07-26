const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Geeth#sql123',
  database: 'afsd_express'
})

connection.connect()

const saveCustomer = (req, res) => {
  connection.query('insert into customer(name, email, address) values(?, ?, ?)', [req.body.name, req.body.email, req.body.address], (err, rows) => {
    if (err) throw err;
    res.send(rows);
  });
};

const deleteCustomer = (req, res) => {
  connection.query('delete from customer where id = ?', [req.params.id], (err, rows) => {
    if (err) throw err;
    res.send(rows);
  });
};

const getAllCustomer = (req, res) => {
  connection.query('select * from customer', (err, rows) => {
    if (err) throw err;
    res.send(rows);
  });
};

const updateCustomer = (req, res) => {
  connection.query('update customer set name = ?, email = ?, address = ? where id = ?', [req.body.name, req.body.email, req.body.address, req.params.id], (err, rows) => {
    if (err) throw err;
    res.send(rows);
  });
};

const getCustomerById = (req, res) => {
  connection.query('select * from customer where id = ?', [req.params.id], (err, rows) => {
    if (err) throw err;
    res.send(rows);
  });
};

module.exports = {
  saveCustomer,
  deleteCustomer,
  getAllCustomer,
  updateCustomer,
  getCustomerById,
};
