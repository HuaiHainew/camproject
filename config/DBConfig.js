const Sequelize = require('sequelize'); // Ensures Sequelize is properly imported
require('dotenv').config(); // This will load all the environment variables from your .env file

// Instantiates Sequelize with database parameters from environment variables
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PWD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres',  // Specifies that you are using PostgreSQL
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false // CAUTION: for production you will want this to be true
      }
    },
    logging: false,  // Disables logging for production
    pool: {  // Optional: Configures the connection pool
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
  }
);

module.exports = sequelize;  // Exports the Sequelize instance to be used in other parts of the app
