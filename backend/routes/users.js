import express from "express";
const router = express.Router();

import auth from "../middleware/auth.js";
import { registerUser, loginUser, getUserInfo } from "../controllers/users.js";

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/userinfo", auth, getUserInfo);

export default router;
