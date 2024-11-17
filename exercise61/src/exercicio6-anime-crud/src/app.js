const express = require('express');
const animeRoutes = require('exercise61\src\exercicio6-anime-crud\src\routes\animeRoute.js'); // Atualize para o caminho relativo correto

const app = express();

app.use(express.json());
app.use('/animes', animeRoutes); // Registra as rotas de anime


module.exports = app;
