
// Array.prototype.reduce()
//     - Поэлементно перебирает оригинальный массив
//     - Возвращает сто угодно
//     - Заменяет все на свете, но использовать надо с умом 


const numbers = [5, 10, 15, 20, 25];

const total = numbers.reduce((acc, number) => acc + number, 0);
    // console.log(total);

// accumulator = 0 -> number = 5 -> return 0 + 5
// accumulator = 5 -> number = 10 -> return 5 + 10
// accumulator = 15 -> number = 15 -> return 15 + 15
// accumulator = 20 -> number = 20 -> return 30 + 20
// accumulator = 25 -> number = 25 -> return 50 + 25
  


// Считаем общую зарплату

const salary = {
    mango: 100,
    poly: 50,
    ajax: 150,
};

const totalSalary = Object.values(salary).reduce((total, value) => total + value, 0,);
// console.log(totalSalary);



// Считаем общее кол-во часов

const players = [
  { id: `player-1`, name: `Mango`, timePlayed: 310, points: 54, online: false },
  { id: `player-2`, name: `Poly`, timePlayed: 470, points: 92, online: true },
  { id: `player-3`, name: `Kiwi`, timePlayed: 230, points: 48, online: true },
  { id: `player-4`, name: `Ajax`, timePlayed: 150, points: 71, online: false },
  { id: `player-5`, name: `Chelsy`, timePlayed: 80, points: 48, online: true },
];

// const totalTimePlayed = players.reduce((totalTime, player) => {
//     return totalTime + player.timePlayed;
// }, 0);
const totalTimePlayed = players.reduce(
    (totalTime, player) => totalTime + player.timePlayed,
    0,
);
// console.log(totalTimePlayed);



// Считаем общую сумму товаров корзины

const cart = [
    { label: `Apples`, price: 100, quantity: 2 },
    { label: `Bananas`, price: 120, quantity: 3 },
    { label: `Lemons`, price: 70, quantity: 4 },
];

// const totalAmount = cart.reduce((total, item) => {
//     return total + item.price * item.quantity;
// }, 0);
// const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);
const totalAmount = cart.reduce((total, {price, quantity}) => total + price * quantity, 0);
// console.log(totalAmount);




// Собираем все теги из твитов

const tweets = [
  { id: `000`, likes: 5, tags: [`js`, `nodejs`] },
  { id: `001`, likes: 52, tags: [`html`, `css`] },
  { id: `002`, likes: 17, tags: [`html`, `js`, `nodejs`] },
  { id: `003`, likes: 8, tags: [`css`, `react`] },
  { id: `004`, likes: 0, tags: [`js`, `nodejs`, `react`] },
];

// const allTags = tweets.reduce((tags,tweet) => {
//     tags.push(...tweet.tags);

//     return tags;
// }, []);

// или так

// const allTags = tweets.reduce((tags, tweet) => {
// //   tags.push(...tweet.tags);

//   return [...tags, ...tweet.tags];
// }, []);

// или так

const allTags = tweets.reduce((tags, tweet) => [...tags, ...tweet.tags], []);
console.log(allTags);



// Ведем статистику тегов

// const tagsStats = allTags.reduce((acc, tag) => {
//     console.log(acc);

//     if(acc[tag]) {
//         acc[tag] += 1;

//         return acc;
//     }

//     acc[tag] = 1;
        
//     return acc;
// }, {});
// console.log(tagsStats);

// или так(тернарник)

const tagsStats = allTags.reduce((acc, tag) => {
       return {
        ...acc,
        [tag]: acc[tag] ? acc[tag] + 1 : 1,
    };
}, {});
console.log(tagsStats);


// если свойство с ключом tag есть, увеличить его значение на 1
// если нет  -  сделать и записать 1