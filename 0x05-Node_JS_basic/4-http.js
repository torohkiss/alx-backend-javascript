const http = require('http');

const port = 1245;

const app = http.createServer((req, res) => {
  //res.statusCode = 200;
  //res.setHeader('Content-Type', 'text/plain');
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello ALX!');
});

if (require.main === module) {
  app.listen(port);
}

module.exports = app;
