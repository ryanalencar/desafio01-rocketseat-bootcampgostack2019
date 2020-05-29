const ProjectController = require("../controllers/ProjectController");

const { projects } = ProjectController;

module.exports = {
  async checkIfProjectExists(req, res, next) {
    const { id } = await req.params;

    const project = projects.find((p) => p.id == id);

    if (!project) {
      return res.status(400).json({ error: "Project not found" });
    }

    return next();
  },
  async logRequests(req, res, next) {
    console.count("Requests");

    return next();
  },
};
