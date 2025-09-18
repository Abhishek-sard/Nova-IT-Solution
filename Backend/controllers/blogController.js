import Blog from "../models/Blog";

//Create 
export const createBlog = async (req, res) => {
    try {
        const blog = await Blog.create(req.body);
        res.json(blog);
        
    } catch (error) {
        res.status(500).json({ error: err. message});
        
    };

};

//Read
export const getBlogs = async (req, res) => {
    const courses = await Blog.find();
    res.json(courses);
};

//Update
export const updateBlog = async (req, res) => {
    const bolg = await Blog.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.json(blog);
};

//Delete
export const deleteBlog = async (req, res) => {
    await Blog.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully"})
};
