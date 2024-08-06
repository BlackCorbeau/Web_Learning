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

import express from "express" // ������������� express ���������� ��� �������� ����� 
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
    /*res.statusCode = 404;*/ // ���������� ������ ��� � ������ ������ � express ����� ���
    res
        .status(404) // � ����� ����� ������� �����������
        .sendFile(createPath('error'))
})