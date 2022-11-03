
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
    getItems() {
        return this.items;
    },
    add(product) {
        this.items.push(product);
    },
    remove(productName) {
        // for (const item of this.items) {
        //     console.log(item);

        //     if (productName === item.name) {
        //         console.log(`нашли такой продукт`, productName);
        //     }
        // }
        for (let i = 0; i < this.items.length; i += 1) {
            const item = this.items[i];          
    
            if (productName === item.name) {
                console.log(`нашли такой продукт`, productName);
                console.log(`индекс`, i);

                this.items.splice(i, 1);
                }
        }
    },
    clear() {},
    countTotalPrice() {},
    nscreaseQuantity(productName) {},
    decreaseQuantity(productName) {},
};

console.log(cart.getItems());

cart.add({ name: `ap`, price: 50 });
cart.add({ name: `mal`, price: 60 });
cart.add({ name: `lem`, price: 60 });
cart.add({ name: `p`, price: 110 });

console.table(cart.getItems());

cart.remove(`mal`);
console.table(cart.getItems());



cart.clear();
console.log(cart.getItems());



console.log(`Total: `, cart.countTotalPrice());




// - inscreaseQuantity(productName)
    // - decreaseQuantity(productName)