const {Router} = require('express');
const router = Router();

const {postReceta, getReceta, cleanReceta} = require('../controller/services.controllers');

router.route('/recetas')
    .post(postReceta)
    .get(getReceta);

router.route('/cleanUpKnispel')
    .get(cleanReceta)

module.exports = router;