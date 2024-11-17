const AnimeRepository = require('exercise61\src\exercicio6-anime-crud\src\repositories\AnimeRepository.js');
const Anime = require('exercise61\src\exercicio6-anime-crud\src\models\Anime.js');

class AnimeService {
    getAllAnimes() {
        return AnimeRepository.findAll();
    }

    getAnimeById(id) {
        const anime = AnimeRepository.findById(id);
        if (!anime) throw new Error("Anime não encontrado");
        return anime;
    }

    createAnime(data) {
        if (!data.name || !data.genre || !data.studio) {
            throw new Error("Todos os campos são obrigatórios");
        }

        const id = this.generateId();
        const newAnime = new Anime(id, data.name, data.genre, data.studio);
        return AnimeRepository.save(newAnime);
    }

    updateAnime(id, data) {
        if (!data.name || !data.genre || !data.studio) {
            throw new Error("Todos os campos são obrigatórios");
        }

        const updatedAnime = AnimeRepository.update(id, data);
        if (!updatedAnime) throw new Error("Anime não encontrado");
        return updatedAnime;
    }

    deleteAnime(id) {
        const success = AnimeRepository.deleteById(id);
        if (!success) throw new Error("Anime não encontrado");
    }

    generateId() {
        const animes = AnimeRepository.findAll();
        return animes.length ? Math.max(...animes.map(anime => anime.id)) + 1 : 1;
    }
}

module.exports = new AnimeService();
