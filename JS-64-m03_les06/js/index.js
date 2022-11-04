/**
 * 1. Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору
 * незалежних аргументів.
 */

function calcBMI({ weight, height }) {
  const numericWeight = Number(weight.replace(`,`, `.`));
  const numericHeight = Number(height.replace(`,`, `.`));

  return Number((numericWeight / numericHeight ** 2).toFixed(1));
}

// console.log(
//   calcBMI({
//     weight: `88,3`,
//     height: `1.75`,
//   })
// );
// console.log(
//   calcBMI({
//     weight: `68,3`,
//     height: `1.65`,
//   })
// );
// console.log(
//   calcBMI({
//     weight: `118,3`,
//     height: `1.95`,
//   })



/**
 * 2. 
 * Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору
 * незалежних аргументів.
 */

 function printContactsInfo({names, phones}) {
  const nameList = names.split(',');
  const phoneList = phones.split(',');
  
  for (let i = 0; i < nameList.length; i += 1) {
    console.log(`${nameList[i]}: ${phoneList[i]}`);
  }
}

// printContactsInfo({
//   names: 'Jacob,William,Solomon,Artemis',
//   phones: '89001234567,89001112233,890055566377,890055566300',
// });




/**
 * 3. Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору
незалежних аргументів.
 */

function getBotReport(object) {
  
  console.log(object)

  const {companyName, bots} = object
  console.log(companyName);
  console.log(bots);

  const {
    repair: repairBots = 56, 
    defence: defenceBots = 45
  } = bots;

  console.log(repairBots)
  console.log(defenceBots)


  return `${companyName} has ${repairBots + defenceBots} bots in stock`;
}

const company = {
  companyName: 'Cyberdyne Systems',
  bots: {
    repair: 150,
    defence: 50,
  },
}

getBotReport(company)




/**
 * 4. 
 * Напиши функцію так, щоб вона приймала об'єкт параметрів із 
 * властивостями `companyName` та `stock` та 
 * виводила репорт про кількість товарів на складі будь-якої компанії.
 * 
 * Extended: Переписали так щоб функція прймала масив з обʼєктами
 */

const companies = [
  {
    companyName: 'Cyberdyne Systems',
    stock: {
      repairBots: 150,
      defenceBots: 50,
    },
  }, 
  {
    companyName: 'Belacci',
    stock: {
      shoes: 20,
      skirts: 10,
      hats: 5,
    },
  }
]

function getStockReport(companies) {
  
  for (let {companyName, stock} of companies) {
    
    let total = 0;
    for (let value of Object.values(stock)) {
      total += value
    }

    console.log(`${companyName} has ${total} items in stock`)
  }
  // return `${companyName} has ${total} items in stock`

}

getStockReport(companies)