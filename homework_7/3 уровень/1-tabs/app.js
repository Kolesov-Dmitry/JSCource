'use strict';
const texts = {
    text1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    text2: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.',
    text3: 'Проснувшись однажды утром после беспокойного сна, Грегор Замза обнаружил.'
};

/* 
1. Получите ссылку на .text, например с помощью querySelector
2. Получите коллекцию, в которой хранятся все .nav-link, например с помощью querySelectorAll
    2.1 Переберите полученную коллекцию, например с помощью forEach, и каждой ссылке назначьте
    обработчик клика функцию clickHandler.
*/

// Индекс текущего активного элемента
let activeIdx = 0;

const textEl = document.querySelector('.text');
const links  = document.querySelectorAll('.nav-link');
links.forEach((link, idx) => {
    // добавляю каждому link атрибут idx, 
    // чтоб потом было легче понять по какому кликнул пользователь
    link.setAttribute('data-idx', idx);
    link.addEventListener('click', clickHandler);

    // запоминиаю который link сейчас активный
    if (link.classList.contains('active')) {
        activeIdx = idx;
    }
});

/**
 * Обработчик клика по .nav-link
 * @param {MouseEvent} event 
 */
function clickHandler(event) {
    const idx = getLinkIdx(event.target);

    changeActiveClass(idx);
    changeText(idx);

    activeIdx = idx;
}

/**
 * Убирает .active у предыдущего элемента .nav-link и ставить его
 * на тот, по которому кликнули.
 * @param { number } idx Индекс выбранного элемента
 */
function changeActiveClass(idx) {    
    links[activeIdx].classList.remove('active');
    links[idx].classList.add('active');    
}

/**
 * Ставит соответствующий текст из texts в .text, в зависимости от
 * выбранного элемента .nav-link
 * @param { number } idx Индекс выбранного элемента
 */
function changeText(idx) {    
    textEl.innerText = texts['text' + (idx + 1)];
}

/**
 * Возвращает индекс элемента .nav-link
 * @param { Element } linkEl указатель на элемент .nav-link
 */
function getLinkIdx(linkEl) {
    if ('idx' in linkEl.dataset) {
        return linkEl.dataset.idx;
    }

    return 0;
}