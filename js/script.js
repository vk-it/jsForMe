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

let money = prompt('Ваш бюджет?');
let name = prompt('Название вашего магазина?');

let mainList = {
    budget: money,
    shopName: name,
    shopGoods: [],
    employers: {},
    open: false
}

for (let i = 0; i < 5; i++) {

    let a = prompt('Какой тип товаров будем продавать?');

    if ((typeof(a)) === 'string' && (typeof(a)) === null && a != '' && a.length < 50 ) {
        console.log('Всё верно!');
        mainList.shopGoods[i] = a;
    } else {
        i = i - 1;
    }
}

alert(mainList.budget / 30);

console.log(mainList)