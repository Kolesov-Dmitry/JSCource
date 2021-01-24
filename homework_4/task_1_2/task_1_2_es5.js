'use strict'

/**
 * Конструктор объекта Post
 * @param {string} author Автор поста
 * @param {string} text Содержание поста
 * @param {Date} date Дата публикации поста
 */
function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

/**
 * Записывает новое содержание поста
 * @param {string} text Новое содержание поста
 */
Post.prototype.edit = function(text) {
    this.text = text;
}

/**
 * Конструктор объекта AttachedPost. Наследует Post.
 * @param {string} author Автор поста
 * @param {string} text Содержание поста
 * @param {Date} date Дата публикации поста
 */
function AttachedPost(author, text, date) {
    Post.call(this, author, text, date);
    
    this.highlighted = false;
}

/**
 * Помечает текст поста как выделенный
 */
AttachedPost.prototype.makeTextHighlighted = function() {
    this.highlighted = true;
}