// El enrutador requiere el requerimiento y devuelve la respuesta

const ProductManager = require("./ProductManager");


async function router(req, res) {
  const url = req.url;
  
  const options = { "Content-Type": "text/plain" };
  switch (url) {
    case "/":
      console.log("Handling / route");
      res.writeHead(200, options).end("API CONECTADA");
      break;
    case "/products":
      console.log("Handling /products route");
      const all = await ProductManager.read()
      res.writeHead(200, options).end(JSON.stringify(all));
      break;

    default:
      console.log("Unknown route:", url);
      res.writeHead(404,options).end("PAGINA NO ENCONTRADA - ERROR 404")
  }
}

module.exports = router;
