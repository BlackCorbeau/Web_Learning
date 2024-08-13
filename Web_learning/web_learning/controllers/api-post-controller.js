import { Post } from '../models/post.js'

const handlerError = (res, err) => {
    res.status(500).send(err)
}

const getPosts = (req, res) => { // контроллер это вспомогательный элемент кода помогающий делать код более модульным и содержащтй в нутри себя функции и методы рута
    Post
        .find()
        .then()
        .catch((err) => handlerError(res, err))
}

const getPost = (req, res) => { // формально контроллер это функция которая будет выполняться при срабатывании рута
    Post
        .findById(req.params.id)
        .then((post) => res.status(200).json(post))
        .catch((err) => handlerError(res, err))
}

const deletePost = (req, res) => {
    Post
        .findByIdAndDelete(req.params.id)
        .then(() => res.status(200).json(req.params.id))
        .catch((err) => handlerError(res, err))
}

const postAddPost = (req, res) => {
    const { title, author, text } = req.body
    const post = new Post({ title, author, text })
    post
        .save()
        .then((post) => res.status(200).json(post))
        .catch((err) => handlerError(res, err))
}



const putEditPost = (req, res) => {
    const { title, author, text } = req.body
    const id = req.params.id
    Post
        .findByIdAndUpdate(id, { title, author, text }, { new: true })
        .then((post) => res.status(200).json(post))
        .catch((err) => handlerError(res, err))
}

export {
    getPosts,
    getPost,
    deletePost,
    postAddPost,
    putEditPost,
}