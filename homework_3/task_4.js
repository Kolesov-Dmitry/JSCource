'use strict';

const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    { 
        id: 10,
        price: 26,
        photos: ["3.jpg"]
    },
    {
        id: 8,
        price: 78,
    },
];

// Сперва проверяю имеет ли товар поле 'photos', 
// а затем, что оно не пустое
const hasPhotos = products.filter(item => item.photos && item.photos.length > 0);
hasPhotos.forEach(item => console.log(item));

console.log("--------------------");

// функция, которую принимает sort возвращает 
//  - значение большее либо равное 1, если lhs > rhs
//  - значение меньшее либо равное -1, если lhs < rhs
//  - ноль, если lhs == rhs
// Поскольку price - число, то можно просто вернуь разницу lhs.price - rhs.price
const sorted = products.sort((lhs, rhs) => lhs.price - rhs.price);
sorted.forEach(item => console.log(item));
