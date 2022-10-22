



let totalSpent = 3000;
let payment = 500;
let discount = 0;

if (totalSpent < 100) {
    discount = 0;
}  else if(totalSpent >= 100 && totalSpent < 1000) {
    console.log(`Бронзовый партнер, скидка 2%`);
    discount = 0.02;
} else if (totalSpent >= 1000 && totalSpent < 5000) {
    console.log(`Серебряный партнер, скидка 5%`);
    discount = 0.05;
} else {
    console.log(`Золотой партнер, скидка 10%`);
    discount = 0.1;
}

payment = payment - payment * discount;

console.log(`Оформляем заказ на сумму ${payment} со скидкой ${discount * 100}%`);

totalSpent += payment;

console.log(`Общая сумма потраченного в магазине: ${totalSpent}`);