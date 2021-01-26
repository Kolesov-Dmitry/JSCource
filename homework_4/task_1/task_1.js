'use strict'

/**
 * Преобразует число в объект, содержащий разряды входного числа.
 * @param {int} number целое число в диапазоне [0..999]
 * @returns {Object} Объект с разрядами числа. В случае ошибки вернёт пустой объект.
 */
function convertToObject(number) {
    if (Number.isInteger(number) == false || number < 0 || number > 999) {
        console.log('Ошибка. Введите цело число из диапазона [0..999]');
        return {};
    }

    const resultObj = {
        units:    number % 10,
        tens:     Math.floor(number / 10) % 10,
        hundreds: Math.floor(number / 100),
    };

    return resultObj;
}