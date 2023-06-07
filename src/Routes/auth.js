import { Router } from "express";
import AuthController from "../Controllers/AuthController.js";

const router = Router()

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Inicio de sesión de usuario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 description: Dirección de correo electrónico del usuario.
 *               password:
 *                 type: string
 *                 format: password
 *                 description: Contraseña del usuario.
 *             required:
 *               - email
 *               - password
 *     responses:
 *       200:
 *         description: Inicio de sesión exitoso. Devuelve el token de acceso.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: Token de acceso para autenticación.
 *       401:
 *         description: Credenciales inválidas. No se pudo iniciar sesión.
 *       500:
 *         description: Error interno del servidor al intentar iniciar sesión.
  * /auth/register:
 *   post:
 *     summary: Registro de usuario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 description: Dirección de correo electrónico del usuario.
 *               password:
 *                 type: string
 *                 format: password
 *                 description: Contraseña del usuario.
 *             required:
 *               - email
 *               - password
 *     responses:
 *       200:
 *         description: Registro existoso.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 response:
 *                   type: boolean
 *                   description: Respuesta si todo fue exitoso.
 *       401:
 *         description: Credenciales inválidas. No se pudo iniciar sesión.
 *       500:
 *         description: Error interno del servidor al intentar iniciar sesión.
 */

router.post('/login',AuthController.login)

router.post('/register',AuthController.register)


export default router