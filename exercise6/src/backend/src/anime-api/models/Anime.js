class Anime {
    constructor(id, name, genre, studio) {
        this.id = id;
        this.name = name;
        this.genre = genre;
        this.studio = studio;
    }

    validate() {
        return this.name && this.genre && this.studio;
    }
}

module.exports = Anime;