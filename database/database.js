import { Sequelize } from "sequelize";

const sequelize = new Sequelize("bikeshop_db", "postgres", "Camiloignacio1", {
  host: "localhost",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    require: 30000,
    idle: 10000,
  },
});

export default sequelize;
