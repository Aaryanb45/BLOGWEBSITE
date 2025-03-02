const {Router} = require('express') 

const {createPost,getPosts,getPost,getCatposts,getUserPost,editPost, deletePost} = require('../controllers/postControllers')
const authMiddleware = require('../middleware/authMiddleware')

const router = Router()

router.post('/',authMiddleware,createPost)
router.get('/:id',getPost)
router.get('/',getPosts)
router.patch('/',authMiddleware,editPost)
router.get('/categories/:category',getCatposts)
router.get('/users/:id',getUserPost)
router.delete('/:id',authMiddleware,deletePost)

module.exports = router