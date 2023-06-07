import { Router } from "express";
import PostController from "../Controllers/PostController.js";

const router = Router()


/**
 * @swagger
 * /posts:
 *   get:
 *     security:
 *       - BearerAuth: [Bearer]
 *     summary: Obtiene una lista paginada de posts.
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: Número de página (opcional, por defecto es 1)
 *     responses:
 *       200:
 *         description: Lista paginada de posts
 */

router.get('/',PostController.all)

router.get('/:id',PostController.find)

router.post('/',PostController.create)

router.put('/:id',PostController.update)

router.delete('/:id',PostController.destroy)



export default router