
// Array.prototype.sort(callback(currentEl, nextEl){})
//     - Сортирует и ИЗМЕНЯЕТ оригинальный массив
//     - По умолчанию:
// - сортирует по возрвстанию
//     - приводит элементы к строке и сортирует по
//     [Unicode]( https://unicode-table.com/en/ )

const numbers = [1, 9, 6, 2, 3];
// numbers.sort();
console.log(`numbers`, numbers);

const letters = [`b`, `B`, `a`, `A`];
// letters.sort();
console.log(`letters`, letters)


// compareFunction - функция сравнения(callback)
// Элемениы массива сортируются в соответствии с ее возвращаемым значением
//     - если compareFunction(А, В) меньше 0, сортировка поставит А перед В
//     - если compareFunction(А, В) больше 0, сортировка поставит В перед А
//     - если compareFunction(А, В) вернет 0, сортировка оставит А и В неизменными
//     по отношению друг к другу, но отсортирует их по отношению ко всем другим эл-там

// numbers.sort((curEl, nextEl) => {
//     return nextEl - curEl;
// });

// console.log(numbers);


// Как создать копию массива, чтобы не сортировать оригинальный
//     - Array.prototype.slice()
//     - Операция spread


// const copy = [...numbers];
// copy.sort();
// console.log(`numbers`, numbers);

// или так:
const ascSortedNumbers = [...numbers].sort((a, b) => a - b);
const descSortedNumbers = [...numbers].sort((a, b) => b - a);
console.log(`ascSortedNumbers`, ascSortedNumbers);
console.log(`descSortedNumbers`, descSortedNumbers);

console.log([1, 2, 3, 4, 5].reverse());



// Кастомная сортировка сложных типов

const players = [
  { id: `player-1`, name: `Mango`, timePlayed: 310, points: 54, online: false },
  { id: `player-2`, name: `Poly`, timePlayed: 470, points: 92, online: true },
  { id: `player-3`, name: `Kiwi`, timePlayed: 230, points: 48, online: true },
  { id: `player-4`, name: `Ajax`, timePlayed: 150, points: 71, online: false },
  { id: `player-5`, name: `Chelsy`, timePlayed: 80, points: 48, online: true },
];



// По игровому времени

const sortedByBestPlayers = [...players].sort((prevPlayer, nextPlayer) =>
    prevPlayer.timePlayed - nextPlayer.timePlayed,
);
console.table(sortedByBestPlayers);
    
const sortedByWorstPlayers = [...players].sort((prevPlayer, nextPlayer) =>
    prevPlayer.timePlayed - nextPlayer.timePlayed,
);
    console.table(sortedByWorstPlayers);
