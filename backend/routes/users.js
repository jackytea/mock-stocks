import express from "express";
const router = express.Router();

import auth from "../middleware/auth.js";
import { registerUser, loginUser, getUserInfo, updateUserName, updateUserPassword, removeUser } from "../controllers/users.js";

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/userinfo", auth, getUserInfo);
router.patch("/username", auth, updateUserName);
router.patch("/password", auth, updateUserPassword);
router.delete("/removeuser", auth, removeUser);

export default router;
