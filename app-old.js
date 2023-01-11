
const { fstat } = require('fs');
const http = require('http');

http.createServer( ( req, res ) => {

/*     res.writeHead(200, { "Content-Type": "application/json" }); tippo d app (JSON con status200)
    res.setHeader('Content-Disposition', 'attachment; filename=lista.csv'); descarga archivo tipo ccsvv
    res.writeHead(404, { "Content-Type": "application/json" }); tippo d app (JSON con status400)*/

    res.write('Hola mundo');
    res.end();

})
.listen( 8080 );

console.log("Escuchando el puerto 8080");