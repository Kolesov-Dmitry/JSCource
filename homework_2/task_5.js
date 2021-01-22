'use strict';

/**
 * Вычисляет сумму lhs и rhs
 * @param {number} lhs первое слагаемое
 * @param {number} rhs второе слагаемое
 * @returns {number} сумма lhs + rhs
 */
function add(lhs, rhs) {
    return lhs + rhs;
}

/**
 * Вычисляет разность lhs и rhs
 * @param {number} lhs уменьшаемое
 * @param {number} rhs вычитаемое
 * @returns {number} разность a - rhs
 */
function sub(lhs, rhs) {
    return lhs - rhs;
}

/**
 * Вычисляет частное lhs и rhs
 * @param {number} lhs делимое
 * @param {number} rhs делитель
 * @returns {number} частное lhs / rhs
 */
function div(lhs, rhs) {
    return lhs / rhs;
}

/**
 * Вычисляет произведение lhs и rhs
 * @param {number} lhs первый множитель
 * @param {number} rhs второй множитель
 * @returns {number} произведение lhs * rhs
 */
function mul(lhs, rhs) {
    return lhs * rhs;
}


/**
 * Выполняет математическую операцию operation над операндами lhs и rhs
 * @param {number} lhs первый операнд
 * @param {number} rhs второй операнд
 * @param {string} operation математическая операция { 'add', 'sub', 'mul', 'div' }
 * @returns {number} результат operation над lhs и rhs. В случае ошибки вернёт NaN.
 */
function mathOperation(lhs, rhs, operation) {
    switch (operation) {
    case 'add':
        return add(lhs, rhs);

    case 'sub':
        return sub(lhs, rhs);

    case 'mul':
        return mul(lhs, rhs);

    case 'div':
        return div(lhs, rhs);
    }

    return NaN;
}

console.log('4 + 2 = ' + mathOperation(4, 2, 'add'));
console.log('4 - 2 = ' + mathOperation(4, 2, 'sub'));
console.log('4 / 2 = ' + mathOperation(4, 2, 'div'));
console.log('4 * 2 = ' + mathOperation(4, 2, 'mul'));

console.log('Ошибка: ' + mathOperation(4, 2, 'aaa'));