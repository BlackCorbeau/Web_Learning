import { Post } from '../models/post.js'
import { createPath } from '../helpers/createPath.js'
import { handlerEror } from '../helpers/handlerError.js'

const getPosts = (req, res) => { // контроллер это вспомогательный элемент кода помогающий делать код более модульным и содержащтй в нутри себя функции и методы рута
    const title = 'Posts page'
    Post
        .find()
        .then((posts) => res.render(createPath('posts'), { title, posts }))
        .catch((err) => handlerEror(res, err))
}

const getPost = (req, res) => { // формально контроллер это функция которая будет выполняться при срабатывании рута
    const title = `Post ${req.params.id}`
    Post
        .findById(req.params.id)
        .then((post) => res.render(createPath('Post'), { title, post }))
        .catch((err) => handlerEror(res, err))
}

const deletePost = (req, res) => {
    Post
        .findByIdAndDelete(req.params.id)
        .then(result => {
            res
                .sendStatus(200)
        })
        .catch((err) => handlerEror(res, err))
}

const getAddPost = (req, res) => {
    const title = 'Add Post'
    res.render(createPath('add-post'), { title })
}

const postAddPost = (req, res) => {
    const { title, author, text } = req.body
    const t = `User ${author}, sendended ${text}, with title: ${title}`
    const post = new Post({ title, author, text })
    post
        .save()
        .then(result => res.redirect('/posts'))
        .catch((err) => handlerEror(res, err))
}

const getEditPost = (req, res) => {
    const title = 'Edit Post'
    Post
        .findById(req.params.id)
        .then(post => res.render(createPath('edit-post'), { post, title }))
        .catch((err) => handlerEror(res, err))
}

const putEditPost = (req, res) => {
    const { title, author, text } = req.body
    const id = req.params.id
    Post
        .findByIdAndUpdate(id, { title, author, text })
        .then(result => res.redirect('/posts'))
        .catch((err) => handlerEror(res, err))
}

export {
    getPosts,
    getPost,
    deletePost,
    getAddPost,
    postAddPost,
    getEditPost,
    putEditPost
}