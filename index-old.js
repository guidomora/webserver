import http from 'http'


// como crear servidor sin usar express



// la request es lo que se solicita por el cliente
// la response es la rta 
http.createServer((req, res) => {

    res.write('Hola mundo')
    res.end()
})
.listen(8080)

console.log('escuchando el puerto', 8080);