const http = require('http');

http.createServer((req, res) => {
  // req: request es la petición al servidor
  // res: response es la respuesta del servidor
  console.log(req);

  // Ejemplo simple: responder con texto plano
  res.write('Hola Mundo');
  res.end();
})
.listen(8080); // puerto por donde el servidor escuchará las peticiones

console.log('Escuchando el puerto:', 8080);
