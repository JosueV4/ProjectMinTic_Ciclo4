var express = require('express');
const { response } = require('../app');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
 //res.render('index', { title: 'Hola Mundo1' }); //comentado por ser tecnologia jade que no vamos a usar
res.send("Prueba sin motor de vista");

});

module.exports = router;
