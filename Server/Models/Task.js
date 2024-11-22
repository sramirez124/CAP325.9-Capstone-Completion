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
    },
    priority: {
        type: Number,
        required: false,
    },
    dueDate: {
        type: Date,
        required: false,
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    
})

export default model("Task", taskSchema);
