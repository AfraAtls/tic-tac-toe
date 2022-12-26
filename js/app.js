const app = {
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
      // Initialisation du premier tour au joueur X
      app.turn = app.playerX; 
      app.allBoxes.forEach((box) => {
        box.addEventListener("click", app.play, { once: true });
      }); 
      app.buttonReload.addEventListener("click", (e) => {
        location.reload();
      });
    },
  
    play: (event) => {
      if (!app.isOver) {
        // Remplissage de la case correspondante avec le symbole du joueur actuel
        event.currentTarget.innerText = app.turn;
        // Alternance des tours
        app.turn =
        app.turn === app.playerX
            ? app.playerO
            : app.playerX;
            app.gameStatus.innerText = `C'est au tour du joueur ${app.turn}`; 
        // variable contenant l'id de la case sur laquelle a lieu le clic
        const id = event.currentTarget.id;  
        // Remplissage progressif des tableaux de position
        app.turn === app.playerX
          ? app.valuesO.push(id - 1)
          : app.valuesX.push(id - 1);
        app.valuesX.sort();
        app.valuesO.sort();
        app.check();
      }
    },
    // Fonction qui vérifie l'état du jeu
    check: () => {
      // comparaison de chacune des combinaisons gagnantes aux tableaux des deux joueurs (respectivement X et O)
      for (let combination of app.winningPattern) {
        if (
          app.valuesX.includes(combination[0]) &&
          app.valuesX.includes(combination[1]) &&
          app.valuesX.includes(combination[2])
        ) {
          app.turn = app.playerX;
          app.isOver = true;
          app.gameStatus.innerText = `Et c'est gagné pour player ${app.turn} !`;
          break;
        } else if (
          app.valuesO.includes(combination[0]) &&
          app.valuesO.includes(combination[1]) &&
          app.valuesO.includes(combination[2])
        ) {
          app.turn = app.playerO;
          app.isOver = true;
          app.gameStatus.innerText = `Et c'est gagné pour player ${app.turn} !`;
          break;
        } else if (app.allBoxes.every((box) => box.innerText != "")) {
          // Si toutes les cases ont été remplies mais qu'il n'y pas de gagnant alors fin au jeu et affichage d'un message d'égalité
          app.isOver = true;
          app.gameStatus.innerText = `Oups ! Egalité !`;
        }
      }
    },
  };
  
document.addEventListener("DOMContentLoaded", app.init);