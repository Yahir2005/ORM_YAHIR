var express = require('express');
var router = express.Router();
var preguntaController = require('../src/controller/PreguntaController');

router.get('/', preguntaController.getAll);
router.get('/:id', preguntaController.getById);
router.post('/', preguntaController.create);
router.put('/:id', preguntaController.update);
router.delete('/:id', preguntaController.remove);

module.exports = router;