import { Router } from "express";
import { UserController } from "./controller/UserController";

export const router = Router()

const usecontroller = new UserController()

router.post('/create', usecontroller.store)