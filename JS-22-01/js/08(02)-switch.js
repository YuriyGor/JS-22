


// const stars = 6;
// let price;

// if (stars === 1  ||  stars === 2) {
//     price = 20;
// } else if (stars === 3  ||  stars === 4) {
//     price = 30;
// // } else if (stars === 5 {
// //     price = 120;
// // } else if (stars === 4) {
// //     price = 70;
// } else if (stars === 5) {
//     price = 120;
// } else {
//     console.log(`Такого кол-ва звезд нет`);
// }

// console.log(price);


// switch (stars) {
//   case 1:
//   case 2:
//     price = 20;
//     break;

//   case 3:
//   case 4:
//     price = 30;
//     break;

//   case 5:
//     price = 120;
//     break;

//   default:
//     console.log(`Такого кол-ва звезд нет`);
// }

// console.log(price);



// Напиши скрипт выбора опции доставки товара.
// Опция хранится в переменной option: 1-самовывоз, 2-курьер, 3-почта.

// 1. сделать переменные
const option = 3;
let message = ``;

// 2. сделать switch 1 2 3
// 3. в каждом кейсе записать в месседж строку
switch (option) {
    case 1:
        message = `Вы сможете забрать товар завтра с 12 в нашем офисе`;
        break;
    case 2:
        message = `Курьер доставит заказ завтра с 9 до 12`;
        break;
    case 3:
        message = `Посылка будет отправлена сегодня`;
        break;
    default:
        message = `Вам перезвонит менкджер`;    
}

// 4. сделать лог месседж
console.log(message);