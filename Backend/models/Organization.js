import mongoose from "mongoose";

const organizationSchema = new mongoose.Schema({
    image: String
});

export default mongoose.model("Organization", organizationSchema);
