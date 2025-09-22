import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {type: String, required: true},
    password: {type: String, required: true},
    role: {type: String, default: "admin"}
});

export default mongoose.model("User", userSchema);