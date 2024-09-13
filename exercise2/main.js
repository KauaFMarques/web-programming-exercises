const API_URL = 'https://viacep.com.br/ws';

const btnElement = document.getElementById('searchBtn');
const cepInput = document.getElementById('cepInput');
const outputDiv = document.getElementById('output');
const errorText = document.getElementById('errorText');

btnElement.addEventListener('click', async () => {
    const cep = cepInput.value;

    if (cep.length !== 8 || isNaN(cep)) {
        errorText.textContent = 'Por favor, insira um CEP válido com 8 dígitos.';
        outputDiv.textContent = '';
        return;
    }

    try {
        const response = await fetch(`${API_URL}/${cep}/json/`);
        const data = await response.json();

        if (data.erro) {
            errorText.textContent = 'CEP não encontrado.';
            outputDiv.textContent = '';
        } else {
            errorText.textContent = '';
            outputDiv.innerHTML = `
                <strong>Logradouro:</strong> ${data.logradouro} <br>
                <strong>Bairro:</strong> ${data.bairro} <br>
                <strong>Cidade:</strong> ${data.localidade} <br>
                <strong>Estado:</strong> ${data.uf}
            `;
        }
    } catch (error) {
        errorText.textContent = 'Erro ao consultar o CEP.';
        outputDiv.textContent = '';
    }
});
