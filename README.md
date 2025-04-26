# Logo Ali - Diário de Viagens
**Logo Ali** é um simples projeto criado para compartilhar as minhas experiências de viagem. Aqui, vou relatar minhas aventuras, com textos, fotos e informações sobre os lugares que visitei e espero continuar atualizando com novos destinos.

## Sobre o Projeto
Este projeto é uma página web construída com **HTML**, **CSS** e **JavaScript**. Ele serve como um diário pessoal, onde vou registrar cada viagem, com:
- **Textos**: Minhas experiências, reflexões e histórias de cada destino.
- **Fotos**: Imagens que capturam momentos especiais das minhas viagens.
- **Localizações**: Detalhes sobre os lugares que estou visitei, incluindo mapas e dicas úteis.

## Tecnologias Utilizadas
- **HTML**: Para a estrutura da página e conteúdo básico.
- **CSS**: Para o design e estilização das páginas.
- **JavaScript**: Para interatividade, como mapas dinâmicos e galerias de fotos.

## Protótipo Figma
## Página Inicial do Site
![Protótipo da página principal do site](/src/img/figma/pagina-principal.png)

## Página de Conteúdo do Diário
![Protótipo das páginas do diário](/src/img/figma/pagina-conteudo.png)

## Implementação de Mapas
Exemplo de código que será utilizado para implementar mapas ao projeto:
```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />
    <style>
        /* Definir o tamanho do mapa */
        #map {
            height: 400px;
            width: 100%;
        }
    </style>
</head>
<body>
    <h1>Praia do Paiva - Pernambuco</h1>
    <div id="map"></div>

    <script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
    <script>
        // Criar o mapa e definir coordenadas da Praia do Paiva
        const map = L.map('map').setView([-8.4058, -35.0145], 13);

        // Adicionar um mapa base usando tiles do OpenStreetMap
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        // Adicionar um marcador na Praia do Paiva
        L.marker([-8.4058, -35.0145]).addTo(map)
            .bindPopup("<b>Praia do Paiva</b><br>Pernambuco - Brasil")
            .openPopup();
    </script>
</body>
</html>
```
