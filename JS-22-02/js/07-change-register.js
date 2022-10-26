
// Напиши скрипт, которыйзаменяет регистр каждого символа в строке на противоположный

const string = `hgFEFjgLkhDDEEjf`;
const letters = string.split(``);
let invertedString = ``;

console.log(letters);

for (const letter of letters) {
    console.log(letter);

    // if (letter === letter.toLowerCase()) {
    //     console.log(`Эта буква в нижнем регистре!!! - `, letter);

    //     invertedString += letter.toUpperCase();
    // } else {
    //     console.log(`Эта буква в верхнем регистре!!!! - `, letter);
    //     invertedString += letter.toLowerCase();
    // }

    const isEqual = letter === letter.toLowerCase();
    invertedString +=
        isEqual ? letter.toUpperCase() : letter.toLowerCase();
}

console.log(`invertedString: `, invertedString);

