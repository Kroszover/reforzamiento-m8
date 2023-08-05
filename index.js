import sequelize from "./database/database.js";
import app from "./server.js";

(async () => {
  console.log("iniciando aplicación...");
  await sequelize.authenticate();
  console.log("conexión establecida con la base de datos");
  app.listen(3000);
  console.log("servidor escuchando en puerto 3000");
})();
