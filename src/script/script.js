// Lista de viagens (exemplo)
const viagens = [
    { 
        nome: 'A Caminho de Pernambuco', 
        data: '15/12/2024', 
        local: 'Jaboatão dos Guararapes - PE', 
        detalhes: 'Uma jornada incrível para o nordeste brasileiro! <br><br> <strong>Inclui:</strong> Passeios históricos e praias.', 
        imagem: [
            './src/img/15-12-24/vista-aviao.jpeg',
            './src/img/15-12-24/vista-hotel.jpeg',
            './src/img/15-12-24/praia-boa-viagem.jpeg'
        ],
    },
    { 
        nome: 'Título 2', 
        data: 'Data 2', 
        local: 'Localidade 2', 
        detalhes: 'Descrição detalhada da segunda viagem.', 
        imagem: ['imagens/viagem2.jpg'] 
    },
    { 
        nome: 'Título 3', 
        data: 'Data 3', 
        local: 'Localidade 3', 
        detalhes: 'Descrição detalhada da terceira viagem.', 
        imagem: ['imagens/viagem3.jpg'] 
    },
    { 
        nome: 'Título 4', 
        data: 'Data 4', 
        local: 'Localidade 4', 
        detalhes: 'Descrição detalhada da quarta viagem.', 
        imagem: ['imagens/viagem4.jpg'] 
    },
    { 
        nome: 'Título 5', 
        data: 'Data 5', 
        local: 'Localidade 5', 
        detalhes: 'Descrição detalhada da quinta viagem.', 
        imagem: ['imagens/viagem5.jpg'] 
    },
    { 
        nome: 'Título 6', 
        data: 'Data 6', 
        local: 'Localidade 6', 
        detalhes: 'Descrição detalhada da sexta viagem.', 
        imagem: ['imagens/viagem6.jpg'] 
    },
];

// Quando clicar na logo, volta para o topo da home
const logo = document.getElementById('logo');
if (logo) {
    logo.onclick = () => {
        document.getElementById('home').style.display = 'flex';
        document.getElementById('viagens').style.display = 'block';
        document.getElementById('detalhes-viagem').style.display = 'none';

        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
}

// Quando clicar no botão "Viagens" no cabeçalho
const botaoViagensCabecalho = document.querySelector('.cabecalho p');
if (botaoViagensCabecalho) {
    botaoViagensCabecalho.onclick = () => {
        document.getElementById('home').style.display = 'flex';
        document.getElementById('viagens').style.display = 'block';
        document.getElementById('detalhes-viagem').style.display = 'none';

        document.getElementById('viagens').scrollIntoView({ behavior: 'smooth' });
    };
}

// Mostrar detalhes da viagem
function mostrarDetalhesViagem(viagem) {
    document.getElementById('home').style.display = 'none';
    document.getElementById('viagens').style.display = 'none';
    document.getElementById('detalhes-viagem').style.display = 'block';

    document.getElementById('detalhes-titulo').textContent = viagem.nome;
    document.getElementById('detalhes-texto').innerHTML = viagem.detalhes; // Estilização via HTML

    // Limpa as imagens antigas, se houver
    const detalhesImagemContainer = document.getElementById('detalhes-imagem-container');
    detalhesImagemContainer.innerHTML = '';  // Limpar qualquer imagem anterior

    // Exibir todas as imagens (caso seja um array)
    viagem.imagem.forEach(imagem => {
        const imgElement = document.createElement('img');
        imgElement.src = imagem;
        imgElement.alt = viagem.nome;
        imgElement.style.width = '100%';  // Ajustar conforme necessário
        imgElement.style.height = 'auto';  // Ajustar conforme necessário
        detalhesImagemContainer.appendChild(imgElement);  // Adiciona a imagem no container
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Carregar viagens dinamicamente
function carregarViagens() {
    const lista = document.getElementById('lista-viagens');
    if (!lista) return;

    viagens.forEach(viagem => {
        const botao = document.createElement('button');
        botao.className = "botao-viagem";
        botao.innerHTML = `
            <strong>${viagem.nome}</strong>
            <small>${viagem.data}</small>
            <small>${viagem.local}</small>
        `;
        botao.onclick = () => mostrarDetalhesViagem(viagem);
        lista.appendChild(botao);
    });
}

// Inicializa ao carregar a página
carregarViagens();
