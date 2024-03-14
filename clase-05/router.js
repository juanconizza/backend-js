// El enrutador requiere el requerimiento y devuelve la respuesta

function router(req, res) {
  const url = req.url;
  console.log(url);
  const options = { "Content-Type": "text/plain" };
  switch (url) {
    case "/":
      res.writeHead(200, options).end("API CONECTADA");
      break;
    case "/home":
      res.writeHead(200, options).end("BIENVENIDO AL HOME");
      break;

    default:
      break;
  }
}

module.exports = router;
