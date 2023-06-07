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
 *       401:
 *          description: El token es inválido
 */

/**
 * @swagger
 * /posts/{id}:
 *   get:
 *     security:
 *       - BearerAuth: [Bearer]
 *     summary: Obtiene un post específico por el id.
 *     parameters:
 *       - name: id
 *         in: path
 *         schema:
 *           type: integer
 *         description: Id de post en específico
 *     responses:
 *       200:
 *         description: Un post
 *       401:
 *          description: El token es inválido
 *       404:
 *          description: Post no existe
 */

/**
 * @swagger
 * /posts:
 *   post:
 *     security:
 *       - BearerAuth: [Bearer]
 *     summary: Crea un nuevo post.
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: Número de página (opcional, por defecto es 1)
 *     responses:
 *       200:
 *         description: Lista paginada de posts
 *       401:
 *          description: El token es inválido
 */

/**
 * @swagger
 * /posts:
 *   put:
 *     security:
 *       - BearerAuth: [Bearer]
 *     summary: Actualiza un post específico por id.
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: Número de página (opcional, por defecto es 1)
 *     responses:
 *       200:
 *         description: Lista paginada de posts
 *       401:
 *          description: El token es inválido
 */

/**
 * @swagger
 * /posts:
 *   delete:
 *     security:
 *       - BearerAuth: [Bearer]
 *     summary: Borra un post específico por id.
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: Número de página (opcional, por defecto es 1)
 *     responses:
 *       200:
 *         description: Lista paginada de posts
 *       401:
 *          description: El token es inválido
 */

router.get('/',PostController.all)

router.get('/:id',PostController.find)

router.post('/',PostController.create)

router.put('/:id',PostController.update)

router.delete('/:id',PostController.destroy)



export default router