'use strict'

/** 
 * @param {string} name Наименование товара
 * @param {int} price Цена товара 
 */
function Product(name, price) {
    this.name = name;
    this.price = price;
}

/**
 * Применяет скидку в 25% на товар
 */
Product.prototype.make25PercentDiscount = function() {
    this.price *= 0.75;
}

const sausage = new ProductES5('Колбаса', 200);
sausage.make25PercentDiscount();

console.log('Цена на колбасу со скидкой 25%:', sausage.price);