// Importamos la función del modulo express
import express from "express";

const server = express(); // con esto declaramos que vamos a montar un servidor
const port = 8080; // declaramos el puerto
const ready = () => {
  console.log("El servidor está funcionando en puerto " + port);
}; // declaramos mensaje de que está montado.

server.listen(port, ready); // con este método lo ponemos en funcionamiento.

//Middlewares
server.use(express.urlencoded({ extended: true })); // Obligo a mi servidor a usar la funcion encargada de leer parametros o consultas.
// Permite leer query y params de la url


// Router. Declaramos algunas rutas. Por ahora vamos a usar como metodo e respuesta el json() o el render()

server.get("/", async (req, res) => {
  try {
    return res.status(200).json({
      response: "CODER API",
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      response: "CODER API ERROR",
      success: false,
    });
  }
});

// Un parametro

server.get("/api/notes/:text/:category", async(req,res)=>{
    try {
        const { text, category } = req.params
        return res.status(201).json({
            response: {text, category},
            success: true
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            response: "ERROR",
            success: false
        })
    }
}) 