require("express-async-errors");
const express = require("express");

//api-routes
const Brand = require("../api/routes/brand.routes");

module.exports = function (app) {
  app.use(express.json());
  app.use("/brand", Brand);
};
