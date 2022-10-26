
// Работаем с коллекцией карточек в trello
//     - Метод splice()
//     - Удалить
//     - Добавит
//     - Обновить


const cards = [
    `Карточка-1`,
    `Карточка-2`,
    `Карточка-3`,
    `Карточка-4`,
    `Карточка-5`,
];

console.table(cards);


// Удаление эл-тов по индексу

// const cardToRemove = `Карточка-3`;
// const index = cards.indexOf(cardToRemove);
// console.log(index);
// cards.splice(index, 1);

// console.table(cards);


// Добавление (по индексу)

// const cardToInsert = `Карточка-6`;
// const index = 3;

// // cards.splice(3, 0, 5, 10, 20);
// cards.splice(index, 0, cardToInsert);

// console.table(cards);
// const index = 3;


// Обновление (по индексу)

const cardToUpdate = `Карточка-4`;
const index = cards.indexOf(cardToUpdate);

console.log(index);

cards.splice(index, 1, `Обновленная карточка-4`);

console.table(cards);


