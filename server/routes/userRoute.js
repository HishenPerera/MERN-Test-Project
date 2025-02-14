import express from "express";
import { create, getAllUsers } from "../controller/userController.js";

// Call express.Router() to create a new router instance
const route = express.Router(); // Add parentheses to call the function

// Define the route
route.post("/user", create);
route.get("/user", getAllUsers);

export default route;