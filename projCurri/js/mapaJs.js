class Mapa {
    constructor(col, lin) {
        this.col = col;
        this.lin = lin;
        this.pontuacao = 0;
        this.tempo = 0;
        this.matrizMapa = [];

        // Inicializa a matriz com valores padrão
        for (let i = 0; i < lin; i++) {
            this.matrizMapa[i] = [];
            for (let j = 0; j < col; j++) {
                this.matrizMapa[i][j] = "Vazio"; // Inicializando com "Vazio"
            }
        }
    }

    mostrar() {
        console.log(this.matrizMapa);
    }

    renderizarNoHTML() {
        let gameBoard = document.getElementById("tabuleiro"); // Pega a div do jogo
        gameBoard.innerHTML = ''; // Limpa qualquer conteúdo existente
        let table = document.createElement('table');

        this.matrizMapa.forEach((linha, i) => {
            let tr = document.createElement('tr');

            linha.forEach((elemento, j) => {
                let td = document.createElement('td'); // Criando uma célula
                td.textContent = elemento === null ? "Vazio" : elemento; // Substitui null por "Vazio"
                
                // Atribuindo um ID único para cada célula
                td.id = `td${i}${j}`; // O ID será algo como "td00", "td01", "td10", etc.

                tr.appendChild(td); // Adicionando a célula à linha
            });
            table.appendChild(tr);
        });

        gameBoard.appendChild(table); // Adiciona a tabela ao HTML
    }

    colocarTerrenoNoMapa(terreno, linha, coluna) {
        // Coloca o terreno na matriz na posição especificada
        this.matrizMapa[linha][coluna] = terreno;
        this.renderizarNoHTML(); // Atualiza a tabela no HTML
    }
}

// Inicializando inventários e recursos
let qntFloresta = 0;
let qntPedreira = 0;
let qntDeserto = 0;
let qntOceano = 0;
let qntCaminho = 0;
let inventarioTerreno = [qntFloresta, qntPedreira, qntDeserto, qntOceano, qntCaminho];

let madeira = 0;
let pedra = 0;
let comida = 0;
let mana = 0;
let inventarioRecursos = [madeira, pedra, comida, mana];

// Criando o mapa e renderizando a tabela
let m1 = new Mapa(5, 5);
m1.mostrar();
m1.renderizarNoHTML();

// Exemplo de como acessar e manipular um elemento usando o id
// Aqui você acessa o td na posição (0, 0)
let td00 = document.getElementById("td00");
td00.style.backgroundColor = "yellow"; // Altera a cor do fundo da célula (0, 0)
