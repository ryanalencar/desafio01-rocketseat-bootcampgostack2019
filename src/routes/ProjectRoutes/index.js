const { Router } = require("express");
const middlewares = require("../../middlewares");

const { checkIfProjectExists, logRequests } = middlewares;

const ProjectController = require("../../controllers/ProjectController");

const routes = new Router();

routes.use(logRequests);

routes.get("/", ProjectController.list);
routes.post("/", ProjectController.create);
routes.put("/:id", checkIfProjectExists, ProjectController.edit);
routes.delete("/:id", checkIfProjectExists, ProjectController.delete);
routes.post("/:id/tasks", checkIfProjectExists, ProjectController.createTask);

module.exports = routes;
