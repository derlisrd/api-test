import { Router } from "express";
import PostController from "../Controllers/PostController.js";

const router = Router()




router.get('/',PostController.all)

router.get('/:id',PostController.find)

router.post('/',PostController.create)

router.put('/:id',PostController.update)

router.delete('/:id',PostController.destroy)



export default router