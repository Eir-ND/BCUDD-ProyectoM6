// Importar las librerías necesarias
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const path = require("path");
const routes = require("./routes");
require("dotenv").config();

// Swagger
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");

// Swagger: Definimos el puerto de la aplicación
const port = process.env.PORT || 3000;
const serverUrl = process.env.serverUrl || `http://localhost:${port}`;

const swaggerSpec = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Auth - MongoDB",
      version: "1.0.0",
    },
    servers: [
      {
        url: serverUrl,
      },
    ],
    components: {
      securitySchemes: {
        ApiKeyAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
  },
  apis: [`${path.join(__dirname, "./routes/*.js")}`],
};

// Creamos nueva instancia de Express
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  "/api-doc",
  swaggerUI.serve,
  swaggerUI.setup(swaggerJsDoc(swaggerSpec))
);
app.use(process.env.URL_BASE + "/", routes);

connectDB();

// Iniciamos el servidor en el puerto definido
app.listen(port || 3000, () => {
  console.log(`Listen in port: ${port}`);
});
