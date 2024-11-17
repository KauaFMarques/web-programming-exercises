const AnimeService = require('exercise61\src\exercicio6-anime-crud\src\services\AnimeService.js');

class AnimeController {
    getAll(req, res) {
        try {
            const animes = AnimeService.getAllAnimes();
            res.json(animes);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    getById(req, res) {
        try {
            const id = parseInt(req.params.id);
            const anime = AnimeService.getAnimeById(id);
            res.json(anime);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }

    create(req, res) {
        try {
            const anime = AnimeService.createAnime(req.body);
            res.status(201).json(anime);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    update(req, res) {
        try {
            const id = parseInt(req.params.id);
            const anime = AnimeService.updateAnime(id, req.body);
            res.json(anime);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    delete(req, res) {
        try {
            const id = parseInt(req.params.id);
            AnimeService.deleteAnime(id);
            res.status(204).send();
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }
}

module.exports = new AnimeController();
