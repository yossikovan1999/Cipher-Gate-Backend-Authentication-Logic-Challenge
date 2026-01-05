import express from "express";
import * as userService from "../services/userService.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/signup", async (req, res, next) => {
  try {
    const { username, password } = req.body;

    await userService.signUp(username, password);

    return res.status(201).json({ message: "user added successfully." });
  } catch (error) {
    next(error);
  }
});

router.post("/verify", authMiddleware, (req, res, next) => {
  try {
    return res.status(200).json({ message: "user authorized" });
  } catch (error) {
    next();
  }
});

export default router;
