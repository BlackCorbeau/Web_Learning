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


// ������� ��� �������������
