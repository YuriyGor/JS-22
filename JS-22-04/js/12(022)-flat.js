
// Array.prototype.flat(depth)
//  - Разглаживает массив до указанной глубины
//   - По умолчанию глубина 1


const array = [1, 2, [4,[5]],[6,[7,8,[9]]]];
// console.log(array.flat(2));


// Array.prototype.flatMap(callback)
//   - Комбинация map + flat

const tweets = [
  { id: `000`, likes: 5, tags: [`js`, `nodejs`] },
  { id: `001`, likes: 52, tags: [`html`, `css`] },
  { id: `002`, likes: 17, tags: [`html`, `js`, `nodejs`] },
  { id: `003`, likes: 8, tags: [`css`, `react`] },
  { id: `004`, likes: 0, tags: [`js`, `nodejs`, `react`] },
];

// const tags = tweets.map(t => t.tags).flat();
// или
const tags = tweets.flatMap(t => t.tags);
console.log(tags);

const stats = tags.reduce((acc, tag) => {
    return {
        ...acc,
        [tag]: acc[tag] ? acc[tag] + 1 : 1,
    };
}, {});
console.log(stats);



