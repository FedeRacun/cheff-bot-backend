/* ============================================
                Codigo del server
    ============================================            */
//  UTILIDADES
const express = require('express');
const cors = require('cors');
const app = express();

//  MIDDLEWARES
app.use(cors());
app.use(express.json());


// RUTAS
app.use(require('./routes/index.routes'));

app.get('/test', (req, res) => {
    res.send('Hello World!')
  })


//exporto el app() para poder utilizarlo en el resto del server
module.exports = app;