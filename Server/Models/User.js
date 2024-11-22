import { Schema, model } from "mongoose";

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        message: "Email required",
    },
    password: {
        type: String,
        minLength: 6,
        maxLength: 20,
        required: true,
        message: "Password required",
    },
    tasks: [
        {
            type: Schema.Types.ObjectId,
            ref: "Task",
        },
    ],
});

export default model("User", userSchema);