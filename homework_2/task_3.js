'use strict';

let a = -1, b = 2;
if (a >= 0 && b >= 0) {
    console.log(`Разность: ${ a - b }`);

} else if (a < 0 && b < 0) {
    console.log(`Произведение: ${ a * b }`);

} else if ((a >= 0 && b < 0) || (a < 0 && b >= 0)) {
    console.log(`Сумма: ${ a * b }`);

}