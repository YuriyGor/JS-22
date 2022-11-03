
// Работаем с коллекцией товаров в корзине:
    // - getItems()
    // - add(product)
    // - remove(productName)
    // - clear()
    // - countTotalPrice()
    // - inscreaseQuantity(productName)
    // - decreaseQuantity(productName)



// { name: `ap`, price: 50 }
// { name: `mal`, price: 70 }
// { name: `lem`, price: 60 }
// { name: `p`, price: 110}


const cart = {
    items: [],
    getItems() {},
    add(product) {},
    remove(productName) {},
    clear() {},
    countTotalPrice() { },
    nscreaseQuantity(productName) {},
    decreaseQuantity(productName) {},
    
}

// console.table(cart.getItems());

cart.add({ name: `ap`, price: 50 });
cart.add({ name: `mal`, price: 50 });
cart.add({ name: `lem`, price: 50 });
cart.add({ name: `p`, price: 50 });

// console.table(cart.getItems()):

cart.remove(`ap`);
// console.table(cart.getItems());

// cart.clear();
// console.table(cart.getItems());


// cart.increaseQuantity(`ap`);
// console.table(cart.getItems());

// cart.increaseQuantity(`lem`);
// cart.increaseQuantity(`lem`);
// console.table(cart.getItems());

// console.log(`Total: `, cart.countTotalPrice());
