// Example 1 - Індекс маси тіла
// Task1
// Напиши функцію calcBMI(weight, height) яка розраховує та повертає індекс маси тіла.
// Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини в метрах.
// Індекс маси тіла необхідно округлити до однієї цифри після коми;

// 1. Запитати ввести вагу и зрист   -  prompt
// 2. створити пусту функцию розрахунку индексу маси
// 3. задати функции парамеири ваги и зросту - (weigth, heigth)
// 4. розрахувати индекс маси - Math.pow()
// 5. повернути результат - return
// 6. округлити рез-т до 1 знаку писля коми

// const weigth = prompt(`Введить вашу вагу в кг`);
// const heigth = prompt(`Введить ваш зрист в м`);

// const validateBMI = function (bmi) {
//      if (result <= 18.5) {
//        console.log(`недостатня маса`);
//      } else if (result <= 24.9) {
//        console.log(`норма`);
//      } else {
//        console.log(`надлишкова маса`);
//      }
// }

// const calcBMI = function(weigthU, heigthU) {
//     const heigthPow = Math.pow(heigthU, 2);
//     const result = weigth / heigthPow;   

//     return  result.toFixed(1)
// }

// const result = calcBMI(weigth, heigth);

// console.log(result);

// validateBMI(result)

// console.log(calcBMI(70, 1.85))
// console.log(calcBMI(100, 1.55))
// console.log(calcBMI(80, 1.75))

// const bmi = calcBMI(weigth, heigth);
// console.log(bmi)


// 
// Example 9 - Колекція курсів(includes, indexOf, push і т.д.)
// Task9
// Напишіть функції для роботи з колекцією навчальних курсів courses:
// ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

//1. addCourse(name) - додає курс до кінця колекції
//2. removeCourse(name) - видаляє курс з колекції
// 3.updateCourse(oldName, newName) - змінює ім'я на нове
    
// const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

// 1. Додаэмо курс до колекции
//  1.1 створити функцию додавання курсу
//  1.2 оголосити параметр функции дро довання в колекцию
// 1.3 додамо курс до колекции
// 1.4 повернемо оновлену колекцию

// const checkCourseName = function (value) {
//     const index = courses.indexOf(newCourse);

//     if (index === -1) {
//         console.log(`такого курсу нема`);
//         return FontFaceSetLoadEvent
//     } else {
//         console.log(`Такий курс вже э`);      
//         return true
//     }
// }


// const courseName = prompt(`Введить назву курсу`);

// const addCourse = function(newCourse) {

//     if (checkCourseName(newCourse)) {
//         return
//     }

//     courses.push(newCourse);
//     return courses;

  

// 2. Видалити курс из коллекции
// 2.1 створити функцию додавання курсу
// 2.2 оголосити параметр функции для видалення в колекцию
// 2.3 перевирити чи э  курс в коллекци
// 2.4 отримати индекс курса - indexOf
//  2.5 якщо э, видалити методом splice

// const removeCourse = function (courseName) {

//     if (!checkCourseName(newCourse)) {
//       return
//     }

//     const deletedCourses = courses.splice(index, 1);
//     return deletedCourses
// }

// console.log(`Видалили`, removeCourse(courseName));
// console.log(courses)


// 3. Оновлення курса
// 3.1 створюэмо функцию
// 3.2 даэмо 2 параметра: старе имя, нове имя
// 3.3 перевирка чи курс э
//  3.4 якщо э - оновлюэмо ему имя

// const courseName = prompt(`Введить назву курсу`);
// const newName = prompt(`Введить нове имя`);

// const updateCourse = function (oldName, newName) {
//     if (!checkCourseName(newCourse)) {
//       return;
//     }
//     courses[index] = newName;
 
// }

// updateCourse(courseName, newName);
// console.log(courses)






