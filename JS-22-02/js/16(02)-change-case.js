
// Напиши функцию changeCase(string) которая заменяет регистр каждого
// символа в строке на противоположный.


// const string = `qweqweQWE`;




// console.log(`invertedString: `, invertedString);

const changeCase = function (string) {
  const letters = string.split(``);
  let invertedString = ``;

  for (const letter of letters) {
      const isInLowerCase = letter === letter.toLowerCase();

      invertedString += isInLowerCase ? letter.toUpperCase() : letter.toLowerCase();
  }

    return invertedString;
}

console.log(changeCase(`qweqweQWE`));
