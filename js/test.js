// Наше здоровое развитие себя успешно 8-). Напоминание себе, даже когда не хочу этим заниматься, как можно использовать веб-разработку в проявлении или симбиоза Здравствую НЗРСУ?
// Моё решение
// let price

// let mainList = {
//     employers: {},
//     discount: false
// }

// function systemCalculation() {
//     if (discount = true) {
//         price / 100 * 80;
//         // Тут я не понял, можно присвоить вычисление любому значению, типа a = price / 100 * 80; или как?
//     }
// }

// function office() {
//     for (let i = 0; i < 3; i++) {

//         let b = promt('Введите имя сотрудника');
//         // Должна быть строка, нельзя принимать отмену, также пустую строку и не больше 15 символов
//         if ((typeof (b)) === 'string' && (typeof (b)) != null && b != '' && b.length < 15) {
//             console.log('Всё верно!');
//             mainList.employers[i] = b;
//             // Также не знаю, как к имени добавить номер
//         } else {
//             i = i - 1;
//         }
//     }
// }
// office();

// Мне помогли с решение
// let price = 100; // сделаем так.

// let mainList = {
//     employers: {},
//     discount: false
// }

// function systemCalculation() {
//     if (mainList.discount == true) {
//         price *= 8 / 10;
//     };
//     console.log("цена: " + price);
// }
// systemCalculation();

// function office() {
//     let i = 1;
//     while (Object.keys(mainList.employers).length < 4) {
//         let b = prompt("Введите имя сотрудника");
//         // валидацию не менял
//         if (typeof b === "string" && typeof b != null && b != "" && b.length < 15) {
//             console.log("Всё верно!");

//             mainList.employers[i] = b;
//             console.log(i + ": " + mainList.employers[i]);
//             i++;
//         } else {
//             // i = i - 1/* ? */
//         }
//     }
// }

// office();

// Вопрос: почему i++ после console.log()?
// let num = 50
// while (num < 55) {
//     num++;
//     console.log(num);
//     num++;
// }

// let money

// function start() {
//     // money = prompt('Ваш бюджет?');

//     while (isNaN(money) || money == '' || money == null) {
//         money = prompt('Ваш бюджет?');
//     }
//     name = prompt('Название вашего магазина?').toUpperCase();
//     time = 19;
// }
// start();
let mainList = {
    employers: {},
    shopName: name,
}

// function hireEmployers() {
//     for (let i = 1; i < 4; i++) {
//         let name = prompt("Имя сотрудника")
//         mainList.employers[i] = name;
//     }
// }
// hireEmployers()

// function hireEmployers() {
//     let i = 1;
//     while (Object.keys(mainList.employers).length < 4) {
//         let b = prompt("Введите имя сотрудника");
//         // валидацию не менял
//         if (typeof b === "string" && typeof b != null && b != "" && b.length < 15) {
//             console.log("Всё верно!");

//             mainList.employers[i] = b;
//             console.log(i + ": " + mainList.employers[i]);
//             i++;
//         } else {
//             // i = i - 1/* ? */
//         }
//     }
// }
// hireEmployers()


// obj = {
//     name: 'John',
//     age: 25,
//     isMarried: false
// }

// console.log(obj['age']);

// var arr = ['plum', 'orange', 'apple'];
// console.log(arr[1]);

// // alert('Hello!');

// // confirm('Are you here?');
 
var answer = +prompt('Вам есть 18?', '18'); 
// var test = null;
console.log(typeof(answer ));

console.log('arr' + ' - object');