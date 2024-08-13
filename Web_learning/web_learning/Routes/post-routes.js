import express from 'express'
const router = express.Router()// ������ ��� ������� ���� ������� ���� ����������� ��������� ���������� � ������ � ����� ������������ ��� ������ ������� ����� use()
import { getPosts, getPost, deletePost, getAddPost, postAddPost, getEditPost, putEditPost } from '../controllers/post-controller.js'

router.get('/posts', getPosts) // � ����������� ��� �������� ������� �� ������� � ��������� ���� � ���������� � ����� ����� ������ ������������� ���

router.get('/posts/:id', getPost)

router.delete('/posts/:id', deletePost)

router.get('/add-post', getAddPost)

router.post('/add-post', postAddPost)

router.get('/edit/:id', getEditPost)

router.put('/edit/:id', putEditPost)

export {
    router
}