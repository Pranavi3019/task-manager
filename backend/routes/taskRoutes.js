const express = require("express");

const router = express.Router();

const mongoose = require("mongoose");


// Task Schema

const taskSchema = new mongoose.Schema({

  title: {
    type: String,
    required: true,
  },

  status: {
    type: String,
    required: true,
  },

  priority: {
    type: String,
    required: true,
  },

  dueDate: {
    type: String,
    required: true,
  },

});


// Task Model

const Task = mongoose.model(
  "Task",
  taskSchema
);


// GET TASKS

router.get("/", async (req, res) => {

  try {

    const tasks = await Task.find();

    res.json(tasks);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: error.message,
    });

  }

});


// ADD TASK

router.post("/", async (req, res) => {

  try {

    console.log(req.body);

    const task = new Task({

      title: req.body.title,

      status: req.body.status,

      priority: req.body.priority,

      dueDate: req.body.dueDate,

    });

    const savedTask =
      await task.save();

    res.status(201).json(savedTask);

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: error.message,
    });

  }

});


// DELETE TASK

router.delete("/:id", async (req, res) => {

  try {

    await Task.findByIdAndDelete(
      req.params.id
    );

    res.json({
      message: "Task Deleted",
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: error.message,
    });

  }

});

module.exports = router;