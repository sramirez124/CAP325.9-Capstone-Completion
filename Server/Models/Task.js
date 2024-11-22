import { Schema, model } from "mongoose";

const taskSchema = new Schema({
    title: {
        type: String,
        required: true,
        message: "Title required",
    },
    description: {
        type: String,
        required: false,
        message: "Description required",
    },
    priority: {
        type: String,
        required: false,
        message: "Priority required",
    },
    dueDate: {
        type: Date,
        required: false,
        message: "Due Date required",
    }
})

export default model("Task", taskSchema);
