const Post = require('../models/postModel')
const User = require('../models/userModel')
const path = require('path')
const fs = require ('fs')
const {v4: uuid} = require('uuid')
const HttpError = require('../models/errorModel')
const { error } = require('console')
const { post } = require('../routes/postRoutes')



// cretae a post
// POST: api/posts
//Protected
const createPost = async (req,res,next)=>{

try{
    let {title, category, description}=req.body;
    if(!title || !category || !description||!req.files)
        {
            return next(new HttpError("Fill in all the fields  and choose thumbnail.",422))
        }

        const {thumbnail} = req.files;
        //check the file size
        if(thumbnail.size > 2000000){
            return next(new HttpError("Thumbnail too big. File should be less than 2mb"))
        }

        let fileName = thumbnail.name;
        let splittedFilename= fileName.split('.')
        let newFilename= splittedFilename[0] + uuid() + "." + splittedFilename[splittedFilename.length-1]
        thumbnail.mv(path.join(__dirname, '..', '/uploads', newFilename), async(err)=>{
            if(err){
                return next(new HttpError(err) )
            }
            else{
                const newPost = await Post.create({title, category, description, thumbnail: newFilename, creator:req.user.id})
                if(!newPost){
                    return next(new HttpError("Post couldnt be created.",422))
                }

                // find user and increase post count by 1
                const currentUser = await User.findById(req.user.id);
                const userPostCount= currentUser.posts+1;
                await User.findByIdAndUpdate(req.user.id, {posts: userPostCount})

                res.status(201).json(newPost)
            }
        })

}
catch(error)
{
    return next(new HttpError(error))
}

}


// get single post
// GET: api/posts/:id 
//Protected
const getPost = async (req,res,next)=>{
    try{
        const postId= req.params.id;
        const post = await Post.findById(postId);
        if(!post){
            return next(new HttpError("Post not found.",404))
        }
        res.status(200).json(post)
    }
    catch(error)
    {
        return next(new HttpError(error))
    }
}




// get a post
// POST: api/posts
//Protected
const getPosts = async (req,res,next)=>{
    try{
        const posts= await Post.find().sort({updatedAt:-1})
        res.status(200).json(posts)

    }
    catch(error)
    {
        return next(new HttpError(error))
    }

}



// gET PoSTS bY Category
//GET: api/posts/categories/:category
//UNProtected
const getCatposts = async (req,res,next)=>{
    try{
        const {category} = req.params;
        const catPosts= await Post.find({category}).sort({createdAt:-1})
        res.status(200).json(catPosts)
    }
    catch(error)
    {
        return next(new HttpError(error))
    }
}







// get user/author post
// POST: api/posts/users/:id
//UNProtected
const getUserPost = async (req,res,next)=>{
    try{
        const {id} = req.params;
        const posts= await Post.find({creator: id}).sort({createdAt:-1})
        res.status(200).json(posts)
    }
    catch(error)
    {
        return next(new HttpError(error))
    }
}



// edit  post
// POST: api/posts/:id
//Protected
const editPost = async (req,res,next)=>{
    try{
        let fileName;
        let newFilename;
        let updatedPost;
        const postId = req.params.id;
        let (title, category, description) = req.body;

        if(!title||!category || description.length<12)
            {
                return next(new HttpError("Fill in all fields",422))
            }

            if(!req.files)
                {
                    updatedPost= await Post.findByIdAndUpdate(postId,{title,category,description},{new:true})
                }

                else{
                    const oldPost= await Post.findById(postId);
                    if(req.user.id == oldPost.creator){
                        if(!req.files){
                            updatedPost=await Post.findByIdAndUpdate(postId,{title,category,description},{new: true})
                        }
                    }
                    else{
                    fs.unlink(path.join(__dirname, '..','uploads', oldPost.thumbnail),async (err)=>{
                            if(err)
                                {
                                    return next(new HttpError(err))
                                }
                               
                })

                const {thumbnail} = req.files;
                if(thumbnail.size > 20000000)
                    {
                        return next(new HttpError("Thumbnail too big. should be less than 2mb"))
                    }
                    fileName = thumbnail.name;
                    let splittedFilename = fileName.split('.')
                    newFilename = splittedFilename[0]+ uuid() + "." +splittedFilename[splittedFilename.length -1]
                    thumbnail.mv(path.join(__dirname, '..', 'uploads', newFilename), async (err)=>{
                        if(err)
                            {
                                return next(new HttpError(err))

                            }
                    })

                    updatedPost = await Post.findByIdAndUpdate(postId,{title,category,description,thumbnail:newFilename},{new: true})
        }
    }
        if(!updatedPost){
            return next(new HttpError("Couldnt update post",400))
        }
        res.status(200).json(updatedPost)
    }
    catch(error)
    {
        return next(new HttpError(error))
    }

}



// edit a post
// POST: api/posts:id
//Protected
const deletePost = async (req,res,next)=>{
    try{
        const postId = req.params.id;
        if(!postId)
            {
                return next(new HttpError("Post unavaliable.",400))
            }
            const post = await Post.findById(postId);
            const fileName=post?.thumbnail;
            if(req.user.id == post.creator){
            fs.unlink(path.join(__dirname, '..', 'uploads', fileName),async(err)=>{
                if(err)
                    {
                        return next(new HttpError(err))
                    }
                    else{
                        await Post.findByIdAndDelete(postId);
                        const currentUser = await User.findById(req.user.id);
                        const userPostCount = currentUser?.posts - 1;
                        await User.findByIdAndUpdate(req.user.id, {posts: userPostCount})
                        res.join(`Post ${postId} deleted successfully.`)
                    }
                    
                
            } )
      

    } else{
        return next(new HttpError("Post couldn't be deleted",403))
    }
}
    
    
    catch(error)
    {
        return next(new HttpError(err))
    }
}


module.exports= {createPost,getPosts,getPost,getCatposts,getUserPost,editPost,deletePost}