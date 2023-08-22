import express from "express";
import * as url from 'url';
import 'dotenv/config'



const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const app = express();

const port = process.env.PORT

// servir contenido estatico
// Middleware

// le decimos a express que muestre esta carpeta
app.use(express.static('public')) // si la carpeta estuviera en otro lado hay que especificar el path


app.get("/generic", (req, res) => { //tamb hay que modificar las rutas del html
  res.sendFile(__dirname + "/public/generic.html");
});

app.get("/elements", (req, res) => {
  res.sendFile(__dirname + "/public/elements.html");
});

app.get("*", (req, res) => { // en el caso que se solicite una pagina que no existe
  // usamos el metodo sendFile, y con __dirname le estamos mandando la ruta absoluta del archivo
  res.sendFile(__dirname + "/public/404.html"); // redireccionamos a nuestra pag 404
});

app.listen(`${port}`); // aclaramos que puerto queremos usar
