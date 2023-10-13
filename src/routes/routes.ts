import { getUsers } from "../controllers/userCtrl";
import { Router } from "express";

const router = Router()

router.get('/users', getUsers)

export default router;