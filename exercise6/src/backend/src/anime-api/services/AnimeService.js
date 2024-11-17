const Anime = require('../models/Anime');

class AnimeService {
    constructor(animeRepository) {
        this.animeRepository = animeRepository;
    }

    getAllAnimes() {
        return this.animeRepository.findAll();
    }

    getAnimeById(id) {
        const anime = this.animeRepository.findById(id);
        if (!anime) {
            throw new Error('Anime não encontrado');
        }
        return anime;
    }

    createAnime(animeData) {
        const newAnime = new Anime(
            this.animeRepository.generateId(),
            animeData.name,
            animeData.genre,
            animeData.studio
        );

        if (!newAnime.validate()) {
            throw new Error('Todos os campos são obrigatórios');
        }

        return this.animeRepository.create(newAnime);
    }

    updateAnime(id, animeData) {
        const anime = new Anime(id, animeData.name, animeData.genre, animeData.studio);
        
        if (!anime.validate()) {
            throw new Error('Todos os campos são obrigatórios');
        }

        const updatedAnime = this.animeRepository.update(id, anime);
        if (!updatedAnime) {
            throw new Error('Anime não encontrado');
        }

        return updatedAnime;
    }

    deleteAnime(id) {
        const deleted = this.animeRepository.delete(id);
        if (!deleted) {
            throw new Error('Anime não encontrado');
        }
    }
}

module.exports = AnimeService;