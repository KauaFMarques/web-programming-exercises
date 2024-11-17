let animes = [
    { id: 1, name: "Naruto", genre: "Ação/Aventura", studio: "Studio Pierrot" }
];

class AnimeRepository {
    findAll() {
        return animes;
    }

    findById(id) {
        return animes.find(anime => anime.id === id);
    }

    save(anime) {
        animes.push(anime);
        return anime;
    }

    update(id, animeData) {
        const index = animes.findIndex(anime => anime.id === id);
        if (index === -1) return null;

        animes[index] = { id, ...animeData };
        return animes[index];
    }

    deleteById(id) {
        const index = animes.findIndex(anime => anime.id === id);
        if (index === -1) return false;

        animes.splice(index, 1);
        return true;
    }
}

module.exports = new AnimeRepository();
