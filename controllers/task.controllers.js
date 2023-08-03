const Task = require('../models/task.models')


const createTask = async (req, res) => {
    const { title, description, deadline } = req.body;

    try {
        if (!title || !description || !deadline) {
            return res.status(400).json({ msg: "Not all fields have been entered" })
        }
        const newTask = new Task({
            title,
            description,
            deadline
        });
        await newTask.save();
        res.status(200).json({ messgae: "task created succesfully", task: newTask });

    } catch (error) {
        res.status(500).json({ error: error.message })
        console.log(error)
    }
}


const deleteTask = async (req, res) => {
    const { TaskID } = req.params;
    try {
        const task = await Task.findById(TaskID);
        if (!task) {
            return res.status(400).json({ msg: "No task found with this ID" })
        }
        const deletedTask = await Task.findByIdAndDelete(TaskID);

        res.status(200).json({ msg: "Task deleted succesfully", task: deletedTask })
    } catch (error) {
        res.status(500).json({ error: error.message })
        console.log(error)
    }
}

const updateTask = async (req, res) => {
    const { TaskID } = req.params;
    const { title, description, deadline, completed } = req.body;
    try {
        const task = await Task.findById(TaskID);
        if (!task) {
            return res.status(400).json({ msg: "No task found with this ID" })
        }
        const newTask = await Task.findByIdAndUpdate(TaskID, {
            title,
            description,
            deadline,
            completed
        }, { new: true });

        await newTask.save();

        res.status(200).json({ msg: "Task updated succesfully", task: newTask })

    } catch (error) {
        res.status(500).json({ error: error.message })
        console.log(error)
    }

}

const getTask = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json({ message: "Task fetched successfully", tasks: tasks })
    } catch (error) {
        res.status(500).json({ error: error.message })
        console.log(error)
    }
}

module.exports = {
    createTask,
    deleteTask,
    updateTask,
    getTask
}
