import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "API de Node Js con MySQL",
    version: "1.0.0",
    description: "Documentación de la API de Node Mysql",
  },
  securityDefinitions: {
    BearerAuth: {
      type: 'apiKey',
      name: 'Authorization',
      in: 'header',
      scheme: 'bearer',
      bearerFormat: 'JWT',
    },
  },
  servers: [
    {
      url: "http://localhost:3030",
      description: "Server de testeo",
    },
  ],
};


// Documentación de Swagger
const opciones = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Posts',
      version: '1.0.0',
      description: 'API para obtener posts paginados',
    },
    components:{
      securitySchemes : {
        BearerAuth: {
          type: 'http',
          name: 'Authorization',
          in: 'header',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    }
  },
  apis: ["./src/Routes/*.js"],
};



const swaggerSpec = swaggerJSDoc(opciones);

export const setupSwagger = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};