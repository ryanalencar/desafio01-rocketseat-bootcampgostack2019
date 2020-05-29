const { Router } = require("express");

const ProjectRoutes = require("./ProjectRoutes");

const routes = new Router();

routes.use("/projects", ProjectRoutes);

module.exports = routes;
