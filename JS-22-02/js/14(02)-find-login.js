
// Напиши функцию findLogin(allLogins, login) для поиска логина
//     - Если логина нет, вывести сообщение`Пользователь [логин] не найден.`
//     - Если логин найден, вывести сообщение`Пользователь [логин] найден.`
 
 
const logins = [`mangoDoge`, `k1widab3`, `poly1scute`, `aj4x3m`];

// const message = logins.includes(loginToFind)
//     ? `Пользователь ${loginToFind} найден.`
//     : `Пользователь ${loginToFind} не найден.`;

// // console.log(message);

// const findLogin = function (allLogins, loginToFind) {
//     // console.log(allLogins);
//     // console.log(loginToFind);

//     // let message = `Пользователь ${loginToFind} не найден.`;

//     for (const login of allLogins) {
//         if (login === loginToFind) {
//             return `Пользователь ${loginToFind} найден.`;
//     }
//     }
//     return `Пользователь ${loginToFind} не найден.`;
// };


const findLogin = function (allLogins, loginToFind) {
    return allLogins.includes(loginToFind)
        ? `Пользователь ${loginToFind} найден.`
        : `Пользователь ${loginToFind} не найден.`;
    
}

console.log(findLogin(logins, `mangoDoge`));
console.log(findLogin(logins, `k1widab3`));
console.log(findLogin(logins, `polcute`));
console.log(findLogin(logins, `aj4x3m`));