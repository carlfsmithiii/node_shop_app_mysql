const Sequelize = require("sequelize");

const database = process.env.SHOP_APP_MYSQL_DB_NAME;
const user = process.env.SHOP_APP_MYSQL_USER_NAME;
const password = process.env.SHOP_APP_MYSQL_PASSWORD;

const sequelize = new Sequelize(database, user, password, {
  dialect: "mysql",
  host: "localhost",
  operatorsAliases: false
});

module.exports = sequelize;
