const projects = require("./projects.json");

module.exports = {
  allProjects: (req, res) => {
    res.status(200).send(projects);
  },
};
