import { Router } from 'express'
import { getPosts, createPost, updatePost, deletePost } from '../src/controllers/postsController.js'

const router = Router()

router.get('/posts', getPosts)
router.post('/post', createPost)
router.put('/posts/:id', updatePost)
router.delete('/posts/:id', deletePost)

export default router
