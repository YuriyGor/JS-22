
// Напиши скрипт поиска логина
//     - Если логина нет, вывести сообщение "Пользователь [логин] не найден."
//     - Если нашли логин, вывести сообщение "Пользователь [логин] найден."

//     - Сначала через  for
//     - Потом через for...of
//     - Логика break
//     - Метод includes() с тернарным оператором


const logins = [`mangoD4`, `kiwi3st`, `poly1scute`, `ajax3m4b`];
const loginToFind = `poly1scute`;
// let message = `Пользователь ${loginToFind} не найден.`;

// for (let i = 0; i < logins.length; i += 1) {
//     const login = logins[i];

//     console.log(`Login: `, login);
//     console.log(`${login} === ${loginToFind}: `, login === loginToFind);

//     if (login === loginToFind) {
//         console.log(`Уррраааа, равны!!!!!`);
//         message = `Пользователь ${loginToFind} найден.`;
//         break;
//    }
//         message = `Пользователь ${loginToFind} не найден.`;
// }

// console.log(message);


// for (const login of logins) {
//     console.log(`Login: `, login);
//     console.log(`${login} === ${loginToFind}: `, login === loginToFind);

//     if (login === loginToFind) {
//         console.log(`Уррраааа, равны!!!!!`);
//         message = `Пользователь ${loginToFind} найден.`;
//         break;
//    }
// }

// console.log(message);

// const a = 15 > 10 ? `ага` : `нет`;

const message = logins.includes(loginToFind)
  ? `Пользователь ${loginToFind} найден`
  : `Пользователь ${loginToFind} не найден`;

console.log(message);