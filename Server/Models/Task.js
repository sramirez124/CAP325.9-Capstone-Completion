import { Schema, model } from "mongoose";

const taskSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    priority: {
        type: Number,
        required: false,
    },
    dueDate: {
        type: Date,
        required: false,
    }
})

const TaskModel = model('Task', taskSchema)
export default TaskModel