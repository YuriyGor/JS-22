const btnAdd = document.querySelector(`button[data-add]`);
const resetBtn = document.querySelector(`button[data-reset]`);
const valueInput = document.querySelector(`input[data-value]`);
const outputEl = document.querySelector(`.js-output span`);

let total = 0;

// console.log(btnAdd.textContent = `ghfjdo`);

btnAdd.addEventListener(`click`, function () {
    console.log(`click hehehehe`);

    const value = Number(valueInput.value);

    console.log(value);

    total += value;

    console.log(`total: `, total);

    valueInput.value = ``;
});

resetBtn, addEventListener(`click`, function () {
    outputEl.textContent = total;
});