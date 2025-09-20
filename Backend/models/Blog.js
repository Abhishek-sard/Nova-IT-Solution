import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    Date: Date,
    author: String,
    description: String,
});
export default mongoose.model("Blog", blogSchema);


