'use strict'

class Product {
    /** 
    * @param {string} name Наименование товара
    * @param {int} price Цена товара 
    */
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    /**
    * Применяет скидку в 25% на товар
    */
    make25PercentDiscount() {
        this.price *= 0.75;
    }
}

const milk = new ProductES6('Молочко', 80);
milk.make25PercentDiscount();

console.log('Цена на молоко со скидкой 25%:', milk.price);