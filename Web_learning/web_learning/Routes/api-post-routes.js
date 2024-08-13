import express from 'express'
const router = express.Router()
import { getPosts, getPost, deletePost, postAddPost, putEditPost } from '../controllers/api-post-controller.js'

router.get('/api/posts', getPosts)

router.post('/api/post', postAddPost)

router.get('/api/post/:id', getPost)

router.delete('/api/post/:id', deletePost)

router.put('/api/post/:id', putEditPost)

export {
    router
}