console.log("Hmm");
const { createServer } = require('http')

const server = createServer((request, response) => {
    console.log(request);
    response.writeHead(200, {'Content-Type': 'application/json'});
    response.write(JSON.stringify({ a: 1, b: 2, c: 3}));
    return response.end();
});

server.listen();
