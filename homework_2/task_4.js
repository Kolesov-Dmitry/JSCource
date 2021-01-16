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


console.log('4 + 2 = ' + add(4, 2));
console.log('4 - 2 = ' + sub(4, 2));
console.log('4 / 2 = ' + div(4, 2));
console.log('4 * 2 = ' + mul(4, 2));