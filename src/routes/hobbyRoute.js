import { Router } from "express";
import {
    getHobby,
    getHobbyById,
    createHobby,
    updateHobby,
    deleteHobby,
    getHobbyByUserId,
} from "../controllers/hobbyController.js";
const router = Router();

router.get("/hobby", getHobby);
router.get("/hobby/:id", getHobbyById);
router.get("/hobby/user/:id", getHobbyByUserId);
router.post("/hobby", createHobby);
router.put("/hobby/:id", updateHobby);
router.delete("/hobby/:id", deleteHobby);

export default router;
