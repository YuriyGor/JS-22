// const a = 10;
// a = 15; //Викличе помилку
// let b; //undefined
// b = 15;


// console.log(`a`,a);
// var a = 15;
// console.log(`a`, a);
// var a = 20;
// console.log(`a`, a);
// // console.log(`b`,b);
// // let b = 20



// let a = 10;


// if (true) {
//     console.log(a);
//     var b = 15;
// }
// // console.log(b);


// function foo() {
//     console.log(`b inside function`, b);
// }
// foo()



// const b = `hello`;


// {
    
// }














//--------------------------------------------------------


// let a = 10
// if (true) {
//     console.log(a);
//     let a = 100;
// }


//------------------------------------------------------------

// let a = 10
// if (true) {
    // let a = 100;
    // console.log(a);    
// }


//-------------------------------------------------------------

// if (true) {
//     let a = 10;    
// }
// console.log(a);   
 
//--------------------------------------------------------------

// let a = 10;

// if (true) {
//     let a = 15;
//     if (true) {
//         a = 100;
//     }
//     console.log(a);//100
//     a = 77;
// }
// console.log(a);//10

// let a = 10;
// let b = 15;
// a = 99;


// console.log(a);
// console.log(b);


//Усы примытиви мають присвюэння за азначенням
// let a = 10;
// let b = a;
// a = 99;

// console.log(a);
// console.log(b);




//Усы складны типи даних мають присвоэння за посиланням
// let a = [1, 2, 3, 4, 5];
// let b = a;
// a.splice(2, 1);
// b.splice(0, 1);
// console.log(a);
// console.log(b);
// console.log(a === b);
// console.log([1, 2, 3, 4, 5] === [1, 2, 3, 4, 5]);

// ---------мутабельмысть та ымутабельнысть типыв даних-----------
// 1. Примытивны типи - це мутабельны типи даних
// 2. Складны типи - це мутабельны типи даних

// let a = [1, 2, 3, 4, 5];
// a.splice(2, 1);

// let b = `Hello world`;
// b.split(``).splice(2, 6);
// console.log(b);



//-----------------------------------------------------------------


// && и
// || або 
// !  не
// ?? нульового поэднання


// 6 значень, якы повернуть false
// null
// NaN
// 0
// `` - пустий рядок
// undefined
// false

// console.log(null && 4); //null        (перший false)
// console.log(0 && true); // 0
// console.log(1 && `)`);

// console.log(0 || 7 || null); // 7   (перший true або останный false)
// console.log(0 || false || null);// null

// //не спрацьовуэ тылькы на null та undefined
// console.log(0 ?? 6 ?? null);
// console.log(`` ?? 6 ?? null);
// console.log(undefined ?? 6 ?? null);









const arr = [1, 2, 3, 4, 5];

if (arr.length) {
    
}//якщо масив не пустий

if (!arr.length) {
    
}//якщо масив пустий



// також з рядочками

const str = ``;
if (str === ``){
    
}


if (!str) {
    
}



if (email === `` || password === ``) {
    
}

if (!email || !password) {
    
}












// function foo() {
    
// }


// (function () {
    
// })()

// const boo = function () {
    
// }