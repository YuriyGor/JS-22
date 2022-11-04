// Модуль 2. Заняття 3. Масиви

// Example 1 - Базові операції з масивом
// Task1
// Створіть масив genres з елементами "Jazz" та "Blues".
// Додайте «Рок-н-рол» до кінця.
// Виведіть у консоль перший елемент масиву.
// Виведіть останній елемент масиву в консоль. Код повинен працювати для масиву довільної довжини.
// Видаліть перший елемент та виведіть його в консоль.
// Вставте «Country» та «Reggae» на початок масиву.


// let genres = [`Jazz`, `Blues`];
// // genres.push(`Рок-н-рол`);
// // console.log(genres);

// // console.log("перший", genres[0]);

// // const lastIndex = genres.length - 1;
// // console.log("last", genres[lastIndex])

// // const firstElement = genres.shift();
// // console.log(genres);
// // console.log(firstElement)

// genres.unshift(`Country`, `Reggae`);
// console.log(genres);



// Example 2 - Масиви та рядки
// Task2
// Напиши скрипт для обчислення площі прямокутника зі сторонами, значення яких
// зберігаються у змінній values у вигляді рядка.Значення гарантовано розділені пробілом.

// const values = '8 11';
// const sides = values.split(` `);
// console.log(sides);

// const square = sides[0] * sides[1];
// console.log(square)



// Example 3 - Перебір масиву
// Task3
// Напиши скрипт для перебору масиву fruits циклом for.Для кожного елемента масиву виведи в консоль
// рядок у форматі номер_елемента: значення_елемента.Нумерація елементів має починатися з 1.

// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];

// for (let i = 0; i < fruits.length; i += 1) {
//     const orderNumber = i + 1;
//     console.log(`${i}: ${fruits[i]}`)
// }



// Example 4 - Масиви та цикли
// Task4
// Напиши скрипт, який виводить у консоль ім'я та телефонний номер користувача.
// У змінних names та phones зберігаються рядки імен та телефонних номерів, розділені комами.
// Порядковий номер імен та телефонів у рядках вказують на відповідність.
// Кількість імен та телефонів гарантовано однакова.

// const names = 'Jacob, William, Solomon, Artemis';
// const phones = '89001234567,89001112233,890055566377,890055566300';

// // 1. Перевести рядки в масиви
// // 2. Вивести в консоль Jacob - 89001234567  ...

// const namesArray = names.split(`, `);
// console.log(namesArray)

// const phoneArrays = phones.split(`, `);
// console.log(phoneArrays);

// for (let i = 0; i < names.length; i += 1) {
//     console.log(`${namesArray[i]} --- ${phoneArrays[i]}`)
// }


// for (let name of namesArray) {
//     const index = namesArray.indexOf(name);
//     console.log(`${name} --- ${phoneArrays[index]}`);
// }



// Example 5 - Масиви та рядки
// Task5
// Напиши скрипт який виводить у консоль усі слова рядка окрім першого та останнього.
// Результуючий рядок не повинен починатися або закінчуватися символ пробілу.
// Скрипт повинен працювати для будь - якого рядка.

// const string = 'Welcome to the future';
// const words = string.split(` `);

// console.log(words);


// // const shortString = words.splice(1, words.length - 2);
// // console.log(shortString);


// // for (let i = 0; i < words.length - 1; i += 1) {
// //     if (i === 0 || i === words.length - 1) {
// //          continue
// //      }
// //     console.log(words[i])
// // }


// // for (let i = 1; i < words.length - 1; i += 1) {
// //     console.log(words[i])
// // }


// // Прибираэмо 1-й та щстанный елемент

// words.shift();
// words.pop()

// let newStr = words.join(` `);
// console.log(string);
// console.log(newStr)



// Example 6 - Масиви та рядки
// Task6
// Напиши скрипт, який «розгортає» рядок (зворотний порядок букв) і виводить її в консоль.

// const string = 'Welcome to the future';

// console.log(string[0])

// for (let i = 0; i < string.length - 1; i += 1) {
//     console.log(string[i]);
// }


// let nerStr = ``;
// for (let i = string.length - 1; i >= 0; i -= 1) {
//     console.log(i, string[i], newStr);
//     newStr += string[i]
// }

// console.log(newStr)


// const array = string.split(``);
// console.log(array);
// array.reverse();
// console.log(array);
// const newString = array.join(``);
// console.log(string, `|`, newString);




// Example 7 - Сортування масиву
// Task7
// Напиши скрипт сортування масиву.

// const langs = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];
// console.log(langs);
// langs.sort()
// console.log(langs)




// Example 8 - Пошук елемента
// Task8
// Напиши скрипт пошуку найменшого числа у масиві.Код повинен працювати для
// будь - якого масиву чисел.Використовуй цикл для розв'язання задачі.

// const numbers = [2, 17, 94, 1, 23, 37];
// let minNumber = numbers[0];

// console.log(numbers, minNumber);

// for (let item of numbers) {
//     console.log(
//         `Min: ${minNumber};
//         current number: ${ item }`
//     )
//     if (item < minNumber) {
//         minNumber = item
//     }
// }

// console.log(minNumber)
