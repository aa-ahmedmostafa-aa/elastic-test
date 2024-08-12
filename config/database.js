const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('elastic-test', 'ahmed', 'Ahmed@1234', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;