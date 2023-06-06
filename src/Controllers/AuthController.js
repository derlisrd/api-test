import User from "../Models/User.js";
import { encryptPassword,comparePasswords } from "../Utils/bcryptUtils.js";
import { generateToken } from "../Utils/jwtUtils.js";

class AuthController{

    static login = async(req,res)=>{

        try {
            const {email,password} = req.body
            const usuario = await User.findOne({ where: { email: email } });
            if (!usuario) {
                return res.status(404).json({message:'Invalid credencials'})
            }
            
            const match = await comparePasswords(password, usuario.password);
            
            if (match) {
                const token = generateToken({ id: usuario.id });
                return res.json({token})
            } else {
                return res.status(404).json({message:'Invalid credencials'})
            }

        } catch (err) {
            return res.status(500).json(err)
        }
        
    }
    
    static register = async(req,res)=>{
        try {
            const {email,password} = req.body
            const hashedPassword = await encryptPassword(password);

            const nuevoUsuario = await User.create({
                email,
                password:hashedPassword
              });
          
           return res.json({response:true,message:nuevoUsuario})
        } catch (err) {
            return res.status(500).json(err)
        }
    }

}
export default AuthController