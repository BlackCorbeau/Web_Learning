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


/*import express from "express" // использование express фреймворка при создании сайта 
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
    *//*res.statusCode = 404;*//* // отправлять статус код в случае работы с express можно так
    res
        .status(404) // а можно через двойное определение
        .sendFile(createPath('error'))
})*/


/*import express from 'express' // работа с middelwar-ами
import path from 'path'
import morgan from 'morgan'

const app = express()
const PORT = 3000
const createPath = (Name) => path.resolve('.', 'views', `${Name}.html`)

app.listen(PORT, (err) => {
    err ? console.log(err) : console.log(`listen port ${PORT}`)
})

*//*app.use((req, res, next) => { // простейший мидлвар
    console.log(`path: ${req.path}`) // выводит путь по которому шел запрос (например '/' или '/contacts')
    console.log(`method: ${req.method}`) // выводит тип самого запроса (например GET, SET, POST, DELET)
    next() // возвращение контроля браузеру 
})*//*

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))

// можно добавлять сколь угодно мидлваров но если мы хотим что бы это влияло на ответ, то они должны распологаться между запросом и отправкой ответа то есть до метода readFile если html и render, если ejs

app.use(express.static('styles')) // наглядное применение мидлваров, так как node JS по умолчанию защищает все папки сервера
//мы можем с помощью мидлвара ( то есть функции преобразующей запрос в ответ) можем разрешить сайту получить доступ к определенной папке компьютера

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


/*import express from 'express' // работа с ejs и Post запросами
import path from 'path'
import morgan from 'morgan'

const app = express()
const port = 3000
const CreatePath = (name) => path.resolve('.', 'ejs_views', `${name}.ejs`)

app.set('view engine', 'ejs') // устанавливаем разширение для работы с ejs так как сайт не может его интрепретировать то мы прогоняем его сначала через встроенный ejs интрепретатааор который на выходе даст HTML разметку

app.listen(port, (err) => {
    err ? console.log(err) : console.log(`listenning port: ${port}`)
})

app.use(morgan(':method :url :status :res[content-length] - :response-time ms')) // дает важную информацию о ответах на запросы в логах

app.use(express.static('styles')) // так как JS зашишает данные сервера, то браузер не может получить к ним доступ и соответсвенно открыть стили, однако этой стракой мы даем доступ на открытие браузером папки стили

app.use(express.urlencoded({ extends: false }))

app.get('/', (req, res) => {
    const title = 'Home' 
    res.render(CreatePath('index'), { title }) // с помощью рендера можно передавать в EJS динамическике данные (или ряд данных), в виде JSON обьектов 
})

app.get('/contacts', (req, res) => {
    const title = 'Conacts'
    const contacts = [
        { name: 'YouTube', link: 'http://youtube.com/YauhenKavalchuk' }, 
        { name: 'Twitter', link: 'http://twitter.com/YauhenKavalchuk' }, 
        { name: 'GitHub', link: 'http://github.com/YauhenKavalchuk' }
    ]
    res.render(CreatePath('contacts'), { contacts, title }) // пример передачи нескольких переменных, заметим что данные внутри массива мы передаем тоже в JSON формате обращай на это внимание
})

app.get('/about-us', (req, res) => {
    res.redirect('/contacts')
})

app.get('/add-post', (req, res) => {
    const title = 'Create Post Page'
    res.render(CreatePath('add-post'), { title })
})

app.post('/add-post', (req, res) => { // приемник динамических данных с веб страницы браузера это и есть пост запрос (то есть не когда сервер отправляет данные на клиент а когда клиент отправляет данные на сервер)
    const { title, author, text } = req.body // рспаковка данных 
    const post = { // работа с данными 
        id: new Date(),
        date: (new Date()).toLocaleDateString(),
        title, 
        author, 
        text,
    }
    res.render(CreatePath('post'), { post, title }) // рендеринг страницы нового поста
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


/*import express from 'express' //работа с БД Mongo DB
import path from 'path'
import morgan from 'morgan'
import mongoose from 'mongoose'
import methodOverride from 'method-override'
import { Post } from './models/post.js' // импортируем сюда этот шаблон
import { Contacts } from './models/contacts.js'

const PORT = 3000
const DB = 'mongodb+srv://woron0987654321:webLearning@cluster0.v4a2a.mongodb.net/Web_Learning?retryWrites=true&w=majority&appName=Cluster0' // адрес по которому обращается бд в интернете для подключения
const app = express()
const createPath = (name) => path.resolve('.', 'ejs_views', `${name}.ejs`)

mongoose // mongoose это фреймворк для работы с MONGO DB
    .connect(DB) // подключение по адресу, его на сайте пишут 
    .then((res) => globalThis.console.log('Connected to mongo DB')) // если успешное подключение напишет строку в лог что подключено к монго ДБ
    .catch((err) => globalThis.console.log(err)) // если подключение не удалось поймает и выведет ошибку 

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

*//*app.get('/contacts', (req, res) => { // старые контакты данные которых лежали в самом сервере 
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
        .find() // выводит все найденные данные из коллекции mongo DB
        .then((contacts) => res.render(createPath('contacts'), { title, contacts })) // после чего отображает страницу ( если данные удалось получить с данными из бд с помощью кол бека)
        .catch((err) => {
            console.log(err)
            res.render(createPath('error'), { title : 'ERROR' })
        })
})

app.get('/about_us', (req, res) => {
    app.redirect('/contacts')
})

*//*app.get('/posts', (req, res) => { // старый пост данные которого лежали непосредствено на сервере
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

*//*app.get('/posts/:id', (req, res) => { // старый пост данные которогго храняться на сервере
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

app.delete('/posts/:id', (req, res) => { // после получения запроса на удаление, по адрессу конкретного поста мы начинаем выполнять запрос на удаление 
    const title = 'Post'
    Post // с помощью модели 
        .findByIdAndDelete(req.params.id) // находим метод по ID в запросе и удоляем его 
        .then(result => { // когда удалени е выполнена отправляем статус 200 сигнализируя что удаление прошло успешно 
            res.sendStatus(200)
        })
        .catch((err) => { // если ошибка то мы ее ловим, выводим ее в лог, а пользователю отправляем запрос о том что что то на клиенте пошло не так (это потому что у нас нет окна ошибки на сервере)
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
    const post = new Post({ title, author, text }) // создаем новый обьект используя за основу этот шаблон и передавая в него данные полученные из post запрса
    post
        .save() // после этого ообьект уже с данными в таком формате отправляется в базу данных
        .then((result) => res.redirect('/posts')) // если передача удалась на экране появиться отправленный обьект 
        .catch((error) => { // иначе если отправить не получилось, (это может быть из за повреждения данных нарушения шаблона или того что сервер отправки не доступен)
            console.log(error)  // в консоль будет выведена ошибка из за которой данные не смогли отправить
            res.render(createPath('error'), { title: 'ERROR' }) // после этого у стороны клиента выскочит разметка с ошибкой на стороне клиента
        })
})

app.get('/edit/:id', (req, res) => { // get запрос для того что бы принять данны е с HTML так как он перенаправляет на гет запрос а не на пут
    const title = 'Edit post' // заголовок 
    Post
        .findById(req.params.id) // находит по id пост и открывет для него окно как для создания нового поста только со вставленными для редактирования данными 
        .then(post => res.render(createPath('edit-post'), { post, title }))
        .catch((err) => {
            console.log(err)
            res.render(createPath('error'), { title: "ERROR" })
        })
})

app.put('/edit/:id', (req, res) => { // реагирует на пут запрос после введения изменений в форму
    const { title, author, text } = req.body // получает данные которые передаються из тела запроса 
    const _id = req.params.id // получает id для понимания того какой пост надо изменить 
    Post
        .findByIdAndUpdate(_id, { title, author, text }) // находит пост по ID и меняет его данные (все поля)
        .then(result => res.redirect(`/posts`)) // открывает страницу всех доступных в бД постов 
        .catch((err) => {
            console.log(err)
            res.render(createPath('error'), { title: 'ERROR' })
        })
})

app.use((req, res) => {
    const title = 'ERROR'
    res.render(createPath('error'), { title })
})*/


import express from 'express' // проводим рестайлинг а так же работа с Роутерами и MVC переводим проект на MVC, создание API
import path from 'path'
import morgan from 'morgan'
import mongoose from 'mongoose'
import methodOverride from 'method-override'
import { router as postRouters } from './Routes/post-routes.js' // импортируем созданный роутер, он нужен для того что бы можно было разносить Руты по отделльным директориям 
import { router as contactsRouter } from './Routes/contact-routes.js' // импортируем второй такой же роутер из соответствующегго файла 
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

app.use(postRouters) // рахносим руты по соответствующим модулям что бы было легче поддерживать
app.use(contactsRouter) // пример использования роутера в коде сервера
app.use(postAPIRoutes)

app.get('/about-us', (req, res) => {
    res.redirect('/contacts')
})

app.use((req, res) => {
    res.render(createPath('error'), {title: 'ERROR'})
})
// после конца обучения: Посмотрите дополнительно курс по MongoDB, можете пару последних видео там этот момент я объясняю подробнее на канале veb DEV