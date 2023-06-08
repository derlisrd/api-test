import Post from "../Models/Post.js"

class PostController{


    static find = async(req,res)=>{
        try {
            const {id} = req.params
            let post = await Post.findByPk(id)
            if(post){
                return res.json(post)
            }
            return res.status(404).json({response:false,message:'Post not found'})
        } catch (err) {
            return res.status(500).json({response:false,message:err})
        }
    }

    static all = async(req,res)=>{
        try {
            let { page=1, limit=10, sortBy = 'createdAt', sortOrder = 'DESC' } = req.query;

            const posts = await Post.findAll({
                offset: (page - 1) * limit,
                limit: +limit,
                order: [[sortBy, sortOrder]],
              });
            return res.json(posts)
        } catch (err) {
            return res.status(500).json({response:false,message:err})
        }
    }

    static create = async(req,res)=>{
        try {
            const {title,body} = req.body

            let inserted = await Post.create({
                title,body
            })

            return res.status(201).json(inserted)

        } catch (err) {
            return res.status(500).json({response:false,message:err})
        }
    }

    static update = async(req,res)=>{
        try {
            const {id} = req.params
            const {title,body} = req.body
            let post = await Post.findByPk(id);
            if (post) {
                let updated = await post.update({title,body});
                return res.json(updated)
            } else {
                return res.status(404).json({response:false,message:'Post not found'})
            }
        } catch (err) {
            return res.status(500).json({response:false,message:err})
        }
    }

    static destroy = async(req,res)=>{
        try {
            const {id} = req.params
            let post = await Post.findByPk(id);
            if (post) {
                let deleted = await post.destroy();
                if(deleted){
                    return res.json({response:true,message:'Post borrado correctamente'})
                }
            } else {
                return res.status(404).json({response:false,message:'Post not found'})
            }

        } catch (err) {
            return res.status(500).json({response:false,message:err})
        }
    }


}

export default PostController