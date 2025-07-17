import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Application, Express } from "express";

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Meeting Room Booking API",
    version: "1.0.0",
    description: "API documentation for managing rooms and bookings",
  },
  servers: [
    {
      url: "http://localhost:5000",
      description: "Local server",
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
  },
  security: [{ bearerAuth: [] }],
};

const options = {
  swaggerDefinition,
  apis: ["./src/routes/*.ts", "./src/docs/schemas.ts", "./src/docs/room.docs.ts", "./src/docs/booking.docs.ts", "./src/docs/auth.docs.ts"],
};

const swaggerSpec = swaggerJsdoc(options);

export const setupSwaggerDocs = (app: Application): void => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
