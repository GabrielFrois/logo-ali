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
            Na manhã de hoje, fui até a Reserva do Paiva, onde tive a oportunidade de explorar uma praia deslumbrante, rodeada por recifes belíssimos em todas as direções. A água estava calma e cristalina, criando o ambiente perfeito para passar a manhã toda. 
            
            No início da tarde, aproveitei para fazer uma caminhada pelo Parque da Lagoa, também localizado na Reserva do Paiva. 

            Mais tarde, almocei no shopping de Jaboatão, onde experimentei um lanche de coração de galinha da franquia local Laça Burguer, uma verdadeira delícia. 

            Para finalizar o dia, fui ao restaurante e bar Caricatura, onde me deliciei com um rodízio de pizzas. Uma noite perfeita para encerrar o dia!
        `, 
        imagem: [
            './src/img/16-12-24/praia-paiva.jpeg',
            './src/img/16-12-24/arvores-paiva.jpeg',
            './src/img/16-12-24/parque-paiva.jpeg',
            './src/img/16-12-24/papai-noel.jpeg'
        ],
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
        imagem: [
            './src/img/17-12-24/praia-piedade.jpeg',
            './src/img/17-12-24/piedade-horizonte.jpeg',
            './src/img/17-12-24/vista-shopping.jpeg'
        ],
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
            Na manhã seguinte, comecei o dia com um delicioso café no Soto Café, uma cafeteria charmosa, decorada de forma aconchegante, oferecendo lanches tanto visualmente atraentes quanto saborosos. 
            
            Após essa pausa relaxante, segui para o Recife Antigo, onde tive a oportunidade de conhecer o icônico Marco Zero. Ali, visitei a Caixa Cultural, que já foi a sede da Bolsa de Valores e hoje serve como um espaço dedicado a eventos e exposições. No dia da minha visita, estavam expostas diversas pinturas e fotografias, tornando a experiência ainda mais enriquecedora. De lá, também consegui avistar, à distância, o impressionante Parque de Esculturas de Brennand. 

            Quando a hora do almoço chegou, optei pelo restaurante Babagula, uma excelente escolha com pratos deliciosos e preços acessíveis. Depois de me deliciar com a comida, continuei explorando o bairro. 
            
            Visitei a Igreja da Madre de Deus e, em seguida, passei pela charmosa Livraria Jaqueira. 
            
            Para finalizar a tarde com chave de ouro, tomei um café no The Coffee, perfeito para uma pausa tranquila.
        `, 
        imagem: [
            './src/img/18-12-24/soto-cafe.jpeg',
            './src/img/18-12-24/letreiro-recife.jpeg',
            './src/img/18-12-24/caixa-cultural.jpeg',
            './src/img/18-12-24/exposicao-caixa-cultural.jpeg',
            './src/img/18-12-24/igreja.jpeg',
            './src/img/18-12-24/livraria.jpeg',
            './src/img/18-12-24/the-coffee.jpeg'
        ],
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
                nome: 'The Coffee',
                coordenadas: [-8.05857893774096, -34.8702537053737],
                descricao: 'The Coffee'
            }
        ]
    },
    { 
        nome: 'Instituto Ricardo Brennand', 
        data: '19/12/2024', 
        local: 'Recife - PE', 
        detalhes: `
            Na manhã de hoje, decidi aproveitar o conforto do hotel, relaxando à beira da piscina e curtindo o clima tranquilo. 
            
            Já na parte da tarde, embarquei em uma visita ao Instituto Ricardo Brennand, um destino que, apesar de um pouco afastado, se revelou uma experiência incrível. Conhecido como o maior museu de armas brancas da América Latina, o instituto é um verdadeiro castelo, repleto de exposições que vão desde pinturas e esculturas até coleções impressionantes de armas históricas. Passei a tarde inteira explorando aquele majestoso espaço, me maravilhando com sua arquitetura e o vasto acervo.
            
            Para encerrar o dia, pedi um lanche artesanal da Firetha, uma escolha deliciosa para a noite.
        `, 
        imagem: [
            './src/img/19-12-24/entrada-instituto.jpeg',
            './src/img/19-12-24/estatua.jpeg',
            './src/img/19-12-24/carruagem.jpeg',
            './src/img/19-12-24/cristo.jpeg',
            './src/img/19-12-24/armas.jpeg'
        ],
        marcadores: [
            {
                nome: 'Hotel Costa Mar Recife',
                coordenadas: [-8.173931491676221, -34.91642858650923],
                descricao: 'Hotel beira mar com excelente vista'
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

            Depois de deixar o hotel, ainda tive a oportunidade de conhecer a Praia de Candeias, onde fiquei até o momento de seguir para o aeroporto. Lá, me despedi das belas paisagens e peguei meu voo de volta para casa, concluindo assim a minha primeira viagem, uma viagem inesquecível.
        `, 
        imagem: [
            './src/img/20-12-24/piedade.jpeg',
            './src/img/20-12-24/candeias.jpeg'
        ],
        marcadores: [
            {
                nome: 'Hotel Costa Mar Recife',
                coordenadas: [-8.173931491676221, -34.91642858650923],
                descricao: 'Hotel beira mar com excelente vista'
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

// Elementos da interface
const logo = document.getElementById('logo');
if (logo) {
    logo.onclick = () => {
        document.getElementById('home').style.display = 'flex';
        document.getElementById('viagens').style.display = 'block';
        document.getElementById('detalhes-viagem').style.display = 'none';
        document.getElementById('botao-voltar-container').style.display = 'none'; // ← ocultar botão
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
}

const botaoViagensCabecalho = document.querySelector('.cabecalho p');
if (botaoViagensCabecalho) {
    botaoViagensCabecalho.onclick = () => {
        document.getElementById('home').style.display = 'flex';
        document.getElementById('viagens').style.display = 'block';
        document.getElementById('detalhes-viagem').style.display = 'none';
        document.getElementById('botao-voltar-container').style.display = 'none'; // ← ocultar botão
        document.getElementById('viagens').scrollIntoView({ behavior: 'smooth' });
    };
}

// Mostrar detalhes da viagem
function mostrarDetalhesViagem(viagem) {
    document.getElementById('home').style.display = 'none';
    document.getElementById('viagens').style.display = 'none';
    document.getElementById('detalhes-viagem').style.display = 'block';
    document.getElementById('botao-voltar-container').style.display = 'block'; // ← mostrar botão

    document.getElementById('detalhes-titulo').textContent = viagem.nome;
    document.getElementById('detalhes-data').textContent = viagem.data;
    document.getElementById('detalhes-local').textContent = viagem.local;
    document.getElementById('detalhes-texto').innerHTML = viagem.detalhes;

    const colunaEsquerda = document.getElementById('imagens-esquerda');
    const colunaDireita = document.getElementById('imagens-direita');

    // Limpa imagens antigas
    colunaEsquerda.innerHTML = '';
    colunaDireita.innerHTML = '';

    // Divide as imagens alternadamente entre esquerda e direita
    viagem.imagem.forEach((imagem, index) => {
        const img = document.createElement('img');
        img.src = imagem;
        img.alt = viagem.nome;
        img.style.marginTop = `${index * 100}px`;

        if (index % 2 === 0) {
            colunaEsquerda.appendChild(img);
        } else {
            colunaDireita.appendChild(img);
        }
    });

    atualizarMapaComViagem(viagem);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Carregar viagens na interface
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

// Mapa
let map;
let marcadoresAtuais = [];

function inicializarMapa() {
    map = L.map('map').setView([-8.1265, -34.9021], 12);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
}

function atualizarMapaComViagem(viagem) {
    if (!map) {
        inicializarMapa();
    }

    // Remove marcadores anteriores
    marcadoresAtuais.forEach(m => map.removeLayer(m));
    marcadoresAtuais = [];

    if (viagem.marcadores && viagem.marcadores.length > 0) {
        const bounds = L.latLngBounds(viagem.marcadores.map(m => m.coordenadas));
        map.fitBounds(bounds, { padding: [30, 30] });
    }

    viagem.marcadores.forEach(marcador => {
        const marker = L.marker(marcador.coordenadas)
            .addTo(map)
            .bindPopup(`<b>${marcador.nome}</b><br>${marcador.descricao}`);
        marcadoresAtuais.push(marker);
    });
}

// Inicializa ao carregar a página
carregarViagens();