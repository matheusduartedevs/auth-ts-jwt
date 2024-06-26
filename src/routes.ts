import { Router } from "express";
import { UserController } from "./controller/UserController";

export const router = Router()

const usecontroller = new UserController()

router.get('/users', usecontroller.index)
router.post('/create', usecontroller.store)