/*import http from 'http'  // �������� �������

const port = 3000

const data = JSON.stringify([ // ���� �������� ������ JSON � �� �������� �� �������� ��� � �������� ������ ...end()
    { name: 'Kirill', age: 19 },
    { name: 'Alecsandr', age: 19 },
])

const server = http.createServer((req, res) => {
    globalThis.console.log(`Server request is ${req}`)
    console.log(console.dir(req)) // ������� �������� �������� � ���� �������

    res.setHeader('Content-Type', 'application/json')

    res.setHeader('Content-Type', 'text/html')
    res.write('<head><link rel = "stylesheet" href"#"></head>') // ����� ����� CSS ����������, ������� �����
    res.write('<h1>Hi, i see you</h1>') // ����� HTML
    res.write('My name is Kirill') // ����� ������ �����
    res.end(data) //������� � ���������� ������� � �� ...end
})

server.listen(port, 'localhost', (error) => {
    error ? console.log(error) : console.log(`listenning port ${port} (localhost)`)
})*/


/*import http from 'http'  // ������� ��� �������������
import fs from 'fs'
import path from 'path'

const port = 3000

const createPath = (page) => path.resolve(".", 'views', `${page}.html`) //������� ������ ������� ������� �� ���� �������� ����� � �� ������ ����� ������ ���������� ����� �� html ����� � �������� ������� �������� ���������� �������

const server = http.createServer((req, res) => {
    console.log('server Request')
    console.log("just for test")
    console.log(req.url)
    res.setHeader('Content-Type', 'text/html')

    let basePath = ''
    switch (req.url) { // �� ������ ������� ���� ������� ����� ������� �������������� ������������ �� ������ ��� �������� ������ �� url �������
        case '/': // ���������� 
            basePath = createPath('index')
            res.statusCode = 200 // ���� ������ ��� ����� �������� 200 ��, ����� ��� �� �����������, ������ ��� �����=��������� �������������
            break
        case '/about_us': // ������ � ����������, ������������ � ��� ������ ���� ���� ��� �������� � �� ����� �������� ���� ��������� �� �������� ����� ( �������� ����� ��������������� ������ ������������ ������)
            res.statusCode = 301 // ������ ��� ��������������� ���������
            res.setHeader('Location', '/contacts') // ������� ������� �� ������� ������� ������ ������������ ���� �� �������� ������������ �� ����� ����������� ��������
            res.end()
            break
        case '/contacts': // contains 
            basePath = createPath('contacts')
            res.statusCode = 200
            break
        default: // ���� �� ������ ���� ���������� �� �������� � �������
            basePath = createPath('error')
            res.statusCode = 404 // ��� ������ �������� ��� ��� �������� �������� � ���������� �������, �������������� ������ ��� ���� �������
            break
    }
    fs.readFile(basePath, (er, dat) => {
        if (er) {
            console.log(er)
            res.statusCode = 500 // ������ ��������� � ��� ��� ��� �� �� ��� �� �������
            res.end()
        }
        else {
            res.write(dat)
            res.end()
        }
    })
    *//*if (req.url == '/') { // ���������� URL ���� �� �������� �� ���� ����� / � ������� �� ����� ������ �� � �� �� ������ �������� ��������� �������� index.html
        fs.readFile('./views/index.html', (er, dat) => { // � ������� ����������� �������� ������� ������ index.html
            if (er) { // ���� ��� ������ ��� ��� ������� ������� ������ ��
                console.log(er) // ������� ������ �� �����
                res.end() // ��������� ����� � ���������� ��� ������ ( ������ � ������� ) ����� � ����� ������ ����� ��������� �������� ��� �� �� �������� ������� ������
            }
            else { // ����� 
                res.write(dat) //���������� � ������� ������ � �������� �� ����������� html �������� �� ��������� ����� 
                res.end() // ��������� �����
            }
        })
    }*//*
})

server.listen(port, 'localhost', (error) => {
    error ? console.log(error) : console.log(`listenning port: ${port}`)
})*/


/*import express from "express" // ������������� express ���������� ��� �������� ����� 
import fs from 'fs'
import path from 'path'

const app = express() // ������� express ���������� 
const PORT = 3000  // ��������� ���� (��� ����������)
const createPath = (Name) => path.resolve('.', 'views', `${Name}.html`) // ������� ��� �������� ����� �� �������� ����� 

app.listen(PORT, (error) => { // ��� �� ��� � ��� ������ � ������� ����� � ������ ����� ������� ���� ( ��� ������ � express ����� localhost ����� ��������)
    error ? console.log(error) : console.log(`listenning port ${PORT}`) //����������� �������� �� ������ ��� ������� ������� �������� ������� (���� ��� �������� ������ ������� �� � ���)
})

app.get('/', (req, res) => { // ��� ������ ( ��� �������� ������ �� ��������) (������ �������� ��� �� ����� ������ � ����� ���������� ������ �������, ������ ��� ��� �������)
    res.sendFile(createPath('index')) // � ��� ��� ������� ������������ ��������� � ������������ �� ������
})

app.get('/contacts', (req, res) => { // �� �� ����� �� � ������� url � ���
    console.log(req.url)
    res.sendFile(createPath('contacts'))
})

app.get('/about_us', (req, res) => { // ��� ��� � ��������� ���������� �������� 
    res.redirect('/contacts')
})

app.use((req, res) => { // ��� ������� ���������� ��������� � ��������, ��� ���������� ������ �������� (��� ������� � �������) ��� ���� ����� ������������ ��� ��������� �� ��� ������ ������� �� ������� � ����� ���� (������ ����� ����� ����)
    console.log(`������ �� �� ������������� ������ ${req.url}`)
    *//*res.statusCode = 404;*//* // ���������� ������ ��� � ������ ������ � express ����� ���
    res
        .status(404) // � ����� ����� ������� �����������
        .sendFile(createPath('error'))
})*/


/*import express from 'express' // ������ � middelwar-���
import path from 'path'
import morgan from 'morgan'

const app = express()
const PORT = 3000
const createPath = (Name) => path.resolve('.', 'views', `${Name}.html`)

app.listen(PORT, (err) => {
    err ? console.log(err) : console.log(`listen port ${PORT}`)
})

*//*app.use((req, res, next) => { // ���������� �������
    console.log(`path: ${req.path}`) // ������� ���� �� �������� ��� ������ (�������� '/' ��� '/contacts')
    console.log(`method: ${req.method}`) // ������� ��� ������ ������� (�������� GET, SET, POST, DELET)
    next() // ����������� �������� �������� 
})*//*

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))

// ����� ��������� ����� ������ ��������� �� ���� �� ����� ��� �� ��� ������ �� �����, �� ��� ������ ������������� ����� �������� � ��������� ������ �� ���� �� ������ readFile ���� html � render, ���� ejs

app.use(express.static('styles')) // ��������� ���������� ���������, ��� ��� node JS �� ��������� �������� ��� ����� �������
//�� ����� � ������� �������� ( �� ���� ������� ������������� ������ � �����) ����� ��������� ����� �������� ������ � ������������ ����� ����������

app.get('/', (req, res) => {
    res.sendFile(createPath('index'))
})

app.get('/contacts', (req, res) => {
    res.sendFile(createPath('contacts'))
})

app.get('/about-us', (req, res) => {
    res.redirect('/contacts')
})

app.get('/add-post', (req, res) => {
    res.sendFile(createPath('add-post'))
})

app.get('/posts', (req, res) => {
    res.sendFile(createPath('posts'))
})

app.get('/posts/:id', (req, res) => {
    res.sendFile(createPath('post'))
})

app.use((req, res) => {
    res.sendFile(createPath('error'))
})*/


/*import express from 'express' // ������ � ejs � Post ���������
import path from 'path'
import morgan from 'morgan'

const app = express()
const port = 3000
const CreatePath = (name) => path.resolve('.', 'ejs_views', `${name}.ejs`)

app.set('view engine', 'ejs') // ������������� ���������� ��� ������ � ejs ��� ��� ���� �� ����� ��� ���������������� �� �� ��������� ��� ������� ����� ���������� ejs ��������������� ������� �� ������ ���� HTML ��������

app.listen(port, (err) => {
    err ? console.log(err) : console.log(`listenning port: ${port}`)
})

app.use(morgan(':method :url :status :res[content-length] - :response-time ms')) // ���� ������ ���������� � ������� �� ������� � �����

app.use(express.static('styles')) // ��� ��� JS �������� ������ �������, �� ������� �� ����� �������� � ��� ������ � ������������� ������� �����, ������ ���� ������� �� ���� ������ �� �������� ��������� ����� �����

app.use(express.urlencoded({ extends: false }))

app.get('/', (req, res) => {
    const title = 'Home' 
    res.render(CreatePath('index'), { title }) // � ������� ������� ����� ���������� � EJS ������������� ������ (��� ��� ������), � ���� JSON �������� 
})

app.get('/contacts', (req, res) => {
    const title = 'Conacts'
    const contacts = [
        { name: 'YouTube', link: 'http://youtube.com/YauhenKavalchuk' }, 
        { name: 'Twitter', link: 'http://twitter.com/YauhenKavalchuk' }, 
        { name: 'GitHub', link: 'http://github.com/YauhenKavalchuk' }
    ]
    res.render(CreatePath('contacts'), { contacts, title }) // ������ �������� ���������� ����������, ������� ��� ������ ������ ������� �� �������� ���� � JSON ������� ������� �� ��� ��������
})

app.get('/about-us', (req, res) => {
    res.redirect('/contacts')
})

app.get('/add-post', (req, res) => {
    const title = 'Create Post Page'
    res.render(CreatePath('add-post'), { title })
})

app.post('/add-post', (req, res) => { // �������� ������������ ������ � ��� �������� �������� ��� � ���� ���� ������ (�� ���� �� ����� ������ ���������� ������ �� ������ � ����� ������ ���������� ������ �� ������)
    const { title, author, text } = req.body // ��������� ������ 
    const post = { // ������ � ������� 
        id: new Date(),
        date: (new Date()).toLocaleDateString(),
        title, 
        author, 
        text,
    }
    res.render(CreatePath('post'), { post, title }) // ��������� �������� ������ �����
})

app.get('/posts', (req, res) => {
    const title = 'Posts'
    const posts = [
        {
            id: '1',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quidem provident, dolores, vero laboriosam nemo mollitia impedit unde fugit sint eveniet, minima odio ipsum sed recusandae aut iste aspernatur dolorem.\nLorem ipsum dolor sit amet consectetur adipisicing elit.Sapiente quidem provident, dolores, vero laboriosam nemo mollitia impedit unde fugit sint eveniet, minima odio ipsum sed recusandae aut iste aspernatur dolorem.\n Lorem ipsum dolor sit amet consectetur adipisicing elit.Sapiente quidem provident, dolores, vero laboriosam nemo mollitia impedit unde fugit sint eveniet, minima odio ipsum sed recusandae aut iste aspernatur dolorem.\n Lorem ipsum dolor sit amet consectetur adipisicing elit.Sapiente quidem provident, dolores, vero laboriosam nemo mollitia impedit unde fugit sint eveniet, minima odio ipsum sed recusandae aut iste aspernatur dolorem.',
            title: 'Post Title',
            date: '05.05.2021',
            author: 'Yahen',
        },
    ]
    res.render(CreatePath('posts'), { title, posts })
})

app.get('/posts/:id', (req, res) => {
    const title = 'Post 1'
    const post = {
        id: '1',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quidem provident, dolores, vero laboriosam nemo mollitia impedit unde fugit sint eveniet, minima odio ipsum sed recusandae aut iste aspernatur dolorem.',
        title: 'Post Title',
        date: '05.05.2021',
        author: 'Yahen',
    }
    res.render(CreatePath('post'), { title, post })
})

app.use((req, res) => {
    const title = 'Error Page'
    res
        .status(404)
        .render(CreatePath('error'), { title })
})*/


/*import express from 'express' //������ � �� Mongo DB
import path from 'path'
import morgan from 'morgan'
import mongoose from 'mongoose'
import methodOverride from 'method-override'
import { Post } from './models/post.js' // ����������� ���� ���� ������
import { Contacts } from './models/contacts.js'

const PORT = 3000
const DB = 'mongodb+srv://woron0987654321:webLearning@cluster0.v4a2a.mongodb.net/Web_Learning?retryWrites=true&w=majority&appName=Cluster0' // ����� �� �������� ���������� �� � ��������� ��� �����������
const app = express()
const createPath = (name) => path.resolve('.', 'ejs_views', `${name}.ejs`)

mongoose // mongoose ��� ��������� ��� ������ � MONGO DB
    .connect(DB) // ����������� �� ������, ��� �� ����� ����� 
    .then((res) => globalThis.console.log('Connected to mongo DB')) // ���� �������� ����������� ������� ������ � ��� ��� ���������� � ����� ��
    .catch((err) => globalThis.console.log(err)) // ���� ����������� �� ������� ������� � ������� ������ 

app.set('view engine', 'ejs')

app.listen(PORT, (err => {
    err ? console.log(err) : console.log(`Listenning port : ${PORT}`)
}))

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))

app.use(express.static('styles'))

app.use(express.urlencoded({ extends: false }))

app.use(methodOverride('_method'))

app.get('/', (req, res) => {
    const title = 'Home Page'
    res.render(createPath('index'), {title})
})

*//*app.get('/contacts', (req, res) => { // ������ �������� ������ ������� ������ � ����� ������� 
    const title = 'Contacts'
    const contacts = [
        { name: 'YouTube', link: 'http://youtube.com/YauhenKavalchuk' },
        { name: 'Twiter', link: 'http://twitter.com/YauhenKavalchuk' },
        { name: 'GitHub', link: 'http://github.com/YauhenKavalchuk'},
    ]
    res.render(createPath('contacts'), { title, contacts })
})*//*

app.get('/contacts', (req, res) => {
    const title = 'Contacts Page'
    Contacts
        .find() // ������� ��� ��������� ������ �� ��������� mongo DB
        .then((contacts) => res.render(createPath('contacts'), { title, contacts })) // ����� ���� ���������� �������� ( ���� ������ ������� �������� � ������� �� �� � ������� ��� ����)
        .catch((err) => {
            console.log(err)
            res.render(createPath('error'), { title : 'ERROR' })
        })
})

app.get('/about_us', (req, res) => {
    app.redirect('/contacts')
})

*//*app.get('/posts', (req, res) => { // ������ ���� ������ �������� ������ �������������� �� �������
    const title = 'Posts'
    const posts = [
        {
            id: '1',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quidem provident, dolores, vero laboriosam nemo mollitia impedit unde fugit sint eveniet, minima odio ipsum sed recusandae aut iste aspernatur dolorem.\n',
            title: 'Post Title',
            date: '05.05.2021',
            author: 'Yahen',
        },
    ]
    res.render(createPath('posts'), { title, posts })
})*//*

app.get('/posts', (req, res) => {
    const title = 'Posts'
    Post
        .find()
        .sort({ createdAt: -1 })
        .then((posts) => res.render(createPath('posts'), { posts, title }))
        .catch((err) => { 
            console.log(err)
            res.render(createPath('error'), { title: 'ERROR' })
        })
})

*//*app.get('/posts/:id', (req, res) => { // ������ ���� ������ ��������� ��������� �� �������
    const title = 'Post 1'
    const post = {
        id: '1',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quidem provident, dolores, vero laboriosam nemo mollitia impedit unde fugit sint eveniet, minima odio ipsum sed recusandae aut iste aspernatur dolorem.',
        title: 'Post Title',
        date: '05.05.2021',
        author: 'Yahen',
    }
    res.render(createPath('post'), { title, post })
})*//*

app.get('/posts/:id', (req, res) => {
    const title = 'Post'
    Post
        .findById(req.params.id)
        .then((post) => res.render(createPath('post'), { title, post }))
        .catch((err) => {
            console.log(err)
            res.render(createPath('error'), { title: 'ERROR' })
        })
})

app.delete('/posts/:id', (req, res) => { // ����� ��������� ������� �� ��������, �� ������� ����������� ����� �� �������� ��������� ������ �� �������� 
    const title = 'Post'
    Post // � ������� ������ 
        .findByIdAndDelete(req.params.id) // ������� ����� �� ID � ������� � ������� ��� 
        .then(result => { // ����� ������� � ��������� ���������� ������ 200 ������������ ��� �������� ������ ������� 
            res.sendStatus(200)
        })
        .catch((err) => { // ���� ������ �� �� �� �����, ������� �� � ���, � ������������ ���������� ������ � ��� ��� ��� �� �� ������� ����� �� ��� (��� ������ ��� � ��� ��� ���� ������ �� �������)
            console.log(err)
            res.render(createPath('error'), { title: 'ERROR' })
        })
})

app.get('/add-post', (req, res) => {
    const title = 'Add Posts'
    res.render(createPath('add-post'), { title })
})

app.post('/add-post', (req, res) => {
    const { title, author, text } = req.body
    const post = new Post({ title, author, text }) // ������� ����� ������ ��������� �� ������ ���� ������ � ��������� � ���� ������ ���������� �� post ������
    post
        .save() // ����� ����� ������� ��� � ������� � ����� ������� ������������ � ���� ������
        .then((result) => res.redirect('/posts')) // ���� �������� ������� �� ������ ��������� ������������ ������ 
        .catch((error) => { // ����� ���� ��������� �� ����������, (��� ����� ���� �� �� ����������� ������ ��������� ������� ��� ���� ��� ������ �������� �� ��������)
            console.log(error)  // � ������� ����� �������� ������ �� �� ������� ������ �� ������ ���������
            res.render(createPath('error'), { title: 'ERROR' }) // ����� ����� � ������� ������� �������� �������� � ������� �� ������� �������
        })
})

app.get('/edit/:id', (req, res) => { // get ������ ��� ���� ��� �� ������� ����� � � HTML ��� ��� �� �������������� �� ��� ������ � �� �� ���
    const title = 'Edit post' // ��������� 
    Post
        .findById(req.params.id) // ������� �� id ���� � �������� ��� ���� ���� ��� ��� �������� ������ ����� ������ �� ������������ ��� �������������� ������� 
        .then(post => res.render(createPath('edit-post'), { post, title }))
        .catch((err) => {
            console.log(err)
            res.render(createPath('error'), { title: "ERROR" })
        })
})

app.put('/edit/:id', (req, res) => { // ��������� �� ��� ������ ����� �������� ��������� � �����
    const { title, author, text } = req.body // �������� ������ ������� ����������� �� ���� ������� 
    const _id = req.params.id // �������� id ��� ��������� ���� ����� ���� ���� �������� 
    Post
        .findByIdAndUpdate(_id, { title, author, text }) // ������� ���� �� ID � ������ ��� ������ (��� ����)
        .then(result => res.redirect(`/posts`)) // ��������� �������� ���� ��������� � �� ������ 
        .catch((err) => {
            console.log(err)
            res.render(createPath('error'), { title: 'ERROR' })
        })
})

app.use((req, res) => {
    const title = 'ERROR'
    res.render(createPath('error'), { title })
})*/


import express from 'express' // �������� ���������� � ��� �� ������ � ��������� � MVC ��������� ������ �� MVC, �������� API
import path from 'path'
import morgan from 'morgan'
import mongoose from 'mongoose'
import methodOverride from 'method-override'
import { router as postRouters } from './Routes/post-routes.js' // ����������� ��������� ������, �� ����� ��� ���� ��� �� ����� ���� ��������� ���� �� ���������� ����������� 
import { router as contactsRouter } from './Routes/contact-routes.js' // ����������� ������ ����� �� ������ �� ����������������� ����� 
import { createPath } from './helpers/createPath.js'
import { router as postAPIRoutes } from './Routes/api-post-routes.js'

const Port = 3000;
const db = 'mongodb+srv://woron0987654321:webLearning@cluster0.v4a2a.mongodb.net/Web_Learning?retryWrites=true&w=majority&appName=Cluster0'
const app = express()

mongoose
    .connect(db)
    .then((res) => console.log('connected to Mongo DB'))
    .catch((err) => console.log(err))

app.set('view engine', 'ejs')

app.listen(Port, (err) => {
    err ? console.log(err) : console.log(`listenning port: ${Port}`)
})

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))

app.use(express.static('styles'))

app.use(express.urlencoded({ extends: false }))

app.use(methodOverride('_method'))

app.get('/', (req, res) => {
    const title = 'Home Page'
    res.render(createPath('index'), { title })
})

app.use(postRouters) // �������� ���� �� ��������������� ������� ��� �� ���� ����� ������������
app.use(contactsRouter) // ������ ������������� ������� � ���� �������
app.use(postAPIRoutes)

app.get('/about-us', (req, res) => {
    res.redirect('/contacts')
})

app.use((req, res) => {
    res.render(createPath('error'), {title: 'ERROR'})
})
// ����� ����� ��������: ���������� ������������� ���� �� MongoDB, ������ ���� ��������� ����� ��� ���� ������ � �������� ��������� �� ������ veb DEV