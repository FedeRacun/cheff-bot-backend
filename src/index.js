/*============================================
                Inicio del server
==============================================*/
console.log('Iniciando server al puerto: ',process.env.PORT)
const app = require('./app');
const port = process.env.PORT || 3400;
//levanto el servidor en una funcion asincrona para prevenir posibles errores y evitar callbacks
async function main() {

    //iniciar el server en un puerto
    await app.listen(port);
    console.log('Server iniciado en el puerto: ', port)

}

main();