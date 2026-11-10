import { Router } from "express";

import {
  getAllUsers,
  getUserById
} from "../controllers/UserControllers.js";

import { requireAPIKey } from "../middleware/authMiddleware.js";

const router = Router();

router.get("/", requireAPIKey, getAllUsers);
router.get("/:id", requireAPIKey, getUserById);

export default router;