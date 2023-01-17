import express from "express";
import { getUsers, getUserById, saveUser, updateUser, deleteUser } from "../controllers/UserController.js";

const router = express.Router();

// Lakukan route params

// route untuk mengambil semua data
router.get("/users", getUsers);

// route ambil data berdasarkan id
router.get("/users/:id", getUserById);

// route untuk melakukan post data
router.post("/users", saveUser);

// route untuk update data berdasarkan id
router.patch("/users/:id", updateUser);

// route untuk delete user berdasarkan id
router.delete("/users/:id", deleteUser);

export default router;
