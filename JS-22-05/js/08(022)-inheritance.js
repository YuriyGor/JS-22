

// Наследование
//     - extends
//     - super()
  


// class Hero {
//     constructor({ name = `hero`, xp = 0 } = {}) {
//         this.name = ``;
//         this.xp = ``;
//     }

//     gainXp(amount) {
//         console.log(`${this.name} получает ${amount} опыта`);
//         this.xp += amount;
//     }
// }

// class Warrior extends Hero {
//    constructor({weapon, ...restProps} = {}) {
//         super(restProps);

//         this.weapon = weapon;
//     }

//     attack() {
//         console.log(`${this.name} атакует используя ${this.weapon}`);
//     }
// }

// class Mage extends Hero {
//     constructor({ spells, ...restProps } = {}) {
//         super(restProps);

//         this.spells = spells;
//     }

//     cast() {
//         console.log(`${this.name} что-то там кастует`);
//     }
// }

// const mango = new Warrior({ name: `mango`, xp: 1000, weapon: `алебарда` });
// console.log(mango);
// mango.attack();
// mango.gainXp(1000);

// const poly = new Mage({ name: `poly`, xp: 500, spells: [`фаербол`] });
// console.log(poly);
// poly.cast();
// poly.gainXp(500);

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




// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = "Манго";

// console.log(dog); // { name: 'Манго', __proto__: animal }
// console.log(animal.isPrototypeOf(dog)); // true


// console.log(dog.hasOwnProperty("name")); // true
// console.log(dog.name); // 'Манго'

// console.log(dog.hasOwnProperty("legs")); // false
// console.log(dog.legs); // 4




// const animal = { eats: true };
// const dog = Object.create(animal);
// dog.barks = true;

// for (const key in dog) {
//   console.log(key); // barks, eats
// }

const animal = {
  eats: true,
};
const dog = Object.create(animal);
dog.barks = true;

for (const key in dog) {
  if (!dog.hasOwnProperty(key)) continue;

  console.log(key); // barks
}






class User {
  // Синтаксис объявления метода класса
  constructor(name, email) {
    // Инициализация свойств экземпляра
    this.name = name;
    this.email = email;
  }
}

const mango = new User("Манго", "mango@mail.com");
console.log(mango); // { name: 'Манго', email: 'mango@mail.com' }

const poly = new User("Поли", "poly@mail.com");
console.log(poly); // { name: 'Поли', email: 'poly@mail.com' }




class ContentEditor extends User {
  constructor({ email, posts }) {
    super(email);
    this.posts = posts;
  }

  addPost(post) {
    this.posts.push(post);
  }
}

const editor = new ContentEditor({ email: "mango@mail.com", posts: [] });
console.log(editor); // { email: 'mango@mail.com', posts: [] }
console.log(editor.email); // 'mango@mail.com'
editor.addPost("post-1");
console.log(editor.posts); // ['post-1']