import mongoose from "mongoose";

const gallerySchema = new mongoose.Schema({
  image: String,
});

export default mongoose.model("Gallery", gallerySchema);
