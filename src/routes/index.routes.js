const {Router} = require('express');
const router = Router();

const {postReceta, getReceta} = require('../controller/services.controllers');

router.route('/recetas')
    .post(postReceta)
    .get(getReceta)

module.exports = router;