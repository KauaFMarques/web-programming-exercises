const app = require('./app'); // Caminho relativo para o arquivo app.js
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
