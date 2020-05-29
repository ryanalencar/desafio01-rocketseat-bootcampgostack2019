const projects = [];

module.exports = {
  async list(req, res) {
    res.json(projects);
  },

  async create(req, res) {
    const { id, title, tasks } = await req.body;

    const project = {
      id,
      title,
      tasks: [],
    };

    projects.push(project);

    return res.json(projects);
  },

  async edit(req, res) {
    const { id } = await req.params;
    const { title } = await req.body;

    const project = projects.find((p) => p.id == id);

    project.title = title;

    res.json(project);
  },

  async delete(req, res) {
    const { id } = await req.params;

    const project = projects.findIndex((p) => p.id == id);

    projects.splice(project, 1);

    res.json(projects);
  },

  async createTask(req, res) {
    const { id } = await req.params;

    res.json({ message: `creating a new task for the project number ${id}` });
  },
};
