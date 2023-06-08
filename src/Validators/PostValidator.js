import { check } from "express-validator";
import { ValidateResult } from "../Helpers/ValidateHelpers.js";


const PostValidator = {

    create: [
        check('title')
        .exists().withMessage('Debe tener un campo de title')
        .isEmpty().withMessage('No debe ser vacio'),
        check('body').exists().withMessage('Debe tener un campo de body')
        .notEmpty().withMessage('El body no debe ser vacio'),
        (req,res,next)=>{
            ValidateResult(req,res,next)
        }
    ]    
}
export default PostValidator