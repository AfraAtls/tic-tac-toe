document.addEventListener("DOMContentLoaded", TicTacToe.init);

// const allBoxes = [...document.querySelectorAll(".box")];

// let valuesX = [];
// let valuesO = [];
// let isOver = false;
// let gameStatus = document.getElementById("gameStatus");
// // let attribut = test.getAttribute("id");

// let buttonReload = document.getElementById("reload_button");

// const playerX = "X";
// const playerO = "O";
// let turn = playerO;
// const winningPattern = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
//   [0, 3, 6],
//   [1, 4, 7],
//   [2, 5, 8],
//   [0, 4, 8],
//   [2, 4, 6],
// ];

// // ecouteur de clic
// allBoxes.forEach((box) => {
//   box.addEventListener("click", play, { once: true });
// });

// buttonReload.addEventListener("click", (e) => {
//   location.reload();
// });

// // fonction qui contrôle le jeu
// function play(event) {
//   if (!isOver) {
//     event.currentTarget.innerText = turn;
//     turn = turn === playerX ? playerO : playerX;
//     gameStatus.innerText = `C'est au tour du joueur ${turn}`;

//     // console.log(event.currentTarget.attributes.id);

//     let id = event.currentTarget.id;
//     console.log(id);
//     turn === playerX ? valuesO.push(id - 1) : valuesX.push(id - 1);
//     valuesX.sort();
//     valuesO.sort();
//     // console.log(`Tableau X ${valuesX}`);
//     // console.log(`Tableau O : ${valuesO}`);

//     check();
//   }
// }

// // fonction censée vérifiée que toutes les cases ont bien été remplies

// // fonction censée checker le résultat à la fin de la partie

// function check() {
//   for (let combination of winningPattern) {
//     if (
//       valuesX.includes(combination[0]) &&
//       valuesX.includes(combination[1]) &&
//       valuesX.includes(combination[2])
//     ) {
//       turn = playerX;
//       isOver = true;
//       gameStatus.innerText = `Bravo Player ${turn}`;
//       break;
//     } else if (
//       valuesO.includes(combination[0]) &&
//       valuesO.includes(combination[1]) &&
//       valuesO.includes(combination[2])
//     ) {
//       turn = playerO;
//       isOver = true;
//       gameStatus.innerText = `Bravo Player ${turn}`;
//       break;
//     } else if (allBoxes.every((box) => box.innerText != "")) {
//       isOver = true;
//       gameStatus.innerText = `Oups ! Egalité !`;
//     }
//   }
// }
