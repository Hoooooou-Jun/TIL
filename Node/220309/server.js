const http = require('http')
const fs = require('fs').promises;

const server = http.createServer(async (req, res) => {
    try {
        const data = await fs.readFile('./main.html');
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8 '});
        res.end(data)
    } catch (err) {
        console.log(err)
        res.writeHead(500, { 'Content-Type': 'text/html; charset=utf-8 '});
        res.end(err.message);
    }
});

server.listen(8080);

server.on('listening', () => {
    console.log('8080번 포트에서 서버 대기 중');
});
server.on('error', (error) => {
    console.log(error);
});