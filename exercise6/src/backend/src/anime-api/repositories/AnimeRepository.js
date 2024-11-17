class AnimeRepository {
    constructor() {
        this.animes = [
            {
                id: 1,
                name: "Naruto",
                genre: "Ação/Aventura",
                studio: "Studio Pierrot"
            }
        ];
    }

    findAll() {
        return this.animes;
    }

    findById(id) {
        return this.animes.find(anime => anime.id === id);
    }

    create(anime) {
        this.animes.push(anime);
        return anime;
    }

    update(id, animeData) {
        const index = this.animes.findIndex(anime => anime.id === id);
        if (index === -1) return null;
        
        this.animes[index] = { ...animeData, id };
        return this.animes[index];
    }

    delete(id) {
        const index = this.animes.findIndex(anime => anime.id === id);
        if (index === -1) return false;
        
        this.animes.splice(index, 1);
        return true;
    }

    generateId() {
        return this.animes.length ? Math.max(...this.animes.map(anime => anime.id)) + 1 : 1;
    }
}

module.exports = AnimeRepository;