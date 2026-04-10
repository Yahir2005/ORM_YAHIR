var express = require('express');
var router = express.Router();
var tipoUsuarioController = require('../src/controller/TipoUsuarioController');

router.get('/', tipoUsuarioController.getAll);
router.get('/:id', tipoUsuarioController.getById);
router.post('/', tipoUsuarioController.create);
router.put('/:id', tipoUsuarioController.update);
router.delete('/:id', tipoUsuarioController.remove);

module.exports = router;