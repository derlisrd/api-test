import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "API de Node Js con MySQL",
    version: "1.0.0",
    description: "Documentación de la API de Node Mysql",
  },
  servers: [
    {
      url: "http://localhost:3030",
      description: "Server de testeo",
    },
  ],
};

const options = {
  swaggerDefinition,
  apis: ["./src/Routes/*.js"], // Ruta de los archivos de rutas de Express
};

const swaggerSpec = swaggerJSDoc(options);

export const setupSwagger = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};