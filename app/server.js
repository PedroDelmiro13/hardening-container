const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    status: 'ok',
    message: 'Aplicação funcionando após hardening',
    porta: port
  }));
});

server.listen(port, '0.0.0.0', () => {
  console.log('Servidor rodando na porta ' + port);
});
