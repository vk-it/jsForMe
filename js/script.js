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
    price

function start() {
    // money = prompt('Ваш бюджет?');

    while (isNaN(money) || money == '' || money == null) {
        money = prompt('Ваш бюджет?');
    }
    name = prompt('Название вашего магазина?').toUpperCase();
    time = 19;
}

start();

let mainList = {
    budget: money,
    shopName: name,
    shopGoods: [],
    employers: {},
    open: false,
    discount: false
}

function systemCalculation() {
    if (discount = true) {
        price / 100 * 80;
    }
}

function office() {
    for (let i = 0; i < 3; i++) {

        let b = promt('Введите имя сотрудника');
        if ((typeof (b)) === 'string' && (typeof (b)) != null && b != '' && b.length < 50) {
            console.log('Всё верно!');
            mainList.employers[i] = b;
        } else {
            i = i - 1;
        }
    }
}
office();

function chooseGoods() {
    for (let i = 0; i < 5; i++) {

        let a = prompt('Какой тип товаров будем продавать?');

        if ((typeof (a)) === 'string' && (typeof (a)) != null && a != '' && a.length < 50) {
            console.log('Всё верно!');
            mainList.shopGoods[i] = a;
        } else {
            i = i - 1;
        }
    }
}

chooseGoods();

alert('Ежедневный бюджет' + mainList.budget / 30);

console.log(mainList)

function workTime(time) {
    if (time < 0) {
        console.log('Такого просто не может быть');
    } else if (time > 8 && time < 20) {
        console.log('Время работать');
    } else if (time < 24) {
        console.log('Уже слишком поздно');
    } else {
        console.log('В сутках только 24 часа');
    }
}

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