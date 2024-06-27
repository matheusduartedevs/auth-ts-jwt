import { Router } from "express";
import { UserController } from "./controller/UserController";
import { AuthController } from "./controller/AuthController";

export const router = Router()

const usecontroller = new UserController()
const authcontroller = new AuthController()

router.get('/users', usecontroller.index)
router.post('/create', usecontroller.store)
router.post('/auth', authcontroller.authenticate)