const express = require('express');
const AnimeRepository = require('./repositories/AnimeRepository');
const AnimeService = require('./services/AnimeService');
const AnimeController = require('./controllers/AnimeController');

const app = express();
app.use(express.json());

// Instanciando as dependências
const animeRepository = new AnimeRepository();
const animeService = new AnimeService(animeRepository);
const animeController = new AnimeController(animeService);

// Rotas
app.get('/animes', (req, res) => animeController.getAllAnimes(req, res));
app.get('/animes/:id', (req, res) => animeController.getAnimeById(req, res));
app.post('/animes', (req, res) => animeController.createAnime(req, res));
app.put('/animes/:id', (req, res) => animeController.updateAnime(req, res));
app.delete('/animes/:id', (req, res) => animeController.deleteAnime(req, res));

module.exports = app;