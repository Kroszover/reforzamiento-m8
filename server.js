import express from "express";
import cors from "cors";

const app = express();

//midleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//routes
app.all("*", (req, res) => {
  res.status(404).send("Ruta desconocida");
});

export default app;
