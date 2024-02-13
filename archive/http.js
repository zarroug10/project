//Server HTTP
const http = require('http')
//Creation du serveur HTTP
const server = http.createServer((req,res)=>{
    //gestion de la requete http
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('Hello, World! \n');
});

//Ecoute du serveur sur le port 3000

const port =3000;
server.listen(port,()=>{
    console.log(`Serveur HTTP écoutant sur le port ${port}`);
});