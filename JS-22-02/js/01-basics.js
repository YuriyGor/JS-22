// Знакомство с массивами:
// объявление
// индексация
// длина
// индекс последнего элемента
// переопределение



// const friends = [`Mango`, `Kivi`, `Poly`, `Ajax`];
// console.table(friends);

// friends[1] = `ldfv;h`;
// friends[0] = 598598598;

// console.table(friends);

// const lastIndex = friends.length - 1;
// console.log(lastIndex);



// Передача по ссылке и по значению
// примитивы и сложные типы
// ссылочное равенство(referential equality)

// let a = 10;
// let b = a;

// console.log(a);
// console.log(b);

// a = 50;

// console.log(a);
// console.log(b);


// const a = [1, 2, 3];
// const b = a;

// console.log(`a`, a);
// console.log(`b`, b);

// a[0] = 500;

// console.log(`a`, a);
// console.log(`b`, b);

// console.log(a === b);

// console.log([1, 2, 3] === [1, 2, 3]);



// Перебор(итерация) массива
//   for - если нужен индекс или нужно изменить эл - т массива
//   for...of - если индекс не нужен и в массиве ничего менять не нужно

const friends = [`Mango`, `Kivi`, `Poly`, `Ajax`];
// console.table(friends);
// const lastIndex = friends.length - 1;
 
for(let i = 0; i <= friends.length - 1; i += 1) {
    friends[i] += `-${i}`;
}
 
// for (let friend of friends) {
   
//     friend += `-1`;
// }

console.table(friends);