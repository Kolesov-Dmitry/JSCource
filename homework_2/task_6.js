'use strict';

/**
 * Склоняет слово 'рубль' в необходимый падеж, в зависимости от value
 * @param {number} value число 
 * @returns {string} слово 'рубль' в правильном падеже
 */
function declineRouble(value) {
    // случай c 11, 12... 111, 112...
    if (value > 10 && (value % 100) <= 19) {
        return 'рублей';        
    }
    
    let lastValue = value % 10;
    if (lastValue == 1) {
        return 'рубль';
    } else if (lastValue >= 2 && lastValue <= 4) {
        return 'рубля';
    }
    
    return 'рублей';
}

// Ох и жёстко же в Node.js читать из stdin...
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// question запрашивает пользователя ввести значение 
// и передаёт его в callback функцию
rl.question('Введите сумму для зачисления> ', input => {
    // Привожу строку input к числу и проверяю, что там ввёл пользователь
    const value = +input;

    // всё ок, в input лежит целое число
    if (Number.isInteger(value) && value > 0) {      
        const rouble = declineRouble(value);
        console.log(`Ваша сумма ${value} ${rouble} успешно зачислена.`);
        
    // ошибка, в input какой-то мусор или число <= 0
    } else {
        console.log('Ошибка: сумма должна быть целым, положительным числом.');
    }

    rl.close();
});