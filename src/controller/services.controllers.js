const serviceCtrl = {};

// NodeJs packages
const fs = require('fs');
const RECETA_FILE_PATH = './recetas.json'

serviceCtrl.postReceta =
async (req, res) => {
    const body = req.body;

    const writeReceta = (receta) => {
      fs.writeFile('./recetas.json', JSON.stringify(receta), function (err) {
        if (err) {
            console.error(err);
        }
      });
    };

    try {
        //file exists
        if (fs.existsSync(RECETA_FILE_PATH)) {
          const recetaJson = require('../../recetas.json');
          recetaJson.push(body);
          writeReceta(recetaJson)

        } else {
          const arrayRecetas = [];
          arrayRecetas.push(body)
          console.log(arrayRecetas);
          writeReceta(arrayRecetas)
        }
        res.json({status: 200, receta: 'saved'});
      } catch(err) {
        console.error(err)
        res.json({status: 500, receta: 'NOT saved'});
      }
};

serviceCtrl.getReceta =
  async (req, res) => {
    try {
      if (fs.existsSync(RECETA_FILE_PATH)) {
        const recetaJson = require('../../recetas.json');
        res.json(recetaJson);
      }
    } catch (error) {
      console.log(error);
    }
  };

module.exports = serviceCtrl;