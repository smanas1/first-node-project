const TaskModel = require("../models/TaskModels");

module.exports.getTask = async (req, res) => {
  const tasks = await TaskModel.find();
  res.send(tasks);
};

module.exports.saveTask = async (req, res) => {
  const { task } = req.body;

  TaskModel.create({ task })
    .then((data) => {
      console.log("Saved Successfully..");
      res.status(201).send(data);
    })
    .catch((err) => {
      console.log(err);
      res.send({ error: err, msg: "Something Went Worng" });
    });
};

module.exports.updateTask = async (req, res) => {
  const { task } = req.body;
  const { id } = req.params;

  TaskModel.findByIdAndUpdate(id, { task })
    .then(() => res.send("updated successfully"))
    .catch((err) => {
      console.log(err);
      res.send({ error: err, msg: "Something Went Worng" });
    });
};

module.exports.deleteTask = async (req, res) => {
  const { id } = req.params;

  TaskModel.findByIdAndDelete(id)
    .then(() => res.send("Delete successfully"))
    .catch((err) => {
      console.log(err);
      res.send({ error: err, msg: "Something Went Worng" });
    });
};
