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


// роутинг или маршуртизация
