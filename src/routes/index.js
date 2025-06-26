import { login } from "../controllers/AuthController.js";
import express from "express";
import { getUsers } from "../controllers/UserController.js";

const router = express.Router();

router.get("/users", getUsers);
router.post("/login", login);

export default router;
