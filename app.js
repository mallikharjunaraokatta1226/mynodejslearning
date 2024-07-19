const http = require('http');

const server = http.createServer((req, res) => {
    console.log("Message Received!");
});
server.listen("3000");