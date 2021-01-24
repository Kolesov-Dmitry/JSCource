'use strict'

class Post {
    /**
     * Конструктор объекта Post
     * @param {string} author Автор поста
     * @param {string} text Содержание поста
     * @param {Date} date Дата публикации поста
     */
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }
    /**
     * Записывает новое содержание поста
     * @param {string} text Новое содержание поста
     */
    edit(text) {
        this.text = text;
    }
}

class AttachedPost extends Post {
    /**
    * Конструктор объекта AttachedPost
    * @param {string} author Автор поста
    * @param {string} text Содержание поста
    * @param {Date} date Дата публикации поста
    */
    constructor(author, text, date) {
        super(author, text, date);

        this.highlighted = false;
    }
    /**
     * Помечает текст поста как выделенный
     */
    makeTextHighlighted() {
        this.highlighted = true;
    }
}

