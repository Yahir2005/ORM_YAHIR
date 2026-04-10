var express = require('express');
var router = express.Router();
var UsuarioController = require('../src/controller/UsuarioController');

router.get('/', UsuarioController.getAll);
router.get('/:id', UsuarioController.getById);
router.post('/', UsuarioController.create);
router.put('/:id', UsuarioController.update);
router.delete('/:id', UsuarioController.remove);

module.exports = router;