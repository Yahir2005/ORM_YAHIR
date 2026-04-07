var express = require('express');
var router = express.Router();
var categoriaController = require('../src/controller/CategoriaController');

router.get('/', categoriaController.getAll);
router.get('/:id', categoriaController.getById);
router.post('/', categoriaController.create);
router.put('/:id', categoriaController.update);
router.delete('/:id', categoriaController.remove);

module.exports = router;
