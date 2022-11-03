// Объекты(делаем плейлист музыки: имя, рейтинг, треки, кол - во треков)
//     - Литерал объекта
//     - Свойства, ключи(имя) и значения
//     - Как отличить объект от области видимости

// const playlist = {
//     name: `Мой супер плейлист`,
//     rating: 5,
//     tracks: [`трек-1`, `трек-2`, `трек-3`],
//     trackCount: 3,
// };

// console.log(playlist);

// const x = {};

// const fn = function (myObject) {
//     // myObject = {a: 1, b: 2}
//     console.log(myObject);
// };

// fn({ a: 1, b: 2 });


// const rtfm = function () {
//     return {a:5};
// };

// console.log(rtfm())


//     Доступ к свойству
//         - object.keys
//         - obj[`key`]
//     - отсутствующие свойства        

const playlist = {
  name: `Мой супер плейлист`,
  rating: 5,
  tracks: [`трек-1`, `трек-2`, `трек-3`],
  trackCount: 3,
};

// playlist.qwerty = 5;
// playlist.rating = 10;

// console.log(playlist);

// console.log(playlist);
// console.log(playlist.name);
// console.log(playlist.tracks);

const propertyName = `tracks`;

// console.log(playlist[propertyName]);

// console.log(playlist.rating);
// console.log(playlist[`rating`]);



// Короткая запись свойств

const username = `Mango`;
const email = `mango@mail.com`;

const signupData = {
    username,
    email,
};

// console.log(signupData);



// Вычисляемые свойства

/* <input name="color" value="tomato"> */

const inputName = `color`;
const inputValue = `tomato`;

const colorPickerData = {
    [inputName]: inputValue,
};

// console.log(colorPickerData);



// Ссылочный тип {} === {}

// const a = { x: 1, y: 2 };
// const b = a;

// console.log({ a: 1 } === { a: 1 });

// console.log(b === a);

// a.hello = 100;

// console.log(a);
// console.log(b);



// Массивы и свойства  -  это объекты

// const a = [1, 2, 3];

// a.hello = `:)`;

// console.log(a);


// const fn = function () {
//     console.log(`hello`);
// };

// fn.hello = `;)`

// console.dir(fn.hello);
