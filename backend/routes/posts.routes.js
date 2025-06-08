import { Router } from 'express'
import { getPosts, createPost } from '../src/controllers/postsController.js'

const router = Router()

router.get('/posts', getPosts)
router.post('/post', createPost)

export default router
