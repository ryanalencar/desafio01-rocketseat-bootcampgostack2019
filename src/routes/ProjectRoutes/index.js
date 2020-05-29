const { Router } = require("express");
const ProjectController = require("../../controllers/ProjectController");

const routes = new Router();

routes.get("/", ProjectController.list);

routes.post("/", ProjectController.create);

routes.put("/:id", ProjectController.edit);

routes.delete("/:id", ProjectController.delete);

routes.post("/:id/tasks", (req, res) => {
  res.send("create new task to the project selected");
});

module.exports = routes;
