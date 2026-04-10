var express = require('express');
var router = express.Router();
var examenController = require('../src/controller/ExamenController');

router.get('/', examenController.getAll);
router.get('/:id', examenController.getById);
router.post('/', examenController.create);
router.put('/:id', examenController.update);
router.delete('/:id', examenController.remove);

module.exports = router;