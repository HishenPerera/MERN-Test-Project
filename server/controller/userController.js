import User from "../model/userModel.js";

// Create a new user
export const create = async (req, res) => {
    try {
        const newUser  = new User(req.body);
        const { email } = newUser ;

        const userExist = await User.findOne({ email });

        if (userExist) {
            return res.status(409).json({ message: "User  already exists." });
        }

        const savedData = await newUser .save();
        res.status(201).json(savedData); // Use 201 for resource creation
    } catch (error) {
        res.status(500).json({ errorMessage: error.message });
    }
};

// Read all users
export const getAllUsers = async (req, res) => {
    try {
        const userData = await User.find();
        if (!userData || userData.length == 0) {
            return res.status(404).json({message: "User data not found."})
        }

        res.status(200).json(userData);
    } catch (error) {
        res.status(500).json({ errorMessage: error.message });
    }
};

// // Read a single user by ID
// export const getUser ById = async (req, res) => {
//     const { id } = req.params;
//     try {
//         const user = await User.findById(id);
//         if (!user) {
//             return res.status(404).json({ message: "User  not found." });
//         }
//         res.status(200).json(user);
//     } catch (error) {
//         res.status(500).json({ errorMessage: error.message });
//     }
// };

// // Update a user by ID
// export const updateUser  = async (req, res) => {
//     const { id } = req.params;
//     try {
//         const updatedUser  = await User.findByIdAndUpdate(id, req.body, { new: true });
//         if (!updatedUser ) {
//             return res.status(404).json({ message: "User  not found." });
//         }
//         res.status(200).json(updatedUser );
//     } catch (error) {
//         res.status(500).json({ errorMessage: error.message });
//     }
// };

// // Delete a user by ID
// export const deleteUser  = async (req, res) => {
//     const { id } = req.params;
//     try {
//         const deletedUser  = await User.findByIdAndDelete(id);
//         if (!deletedUser ) {
//             return res.status(404).json({ message: "User  not found." });
//         }
//         res.status(200).json({ message: "User  deleted successfully." });
//     } catch (error) {
//         res.status(500).json({ errorMessage: error.message });
//     }
// };