const Sequelize = require('sequelize');
const CustomerModel = require('./model/customer-sequelize');
const AccountModel = require('./model/account-sequelize');

const sequelize = new Sequelize('bootcamp', 'root', 'admin123', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

const Customer = CustomerModel(sequelize, Sequelize);
const Account = AccountModel(sequelize, Sequelize);

Account.belongsTo(Customer, {foreignKey: 'customer_number'});
Customer.hasMany(Account, {foreignKey: 'customer_number'});

module.exports = {
  Customer,
  Account
};
