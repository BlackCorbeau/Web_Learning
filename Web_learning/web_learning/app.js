/*import http from 'http'  // создание сервера

const port = 3000

const data = JSON.stringify([ // если передаем просто JSON а не разметку то вписывем его в скобочки метода ...end()
    { name: 'Kirill', age: 19 },
    { name: 'Alecsandr', age: 19 },
])

const server = http.createServer((req, res) => {
    globalThis.console.log(`Server request is ${req}`)
    console.log(console.dir(req)) // ахереть здоровая херабора я ебал конечно

    res.setHeader('Content-Type', 'application/json')

    res.setHeader('Content-Type', 'text/html')
    res.write('<head><link rel = "stylesheet" href"#"></head>') // можно стили CSS подключать, реально круто
    res.write('<h1>Hi, i see you</h1>') // можно HTML
    res.write('My name is Kirill') // можно просто текст
    res.end(data) //главное в правильном порядке и до ...end
})

server.listen(port, 'localhost', (error) => {
    error ? console.log(error) : console.log(`listenning port ${port} (localhost)`)
})*/


/*import http from 'http'  // роутинг или маршуртизация
import fs from 'fs'
import path from 'path'

const port = 3000

const createPath = (page) => path.resolve(".", 'views', `${page}.html`) //создаем функию которая получет на вход название файла и на выходе выдет строку являющуюся путем до html файла с название которое является параметром функции

const server = http.createServer((req, res) => {
    console.log('server Request')
    console.log("just for test")
    console.log(req.url)
    res.setHeader('Content-Type', 'text/html')

    let basePath = ''
    switch (req.url) { // на основе функции выше создаем свитч который перенаправляет пользователя на нужную ему страницу смотря на url запроса
        case '/': // стандарный 
            basePath = createPath('index')
            res.statusCode = 200 // если статус код после отправки 200 то, можно его не приписывать, потому что присы=ваивается автоматически
            break
        case '/about_us': // работа с редиректом, используется в том случае если сайт уже работает и по этому заапросу люди переходят на страницу сайта ( например через распростронение старой неактуальной ссылки)
            res.statusCode = 301 // статус код контролируемого редиректа
            res.setHeader('Location', '/contacts') // функция которая по данному запросу вместо направлениия куда то направит пользователя на самую аактуальную разметку
            res.end()
            break
        case '/contacts': // contains 
            basePath = createPath('contacts')
            res.statusCode = 200
            break
        default: // если не такого пути отправляет на разметку с ошибкой
            basePath = createPath('error')
            res.statusCode = 404 // тут другая ситуация так это разметка страницы с клиентской ошибкой, Соответственно статус код надо вернуть
            break
    }
    fs.readFile(basePath, (er, dat) => {
        if (er) {
            console.log(er)
            res.statusCode = 500 // ошибка говорящая о том что что то не так на сервере
            res.end()
        }
        else {
            res.write(dat)
            res.end()
        }
    })
    *//*if (req.url == '/') { // сравниваем URL если он коренной то есть после / в запросе от сайта ничего не т то мы должны ввернуть начальную страницу index.html
        fs.readFile('./views/index.html', (er, dat) => { // с помощью стандартной файловой системы читаем index.html
            if (er) { // если при чтении кол бек функция вернула ошибку то
                console.log(er) // выводим ошибку на экран
                res.end() // закрываем ответ и отправляем его пустым ( только с хедером ) ответ в любом случае нужно отправить браузеру что бы не нарушать систему работы
            }
            else { // иначе 
                res.write(dat) //отправляем в браузер запрос с командой на отображение html разметки из читаемого файла 
                res.end() // закрываем ответ
            }
        })
    }*//*
})

server.listen(port, 'localhost', (error) => {
    error ? console.log(error) : console.log(`listenning port: ${port}`)
})*/

import express from "express" // использование express фреймворка при создании сайта 
import fs from 'fs'
import path from 'path'

const app = express() // создаем express приложение 
const PORT = 3000  // указываем порт (для локалхоста)
const createPath = (Name) => path.resolve('.', 'views', `${Name}.html`) // функция для создания путей из прошлого урока 

app.listen(PORT, (error) => { // так же как и при работе в прошлом уроке с чистым нодом слушаем порт ( при работе с express слово localhost можно опустить)
    error ? console.log(error) : console.log(`listenning port ${PORT}`) //стандартная проверка на ошибку при запуске функции создания сервера (если при создании ошибка выведет ее в лог)
})

app.get('/', (req, res) => { // гет запрос ( для отправки файлов на фронтенд) (первый параметр это на какой запрос с сайта отправлять колбек функции, второй кол бек функция)
    res.sendFile(createPath('index')) // в кол бек функции формируеться результат и отправляется на сервер
})

app.get('/contacts', (req, res) => { // то же самое но с выводом url в лог
    console.log(req.url)
    res.sendFile(createPath('contacts'))
})

app.get('/about_us', (req, res) => { // вот так в экспрессе происходит редирект 
    res.redirect('/contacts')
})

app.use((req, res) => { // эта функция называется мидлваром в експресс, она отправляет нужную страницу (как правило с ошибкой) для всех путей пользователя при обрашении на ваш домеен которые не указаны в гетах выше (должна бытьв самом низу)
    console.log(`запрос по не существующему домену ${req.url}`)
    /*res.statusCode = 404;*/ // отправлять статус код в случае работы с express можно так
    res
        .status(404) // а можно через двойное определение
        .sendFile(createPath('error'))
})