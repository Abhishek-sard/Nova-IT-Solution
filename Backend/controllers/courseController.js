import Course from "../models/Course.js";

//create
export const createCourse = async (req, res) => {
    try {
        
    } catch (error) {
        res.status(500).json({error: err. message});
        
    }
};

//Read
export const getCourses = async (req, res) => {
    const courses = await Course.find();
    res.json(courses);
};

//Update
export const updateCourse = async (req, res) => {
    const course = await Course.findByIdAndUpdate(req.params.id, req.body, res.body, {new:true}); res.json(course);
};

//Delete
export const deleteCourse = async (req, res) => {
    await Course.findByIdAndDelete(req.params.id);
    res.json({message: "Deleted successfully"});

};