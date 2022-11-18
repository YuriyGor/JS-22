

// Наследование
//     - extends
//     - super()
  


class Hero {
    constructor({ name = `hero`, xp = 0 }) {
        this.name = ``;
        this.xp = ``;
    }

    gainXp(amount) {
        console.log(`${this.name} получает ${amount} опыта`);
        this.xp += amount;
    }
}

class Warrior extends Hero {
   constructor({weapon, ...restProps} = {}) {
        super(restProps);

        this.weapon = weapon;
    }

    attack() {
        console.log(`${this.name} атакует используя ${this.weapon}`);
    }
}

class Mage extends Hero {
    constructor({ spells, ...restProps } = {}) {
        super(restProps);

        this.spells = spells;
    }

    cast() {
        console.log(`${this.name} что-то там кастует`);
    }
}

const mango = new Warrior({ name: `mango`, xp: 1000, weapon: `алебарда` });
console.log(mango);
mango.attack();
mango.gainXp(1000);

const poly = new Mage({ name: `poly`, xp: 500, spells: [`фаербол`] });
console.log(poly);
poly.cast();
poly.gainXp(500);

// const mango = new Warrior(`mango`, 1000, `алебарда` );
// console.log(mango);

// console.log(mango.__proto__ === Warrior.prototype);
// // аналогично
// console.log(Object.getPrototypeOf(mango) === Warrior.prototype);

// console.log(Warrior.prototype.__proto__ === Hero.prototype);

// console.log(mango.__proto__ === Warrior.prototype);
// console.log(`Warrior.prototype`, Warrior.prototype);

// console.log(Warrior.prototype.__proto__ === Hero.prototype);
// console.log(`Hero.prototype`, Hero.prototype);

// mango.gainXp(1000);