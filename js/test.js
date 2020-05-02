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

let price = 100; // сделаем так.

let mainList = {
    employers: {},
    discount: false
};

function systemCalculation() {
    if (mainList.discount == true) {
        price *= 8 / 10;
    };
    console.log("цена: " + price);
}

function office() {
    let i = 1;
    while (Object.keys(mainList.employers).length < 4) {
        let b = prompt("Введите имя сотрудника");
        // валидацию не менял
        if (typeof b === "string" && typeof b != null && b != "" && b.length < 15) {
            console.log("Всё верно!");

            mainList.employers[i] = b;
            console.log(i + ": " + mainList.employers[i]);
            i++;
        } else {/* ? */
        }
    }
}
systemCalculation();
office();