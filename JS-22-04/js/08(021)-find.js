
// Array.protorype.find()
//     - Поэлементно перебирает оригинальный массив
//   - Возвращает первый элемент удовлетворяющий условию или undefined


const numbers = [5, 10, 15, 20, 25];

const number = numbers.find(number => number === 10);
// console.log(number);

const players = [
  { id: `player-1`, name: `Mango`, timePlayed: 310, points: 54, online: false },
  { id: `player-2`, name: `Poly`, timePlayed: 470, points: 92, online: true },
  { id: `player-3`, name: `Kiwi`, timePlayed: 230, points: 48, online: true },
  { id: `player-4`, name: `Ajax`, timePlayed: 1500, points: 71, online: false },
  { id: `player-5`, name: `Chelsy`, timePlayed: 80, points: 48, online: true },
];


// Ищем игрока по id

const playerIdFind = `player-3`;

const playerWithId = players.find(player => player.id === playerIdFind);
// console.log(playerWithId);

// const findPlayerById = (allPlayer, playerId) => {
//     return allPlayer.find(player => player.id === playerId);
// };
const findPlayerById = (allPlayer, playerId) =>
    allPlayer.find(({ id }) => id === playerId);
  
// console.log(findPlayerById(players, `player-1`));
// console.log(findPlayerById(players, `player-4`));


// Ищем игрока по имени

const playedNameToFind = players.find(plater => playerName === playedNameToFind);
console.log(playedNameToFind);