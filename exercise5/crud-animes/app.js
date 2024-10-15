const express = require('express');
const app = express();

// Middleware para processar JSON
app.use(express.json());

// Array para armazenar os animes (simulando um banco de dados)
let animes = [
    {
        id: 1,
        name: "Naruto",
        genre: "Ação/Aventura",
        studio: "Studio Pierrot"
    }
];

// Função para gerar ID único
function generateId() {
    return animes.length ? Math.max(...animes.map(anime => anime.id)) + 1 : 1;
}

// Validação de campos
function validateAnime(anime) {
    if (!anime.name || !anime.genre || !anime.studio) {
        return false;
    }
    return true;
}

// Listar todos os animes
app.get('/animes', (req, res) => {
    res.json(animes);
});

// Buscar anime por ID
app.get('/animes/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const anime = animes.find(a => a.id === id);
    
    if (!anime) {
        return res.status(404).json({ message: "Anime não encontrado" });
    }
    
    res.json(anime);
});

// Criar novo anime
app.post('/animes', (req, res) => {
    const anime = req.body;
    
    if (!validateAnime(anime)) {
        return res.status(400).json({ message: "Todos os campos são obrigatórios" });
    }
    
    anime.id = generateId();
    animes.push(anime);
    
    res.status(201).json(anime);
});

// Atualizar anime
app.put('/animes/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const animeIndex = animes.findIndex(a => a.id === id);
    
    if (animeIndex === -1) {
        return res.status(404).json({ message: "Anime não encontrado" });
    }
    
    if (!validateAnime(req.body)) {
        return res.status(400).json({ message: "Todos os campos são obrigatórios" });
    }
    
    animes[animeIndex] = {
        id,
        ...req.body
    };
    
    res.json(animes[animeIndex]);
});

// Deletar anime
app.delete('/animes/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const animeIndex = animes.findIndex(a => a.id === id);
    
    if (animeIndex === -1) {
        return res.status(404).json({ message: "Anime não encontrado" });
    }
    
    animes.splice(animeIndex, 1);
    res.status(204).send();
});

module.exports = app;