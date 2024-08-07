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


import express from 'express' // ������ � ejs � Post ���������
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
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quidem provident, dolores, vero laboriosam nemo mollitia impedit unde fugit sint eveniet, minima odio ipsum sed recusandae aut iste aspernatur dolorem.\nLorem ipsum dolor sit amet consectetur adipisicing elit.Sapiente quidem provident, dolores, vero laboriosam nemo mollitia impedit unde fugit sint eveniet, minima odio ipsum sed recusandae aut iste aspernatur dolorem.\n Lorem ipsum dolor sit amet consectetur adipisicing elit.Sapiente quidem provident, dolores, vero laboriosam nemo mollitia impedit unde fugit sint eveniet, minima odio ipsum sed recusandae aut iste aspernatur dolorem.\n Lorem ipsum dolor sit amet consectetur adipisicing elit.Sapiente quidem provident, dolores, vero laboriosam nemo mollitia impedit unde fugit sint eveniet, minima odio ipsum sed recusandae aut iste aspernatur dolorem.',
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
})