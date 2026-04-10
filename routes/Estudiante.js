var exoress = require('express');
var router = exoress.Router();
var estudianteController = require('../src/controller/EstudianteController');

router.get('/', estudianteController.getAll);
router.get('/:id', estudianteController.getById);
router.post('/', estudianteController.create);
router.put('/:id', estudianteController.update);
router.delete('/:id', estudianteController.remove);

module.exports = router;