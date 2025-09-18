import Organization from '../models/Organization.js';

//Create
export const createOrganization = async (req, res) => {
    try {
        
    } catch (error) {
        res.status(500).json({error: err.message});
        
    }
};

//Read
export const getOrganizations = async (req, res) => {
    const organizations = await Organization.find();
    res.json(organizations);
};

//Update
export const updateOrganization = async (req, res) => {
    const organization = await Organization.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.json(organization);
};


//Delete
export const deleteOrganization = async (req, res) => {
    await Organization.findByIdAndDelete(req.params.id);
    res.json({message: "Deleted successfully"});
};