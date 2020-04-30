let price

let mainList = {
    employers: {},
    discount: false
}

function systemCalculation() {
    if (discount = true) {
        price / 100 * 80;
        // Тут я не понял, можно присвоить вычисление любому значению, типа a = price / 100 * 80; или как?
    }
}

function office() {
    for (let i = 0; i < 3; i++) {

        let b = promt('Введите имя сотрудника');
        // Должна быть строка, нельзя принимать отмену, также пустую строку и не больше 15 символов
        if ((typeof (b)) === 'string' && (typeof (b)) != null && b != '' && b.length < 15) {
            console.log('Всё верно!');
            mainList.employers[i] = b;
            // Также не знаю, как к имени добавить номер
        } else {
            i = i - 1;
        }
    }
}
office();