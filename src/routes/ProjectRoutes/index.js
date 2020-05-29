const { Router } = require("express");

const routes = new Router();

routes.get("/", (req, res) => {
  res.send("projects");
});

routes.post("/projects", (req, res) => {
  res.send("new project");
});

routes.put("/projects/:id", (req, res) => {
  res.send("edit project selected");
});

routes.delete("/projects/:id", (req, res) => {
  res.send("delete project selected");
});

routes.post("/project/:id/tasks", (req, res) => {
  res.send("create new task to the project selected");
});

module.exports = routes;
