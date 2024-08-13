import express from 'express'
const router = express.Router()// роутер это элемент кода который дает возможность разносить приложение в модули а потом использовать его чпосле импорта через use()
import { getPosts, getPost, deletePost, getAddPost, postAddPost, getEditPost, putEditPost } from '../controllers/post-controller.js'

router.get('/posts', getPosts) // в последствии все элементы которые мы вынесли в отдельный файл и подключили к этому файлу роутер используються так

router.get('/posts/:id', getPost)

router.delete('/posts/:id', deletePost)

router.get('/add-post', getAddPost)

router.post('/add-post', postAddPost)

router.get('/edit/:id', getEditPost)

router.put('/edit/:id', putEditPost)

export {
    router
}