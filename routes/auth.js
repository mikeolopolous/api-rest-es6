import express from "express"
import { body } from 'express-validator'
import { login, register } from "../controllers/auth.js"
const router = express.Router()

router.post('/register', [
  body('email', 'Ingresa un correo válido').trim().isEmail(),
  body('password', 'Debe contener al menos 6 caracteres').isLength({ min: 6 })
], register)

router.post('/login', login)


export default router
