'use strict';

let a = 2;

// 1. Первым делом выдет посчитано выражение в скобках
// 2. Оператов '*=' увеличит значение a в 2 раза. Получим 4
// 3. К числу 1 будет прибавлено 4. Поучим 5
let x = 1 + (a *= 2);

console.log(a); // a = 4
console.log(x); // x = 5