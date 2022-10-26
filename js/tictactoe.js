const TicTacToe = {
  allBoxes: [...document.querySelectorAll(".box")],
  gameStatus: document.getElementById("gameStatus"),
  buttonReload: document.querySelector(".reload_button"),
  playerX: "X",
  playerO: "O",
  turn: "",
  valuesX: [],
  valuesO: [],
  isOver: false,

  winningPattern: [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ],

  init: () => {
    // J'initialise le premier tour au joueur X
    TicTacToe.turn = TicTacToe.playerX;

    TicTacToe.allBoxes.forEach((box) => {
      box.addEventListener("click", TicTacToe.play, { once: true });
    });

    TicTacToe.buttonReload.addEventListener("click", (e) => {
      location.reload();
    });
  },

  play: (event) => {
    if (!TicTacToe.isOver) {
      // Je rempli la case correspondante avec le symbole du joueur actuel
      event.currentTarget.innerText = TicTacToe.turn;
      // J'alterne les tours des joueurs
      TicTacToe.turn =
        TicTacToe.turn === TicTacToe.playerX
          ? TicTacToe.playerO
          : TicTacToe.playerX;

      TicTacToe.gameStatus.innerText = `C'est au tour du joueur ${TicTacToe.turn}`;

      // Je crée une variable contenant l'id de la case sur laquelle a lieu le clic
      let id = event.currentTarget.id;

      // Je rempli progressivement le tableau avec les positions du joueur actuel
      TicTacToe.turn === TicTacToe.playerX
        ? TicTacToe.valuesO.push(id - 1)
        : TicTacToe.valuesX.push(id - 1);
      TicTacToe.valuesX.sort();
      TicTacToe.valuesO.sort();

      TicTacToe.check();
    }
  },

  // Fonction qui vérifie l'état du jeu
  check: () => {
    // Pour commencer, je compare chacune des combinaisons gagnantes aux tableaux des deux joueurs (respectivement X et O)
    for (let combination of TicTacToe.winningPattern) {
      if (
        TicTacToe.valuesX.includes(combination[0]) &&
        TicTacToe.valuesX.includes(combination[1]) &&
        TicTacToe.valuesX.includes(combination[2])
      ) {
        TicTacToe.turn = TicTacToe.playerX;
        TicTacToe.isOver = true;
        TicTacToe.gameStatus.innerText = `Et c'est gagné pour player ${TicTacToe.turn} !`;
        break;
      } else if (
        TicTacToe.valuesO.includes(combination[0]) &&
        TicTacToe.valuesO.includes(combination[1]) &&
        TicTacToe.valuesO.includes(combination[2])
      ) {
        TicTacToe.turn = TicTacToe.playerO;
        TicTacToe.isOver = true;
        TicTacToe.gameStatus.innerText = `Et c'est gagné pour player ${TicTacToe.turn} !`;
        break;
      } else if (TicTacToe.allBoxes.every((box) => box.innerText != "")) {
        // Si toutes les cases ont été remplies mais qu'il n'y pas de gagnant alors je mets fin au jeu et j'affiche le message d'égalité
        TicTacToe.isOver = true;
        TicTacToe.gameStatus.innerText = `Oups ! Egalité !`;
      }
    }
  },
};
