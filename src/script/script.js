// Lista de viagens (exemplo)
const viagens = [
    { 
        nome: 'A Caminho de Pernambuco', 
        data: '15/12/2024', 
        local: 'Jaboatão dos Guararapes - PE', 
        detalhes: `
            Em um domingo ensolarado, acordei cedo e segui para a rodoviária, onde peguei o ônibus rumo ao Aeroporto de Guarulhos. 
            De lá, embarquei em um voo de aproximadamente três horas com destino ao Aeroporto de Recife. 
            Ao chegar, me hospedei em um hotel à beira-mar, com uma vista deslumbrante para as águas da Praia de Piedade. 
            À noite, aproveitei para visitar a famosa feirinha de Boa Viagem, caminhei pelo calçadão e explorei o Parque Dona Lindu, encerrando o dia com a brisa agradável do litoral pernambucano.
        `,
        imagem: [
            './src/img/15-12-24/vista-aviao.jpeg',
            './src/img/15-12-24/vista-hotel.jpeg',
            './src/img/15-12-24/praia-boa-viagem.jpeg'
        ],
        marcadores: [
            {
                nome: 'Hotel Costa Mar Recife',
                coordenadas: [-8.173931491676221, -34.91642858650923],
                descricao: 'Hotel beira mar com excelente vista'
            },
            {
                nome: 'Feirinha de Boa Viagem',
                coordenadas: [-8.1265, -34.9021],
                descricao: 'Artesanato e comidas típicas.'
            },
            {
                nome: 'Parque Dona Lindu',
                coordenadas: [-8.1325, -34.9042],
                descricao: 'Espaço cultural e lazer à beira-mar.'
            }
        ]
    },
    { 
        nome: 'Conhecendo a Reserva do Paiva', 
        data: '16/12/2024', 
        local: 'Jaboatão dos Guararapes - PE', 
        detalhes: `
            Na manhã de hoje, fui até a Reserva do Paiva, onde tive a oportunidade de explorar uma praia deslumbrante, rodeada por recifes belíssimos em todas as direções. A água estava calma e cristalina, criando o ambiente perfeito para passar a manhã toda. No início da tarde, aproveitei para fazer uma caminhada pelo Parque da Lagoa, também localizado na Reserva do Paiva.
            Mais tarde, almocei no shopping de Jaboatão, onde experimentei um lanche de coração de galinha da franquia local Laça Burguer, uma verdadeira delícia.
            Para finalizar o dia, fui ao restaurante e bar Caricatura, onde me deliciei com um rodízio de pizzas. Uma noite perfeita para encerrar o dia!
        `, 
        imagem: ['imagens/viagem2.jpg'],
        marcadores: [
            {
                nome: 'Hotel Costa Mar Recife',
                coordenadas: [-8.173931491676221, -34.91642858650923],
                descricao: 'Hotel beira mar com excelente vista'
            },
            {
                nome: 'Praia do Paiva',
                coordenadas: [-8.271008099427076, -34.94559963063511],
                descricao: 'Piscinas naturais da Reserva do Paiva'
            },
            {
                nome: 'Parque da Lagoa',
                coordenadas: [-8.25053752554765, -34.94525630786997],
                descricao: 'Parque da Lagoa na Reserva do Paiva'
            },
            {
                nome: 'Shopping Guararapes',
                coordenadas: [-8.168144840151626, -34.919167081921344],
                descricao: 'Shopping Guararapes'
            },
            {
                nome: 'Restaurante e Bar Caricatura',
                coordenadas: [-8.20594762093589, -34.91836117653471],
                descricao: 'Restaurante e Bar Caricatura'
            }
        ]
    },
    { 
        nome: 'Da Praia ao Shopping', 
        data: '17/12/2024', 
        local: 'Recife - PE', 
        detalhes: `
            Na manhã seguinte, fui até a Praia da Piedade, que ficava bem em frente ao hotel. Como a maré estava baixa, não havia risco com relação aos tubarões, então pude entrar na água com tranquilidade e aproveitar o mar.
            À tarde, fui ao Shopping Rio Mar Recife, onde almocei novamente no Laça Burger e passei o resto do tempo explorando as lojas e relaxando pelo shopping.
            À noite, optei por um momento mais tranquilo no quarto do hotel, assistindo a algo e saboreando uma deliciosa pizza.
        `, 
        imagem: ['imagens/viagem3.jpg'],
        marcadores: [
            {
                nome: 'Hotel Costa Mar Recife',
                coordenadas: [-8.173931491676221, -34.91642858650923],
                descricao: 'Hotel beira mar com excelente vista'
            },
            {
                nome: 'Praia de Piedade',
                coordenadas: [-8.175409417146554, -34.91596199287301],
                descricao: 'Praia de Piedade'
            },
            {
                nome: 'Shopping Rio Mar',
                coordenadas: [-8.08563912694641, -34.89473091887561],
                descricao: 'Shopping Rio Mar Recife'
            }
        ]
    },
    { 
        nome: 'Visitando Recife Antigo', 
        data: '18/12/2024', 
        local: 'Recife - PE', 
        detalhes: `
            Na manhã seguinte, comecei o dia com um delicioso café no Soto Café, uma cafeteria charmosa, decorada de forma aconchegante, oferecendo lanches tanto visualmente atraentes quanto saborosos. Após essa pausa relaxante, segui para o Recife Antigo, onde tive a oportunidade de conhecer o icônico Marco Zero. Ali, visitei a Caixa Cultural, que já foi a sede da Bolsa de Valores e hoje serve como um espaço dedicado a eventos e exposições. No dia da minha visita, estavam expostas diversas pinturas e fotografias, tornando a experiência ainda mais enriquecedora. De lá, também consegui avistar, à distância, o impressionante Parque de Esculturas de Brennand.
            Quando a hora do almoço chegou, optei pelo restaurante Baba Gula, uma excelente escolha com pratos deliciosos e preços acessíveis. Depois de me deliciar com a comida, continuei explorando o bairro. Visitei a Igreja da Madre de Deus e, em seguida, passei pela charmosa Livraria Jaqueira. Para finalizar a tarde com chave de ouro, tomei um café no The Coffee, perfeito para uma pausa tranquila.
        `, 
        imagem: ['imagens/viagem4.jpg'],
        marcadores: [
            {
                nome: 'Soto Café',
                coordenadas: [-8.097258038811344, -34.884508134209455],
                descricao: 'Soto Café'
            },
            {
                nome: 'Marco Zero',
                coordenadas: [-8.063010026969401, -34.871202289521456],
                descricao: 'Marco Zero'
            },
            {
                nome: 'Caixa Cultural',
                coordenadas: [-8.062518723324878, -34.87130421346736],
                descricao: 'Caixa Cultural'
            },
            {
                nome: 'Babagula',
                coordenadas: [-8.062692969170344, -34.87352637653732],
                descricao: 'Babagula'
            },
            {
                nome: 'Igreja da Madre de Deus',
                coordenadas: [-8.064323969211602, -34.873932105373825],
                descricao: 'Igreja da Madre de Deus'
            },
            {
                nome: 'Livraria Jaqueira',
                coordenadas: [-8.065309517353905, -34.87351834766642],
                descricao: 'Livraria Jaqueira'
            },
            {
                nome: 'The Coffe',
                coordenadas: [-8.05857893774096, -34.8702537053737],
                descricao: 'The Coffe'
            }
        ]
    },
    { 
        nome: 'Instituto Ricardo Brennand', 
        data: '19/12/2024', 
        local: 'Recife - PE', 
        detalhes: `
            Na manhã de hoje, decidi aproveitar o conforto do hotel, relaxando à beira da piscina e curtindo o clima tranquilo. Já na parte da tarde, embarquei em uma visita ao Instituto Ricardo Brennand, um destino que, apesar de um pouco afastado, se revelou uma experiência incrível. Conhecido como o maior museu de armas brancas da América Latina, o instituto é um verdadeiro castelo, repleto de exposições que vão desde pinturas e esculturas até coleções impressionantes de armas históricas. Passei a tarde inteira explorando aquele majestoso espaço, me maravilhando com sua arquitetura e o vasto acervo.
            Para encerrar o dia, pedi um lanche artesanal da Firetha, uma escolha deliciosa para a noite.
        `, 
        imagem: ['imagens/viagem5.jpg'],
        marcadores: [
            {
                nome: 'Hotel Costa Mar Recife',
                coordenadas: [-8.174127539868136, -34.916439819238526],
                descricao: 'Hotel Costa Mar Recife'
            },
            {
                nome: 'Instituto Ricardo Brennand',
                coordenadas: [-8.066334314637938, -34.96326843421006],
                descricao: 'Instituto Ricardo Brennand'
            }
        ]
    },
    { 
        nome: 'Último Dia em Pernambuco', 
        data: '20/12/2024', 
        local: 'Jaboatão dos Guararapes - PE', 
        detalhes: `
            No meu último dia de viagem, acordei cedo para caminhar pela Praia de Piedade, uma maneira perfeita de iniciar o dia, com os pés na areia e a brisa do mar. Após a caminhada, voltei para o hotel e passei o restante da manhã relaxando na piscina, aproveitando os últimos momentos de tranquilidade antes do check-out.
            Depois de deixar o hotel, ainda tive a oportunidade de conhecer a Praia de Candeias, onde fiquei até o momento de seguir para o aeroporto. Lá, me despedi das belas paisagens e peguei meu voo de volta para casa, concluindo assim mais uma viagem inesquecível.
        `, 
        imagem: ['imagens/viagem6.jpg'],
        marcadores: [
            {
                nome: 'Hotel Costa Mar Recife',
                coordenadas: [-8.174127539868136, -34.916439819238526],
                descricao: 'Hotel Costa Mar Recife'
            },
            {
                nome: 'Praia de Piedade',
                coordenadas: [-8.175409417146554, -34.91596199287301],
                descricao: 'Hotel Costa Mar Recife'
            },
            {
                nome: 'Praia de Candeias',
                coordenadas: [-8.20305628760552, -34.91667392358509],
                descricao: 'Praia de Candeias'
            }
        ]
    },
];

// Seleciona o elemento com o ID 'logo' e o armazena na variável 'logo'
const logo = document.getElementById('logo');
// Verifica se o elemento 'logo' existe na página
if (logo) {
    // Adiciona um evento de clique ao elemento 'logo'
    logo.onclick = () => {
        // Exibe a seção com ID 'home' usando display 'flex'
        document.getElementById('home').style.display = 'flex';
        // Exibe a seção com ID 'viagens' usando display 'block'
        document.getElementById('viagens').style.display = 'block';
        // Oculta a seção com ID 'detalhes-viagem' usando display 'none'
        document.getElementById('detalhes-viagem').style.display = 'none';
        // Faz a rolagem suave da página até o topo
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
}


// Seleciona o primeiro elemento <p> dentro de um elemento com a classe 'cabecalho' e o armazena na variável 'botaoViagensCabecalho'
const botaoViagensCabecalho = document.querySelector('.cabecalho p');
// Verifica se o botão foi encontrado no DOM
if (botaoViagensCabecalho) {
    // Adiciona um evento de clique ao botão
    botaoViagensCabecalho.onclick = () => {
        // Garante que a seção 'home' esteja visível com display 'flex'
        document.getElementById('home').style.display = 'flex';
        // Exibe a seção 'viagens' com display 'block'
        document.getElementById('viagens').style.display = 'block';
        // Oculta a seção 'detalhes-viagem' com display 'none'
        document.getElementById('detalhes-viagem').style.display = 'none';
        // Faz a rolagem suave até a seção 'viagens'
        document.getElementById('viagens').scrollIntoView({ behavior: 'smooth' });
    };
}


// Mostrar detalhes da viagem
// Função para exibir os detalhes de uma viagem selecionada
function mostrarDetalhesViagem(viagem) {
    // Oculta a seção 'home'
    document.getElementById('home').style.display = 'none';
    // Oculta a seção 'viagens'
    document.getElementById('viagens').style.display = 'none';
    // Exibe a seção de 'detalhes-viagem'
    document.getElementById('detalhes-viagem').style.display = 'block';
    // Atualiza o título da seção de detalhes com o nome da viagem
    document.getElementById('detalhes-titulo').textContent = viagem.nome;
    // Insere o conteúdo detalhado da viagem no elemento de texto.
    // Usa innerHTML para permitir formatação (como <strong>, <br> etc.)
    document.getElementById('detalhes-texto').innerHTML = viagem.detalhes;
    // Seleciona o container onde as imagens da viagem serão exibidas
    const detalhesImagemContainer = document.getElementById('detalhes-imagem-container');
    // Limpa o conteúdo anterior (caso a função seja chamada mais de uma vez)
    detalhesImagemContainer.innerHTML = '';
    // Percorre o array de URLs de imagens da viagem
    viagem.imagem.forEach(imagem => {
        // Cria um novo elemento <img> para cada imagem
        const imgElement = document.createElement('img');
        imgElement.src = imagem; // Define o caminho da imagem
        imgElement.alt = viagem.nome; // Texto alternativo com o nome da viagem
        // Define estilo de largura total e altura automática para manter a proporção
        imgElement.style.width = '100%';
        imgElement.style.height = 'auto';
        // Adiciona a imagem criada ao container
        detalhesImagemContainer.appendChild(imgElement);
    });
    // Chama a função que atualiza o mapa com base na viagem selecionada
    atualizarMapa(viagem);
    // Faz a rolagem suave até o topo da página
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


// Função para carregar dinamicamente a lista de viagens na interface
function carregarViagens() {
    // Seleciona o elemento onde os botões das viagens serão inseridos
    const lista = document.getElementById('lista-viagens');
    // Se o elemento não for encontrado, a função é encerrada
    if (!lista) return;
    // Percorre cada objeto de viagem no array 'viagens'
    viagens.forEach(viagem => {
        // Cria um novo botão para representar a viagem
        const botao = document.createElement('button');
        // Adiciona uma classe ao botão para fins de estilo
        botao.className = "botao-viagem";
        // Insere o conteúdo HTML no botão, com nome, data e local da viagem
        botao.innerHTML = `
            <strong>${viagem.nome}</strong>
            <small>${viagem.data}</small>
            <small>${viagem.local}</small>
        `;
        // Define o comportamento de clique: mostrar os detalhes da viagem correspondente
        botao.onclick = () => mostrarDetalhesViagem(viagem);
        // Adiciona o botão à lista de viagens na página
        lista.appendChild(botao);
    });
}


// Variável global que armazenará a instância do mapa Leaflet
let map;
// Função responsável por inicializar o mapa na tela
function inicializarMapa() {
    // Cria o mapa dentro do elemento com ID 'map' e centraliza em uma coordenada inicial (latitude, longitude) com nível de zoom 12
    map = L.map('map').setView([-8.1265, -34.9021], 12);
    // Adiciona camadas de mapa base do OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        // Define a atribuição de créditos para o OpenStreetMap
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map); // Adiciona a camada ao mapa
}
// Função que atualiza os marcadores do mapa com base na viagem selecionada
function atualizarMapa(viagem) {
    // Verifica se o mapa já foi inicializado; se não, chama a função de inicialização
    if (!map) {
        inicializarMapa();
    }
    // Remove todos os marcadores antigos do mapa
    map.eachLayer(layer => {
        if (layer instanceof L.Marker) {
            map.removeLayer(layer); // Remove qualquer marcador existente
        }
    });
    // Adiciona novos marcadores com base nos dados da viagem
    viagem.marcadores.forEach(marcador => {
        // Cria um novo marcador na coordenada especificada e adiciona ao mapa
        L.marker(marcador.coordenadas).addTo(map)
            // Adiciona um pop-up ao marcador com nome e descrição
            .bindPopup(`<b>${marcador.nome}</b><br>${marcador.descricao}`);
    });
}


// Inicializa ao carregar a página
carregarViagens();
