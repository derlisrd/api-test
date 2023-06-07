import Post from "../Models/Post.js"

class PostController{


    static find = async(req,res)=>{
        try {
            const {id} = req.params
            let post = await Post.findByPk(id)
            if(post){
                return res.json(post)
            }
            return res.status(404).json({message:'Not found'})
        } catch (err) {
            return res.status(500).json(err)
        }
    }

    static all = async(req,res)=>{
        try {
            let { pagina, limite } = req.query;

            // Valores predeterminados
            pagina = pagina ? parseInt(pagina) : 1;
            limite = limite ? parseInt(limite) : 10;

            const offset = (pagina - 1) * limite;
            let posts = await Post.findAll({
                offset,
                limit:limite
            })
            return res.json(posts)
        } catch (err) {
            return res.status(500).json(err)
        }
    }

    static create = async(req,res)=>{
        try {
            const {title,body} = req.body

            let inserted = await Post.create({
                title,body
            })

            return res.json(inserted)

        } catch (err) {
            return res.status(500).json(err)
        }
    }

    static update = async(req,res)=>{
        try {
            const {id} = req.params
            const {body} = req
            let post = await Post.findByPk(id);
            if (post) {
                let updated = await post.update(body);
                return res.json({updated})
            } else {
                return res.status(404).json({message:'Post not found'})
            }
        }catch (err) {
            return res.status(500).json(err)
        }
    }

    static destroy = async(req,res)=>{
        try {
            const {id} = req.params
            let post = await Post.findByPk(id);
            if (post) {
                let deleted = await post.destroy();
                return res.json({deleted})
            } else {
                return res.status(404).json({message:'Post not found'})
            }

        } catch (err) {
            return res.status(500).json(err)
        }
    }


}

export default PostController