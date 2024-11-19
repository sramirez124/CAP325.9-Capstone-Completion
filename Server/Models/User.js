import { Schema, model } from "mongoose";

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        message: "Username required",
    },
    password: {
        type: String,
        minLength: 6,
        maxLength: 20,
        required: true,
        message: "Password required",
    },
    email: {
        type: String,
        required: true,
        unique: true,
        message: "Email required",
    },
    tasks: [
        {
            type: Schema.Types.ObjectId,
            ref: "Task",
        },
    ],
});

export default model("User", userSchema);