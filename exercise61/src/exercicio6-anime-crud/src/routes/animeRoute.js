const express = require('express');
const AnimeController = require('exercise61\src\exercicio6-anime-crud\src\controllers\AnimeController.js');
const router = express.Router();

router.get('/', AnimeController.getAll);
router.get('/:id', AnimeController.getById);
router.post('/', AnimeController.create);
router.put('/:id', AnimeController.update);
router.delete('/:id', AnimeController.delete);

module.exports = router;
