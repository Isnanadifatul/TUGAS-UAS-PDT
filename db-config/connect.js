const Sequelize = require('sequelize');

// database connection
const connection = new Sequelize(
  'mydatabase',
  'root',
  'rootpassword',
  {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
  },
);

module.exports.connect = connection;