
// Деструктуризация объенкта
//     - Значения по умолчанию

const playlist = {
    name: `Мой супер плейлист`,
    rating: 5,
    tracks: [`трек-1`, `трек-2`, `трек-3`],
    trackCount: 3,
};

// const { rating,
//     tracks,
//     name,
//     trackCount: numbersOfTracks,
//     author = `user`,
// } = playlist;

// console.log(numbersOfTracks);

// console.log(rating);
// console.log(tracks);
// console.log(name);
// console.log(trackCount);


// console.log(
//     playlist.name,
//     playlist.rating,
//     playlist.tracks,
//     playlist.trackCount,
// );
 
// console.log(
//     name,
//     rating,
//     tracks,
//     trackCount,
// );


// Глубокая деструктуризация

// const profile = {
//     name: `Jacques Gluke`,
//     tag: `jgluke`,
//     location: `Ocho Rios, Jamaica`,
//     avatar: `https://......./.../.../.../....jpg`,
//     stats: {
//         followers: 5603,
//         views: 4827,
//         likes: 1308,
//     },
// };

// const { name, tag, location, avatar, stats } = profile;

// console.log(name, tag, location, avatar, stats);




// Деструктуризация массивов


const rgb = [255, 100, 80];

const [a, b, c] = rgb;

// console.log(a, b, c);


const authors = {
    kiwi: 4,
    poly: 7,
    ajax: 9,
    mango: 6,
};

const entries = Object.entries(authors);

// console.log(entries);

// for (const [name,rating] of entries) {
//     // ур2
//     // const [name, rating] = entry;

//     // ур1
//     // const name = entry[0];
//     // const rating = entry[1];

//     console.log(name, rating);
// }

// console.log(Math.max(...ratings));



// Операция rest (сбор)


// const profile = {
//     name: `Jacques Gluke`,
//     tag: `jgluke`,
//     location: `Ocho Rios, Jamaica`,
//     avatar: `https://......./.../.../.../....jpg`,
//     stats: {
//         followers: 5603,
//         views: 4827,
//         likes: 1308,
//     },
// };

// const { name, tag, location, ...restProps } = profile;

// const restProps = {
//     avatar: profile.avatar,
//     stats: profile.stats,
// }

// console.log(name, tag, location);
// console.log(restProps);
// console.log(profile);




// Паттерн "Объект настроек"
//     - Деструктуризация параметра - объекта в подписи функции
//    - rest при деструктуризации в подписи

const showProfileInfo = function (userProfile) {
    console.log(userProfile);
};

const profile = {
  name: `Jacques Gluke`,
  tag: `jgluke`,
  location: `Ocho Rios, Jamaica`,
  avatar: `https://......./.../.../.../....jpg`,
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

showProfileInfo(profile);