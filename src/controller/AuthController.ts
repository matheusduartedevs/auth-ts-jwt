import { Request, Response } from "express";
import { prisma } from "../utils/prisma";
import { compare, hash } from "bcryptjs";
import { sign } from "jsonwebtoken";

export class AuthController {
    async authenticate(req: Request, res: Response) {
        const { email, password } = req.body

        const user = await prisma.user.findUnique({ where: { email } })

        if (!user) {
            return res.json({ error: 'User not found' })
        }

        const isPasswordValid = await compare(password, user.password)

        if (!isPasswordValid) {
            return res.json({ error: 'Invalid password' })
        }

        const token = sign({ id: user.id }, 'secret', { expiresIn: '1d' })

        const { id } = user

        return res.json({ id, user, token })
    }
}