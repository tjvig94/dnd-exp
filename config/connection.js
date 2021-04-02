const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.DATABASE_URL) {
    sequelize = new Sequelize({
      connectionString: 'postgres://sjlumezjrothdj:23f81cc3a0fff9e6c32177231da97e1b9862da5d55e35816f94622b3bc6d5edd@ec2-52-45-73-150.compute-1.amazonaws.com:5432/damsm5mt3evnun',
      dialect: 'postgres',
      ssl: {
        rejectUnauthorized: false
      }
    });
  } else {
    sequelize = new Sequelize(
      process.env.DB_NAME,
      process.env.DB_USER,
      process.env.DB_PASSWORD,
      {
        host: 'localhost',
        dialect: 'postgres',
        port: 5432
      }
    );
  }

module.exports = sequelize;