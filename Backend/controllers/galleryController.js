import Gallery from "../models/gallery";

//create
export const createGallery = async (req, res) => {
  try {
    const gallery = new Gallery.create(req.body);
    res.json(gallery);
  } catch (error) {
    res.status(500).json({ error: err.message });
  }
};

//Read
export const getGallery = async (req, res) => {
    const gallery = await Gallery.find();
    res.json(gallery);
};

//Update
export const updateGallery = async (req, res) => {
    const gallery = await Gallery.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(gallery);
};

//Delete
export const deleteGallery = async (req, res) => {
    await Gallery.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully"});
};
