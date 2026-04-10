var express = require('express');
var router = express.Router();
var contactoController = require('../src/controller/ContactoController');

router.get('/', contactoController.getAll);
router.get('/:id', contactoController.getById);
router.post('/', contactoController.create);
router.put('/:id', contactoController.update);
router.delete('/:id', contactoController.remove);

module.exports = router;
