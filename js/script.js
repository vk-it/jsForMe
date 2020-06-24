// var budget = prompt('Сколько Вы зарабатываете?', '50.000 рублей');

// alert(budget + ' хорошая сумма!')

// var nameStore = prompt('Введите название Вашего магазина', 'Успех');

// alert(nameStore + ' интересное название!')

// const mainList = {
//     budget: 1000000,
//     nameStore: 'Успех',
//     shopGoods: ['vest', 'shorts', 'trainers'],
//     employers: { // почему объект?
//       john: {
//         name: 'John',
//         age: 23
//       },
//       rast: {
//         name: 'Rast',
//         age: 28
//       }
//     },
//     open: true // видимо, открыт магазин или нет
//   }

// Задание 1

// let money = prompt('Ваш бюджет?');
// let name = prompt('Название вашего магазина?');

// let mainList = {
//     budget: money,
//     shopName: name,
//     shopGoods: [],
//     employers: {},
//     open: false
// }

// mainList.shopGoods[0] = prompt('Какой тип товаров будем продавать?');
// mainList.shopGoods[1] = prompt('Какой тип товаров будем продавать?');
// mainList.shopGoods[2] = prompt('Какой тип товаров будем продавать?');

// alert(mainList.budget / 30);

// console.log(mainList)

// Задание 2

// let num = 50;

// while (num < 55) {
//     console.log(num);
//     num++;

// } Вопрос : почему меняя строчку console.log выводится разное значение

// let x = 10,
//     y = 7;
//     x = y;
//     console.log(x)

let money,
    name,
    time,
    price = 100

// function start() {
//     // money = prompt('Ваш бюджет?');
//     // Вопрос по while, как вызывается цикл, если не используется данные ввода параметры, что его запускает?
//     while (isNaN(money) || money == '' || money == null) {
//         money = prompt('Ваш бюджет?');
//     }
//     name = prompt('Название вашего магазина?').toUpperCase();
//     time = 19;
// }
// start();

let mainList = {
    budget: money,
    shopName: name,
    shopGoods: [],
    employers: {},
    open: false,
    discount: false,
    shopItems: [],
    chooseGoods: function chooseGoods() {
        for (let i = 0; i < 5; i++) {

            let a = prompt('Какой тип товаров будем продавать?');

            if ((typeof (a)) === 'string' && (typeof (a)) != null && a != '' && a.length < 50) {
                console.log('Всё верно!');
                mainList.shopGoods[i] = a;
            } else {
                i = i - 1;
            }
        }
    },
    workTime: function workTime(time) {
        if (time < 0) {
            console.log('Такого просто не может быть');
        } else if (time > 8 && time < 20) {
            console.log('Время работать');
            mainList.open = true;
        } else if (time < 24) {
            console.log('Уже слишком поздно');
        } else {
            console.log('В сутках только 24 часа');
        }
    },
    dayBudget: function dayBudget() {
        alert('Ежедневный бюджет' + " " + mainList.budget / 30);
    },
    makeDiscount: function makeDiscount() {
        if (mainList.discount == true) {
            // price *= 8 / 10;
            price = (price / 100) * 80;
        }
        console.log("цена: " + price);
    },
    hireEmployers: function hireEmployers() {
        for (let i = 1; i < 4; i++) {
            let name = prompt("Имя сотрудника")
            mainList.employers[i] = name;
        }
    },
    chooseShopItems: function chooseShopItems() {
        let items = prompt('Перечислите через запятую товары', '');

        mainList.shopItems = items.split(',');
        mainList.shopItems.push(prompt('Подождите, ещё ', ''));
        mainList.shopItems.sort();
    }
}

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


// Переписать цикл for в while и do while

// let i = 0;

// while (i < 5) {
//     let a = prompt('Какой тип товаров будем продавать?');

//     if ((typeof (a)) === 'string' && (typeof (a)) != null && a != '' && a.length < 50) {
//         console.log('Всё верно!');
//         i++
//         mainList.shopGoods[i] = a;

//     } else {
//         i = i - 1;
//     }
// }

// do {
//     let a = prompt('Какой тип товаров будем продавать?');

//     if ((typeof (a)) === 'string' && (typeof (a)) != null && a != '' && a.length < 50) {
//         console.log('Всё верно!');
//         i++
//         mainList.shopGoods[i] = a;

//     } else {
//         i = i - 1;
//     }
// } while (i < 5);