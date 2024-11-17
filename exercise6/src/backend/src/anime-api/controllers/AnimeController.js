class AnimeController {
    constructor(animeService) {
        this.animeService = animeService;
    }

    getAllAnimes(req, res) {
        try {
            const animes = this.animeService.getAllAnimes();
            res.json(animes);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    getAnimeById(req, res) {
        try {
            const id = parseInt(req.params.id);
            const anime = this.animeService.getAnimeById(id);
            res.json(anime);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }

    createAnime(req, res) {
        try {
            const anime = this.animeService.createAnime(req.body);
            res.status(201).json(anime);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    updateAnime(req, res) {
        try {
            const id = parseInt(req.params.id);
            const anime = this.animeService.updateAnime(id, req.body);
            res.json(anime);
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }

    deleteAnime(req, res) {
        try {
            const id = parseInt(req.params.id);
            this.animeService.deleteAnime(id);
            res.status(204).send();
        } catch (error) {
            res.status(404).json({ message: error.message });
        }
    }
}

module.exports = AnimeController;
