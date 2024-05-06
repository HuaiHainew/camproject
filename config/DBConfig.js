const Sequelize = require("sequelize");

require("dotenv").config();

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'mysql',  // Make sure your Heroku MySQL addon supports this, or switch to 'postgres' if using Heroku Postgres
  protocol: 'mysql',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false // Only necessary for PostgreSQL; remove for MySQL unless SSL is specifically needed
    }
  },
  logging: false,
});

module.exports = sequelize;
