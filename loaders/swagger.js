const swaggerUI = require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc");

module.exports = function (app) {
  //declaring swagger docs
  const options = {
    definition: {
      openapi: "3.0.3",
      info: {
        title: "App Name",
        version: "1.0.0",
        description: "Node js App!",
      },
      servers: [
        {
          url: "http://localhost:5000",
        },
      ],
    },
    apis: ["../api/routes/*.js"],
  };

  const specs = swaggerJSDoc(options);
  app.use(
    "/api-docs",
    swaggerUI.serve,
    swaggerUI.setup(specs, {
      swaggerOptions: {
        docExpansion: "none",
      },
    })
  );
};
