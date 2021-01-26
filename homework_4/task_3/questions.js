'use strict';

const questions = {
    // Индекс текущего вопроса
    currentQuestionIdx: -1,

    // Список вопросов
    list: [
        {
            title: 'Сколько букв в слове "привет"?',
            answers: [
                { 
                    title: 'Пять', 
                    correct: false, 
                },
                { 
                    title: 'Шесть', 
                    correct: true,
                },
                { 
                    title: 'Семь', 
                    correct: false,
                },
                { 
                    title: 'Восемь', 
                    correct: false, 
                },
            ],            
        },
        {
            title: 'Какой формы колесо?',
            answers: [
                { 
                    title: 'Квадратной', 
                    correct: false, 
                },
                { 
                    title: 'Треугольной', 
                    correct: false, 
                },
                { 
                    title: 'Прямогольной', 
                    correct: false, 
                },
                { 
                    title: 'Круглой', 
                    correct: true, 
                },
            ],            
        },
        {
            title: 'Какого цвета банан?',
            answers: [
                { 
                    title: 'Жёлтый', 
                    correct: true, 
                },
                { 
                    title: 'Красный', 
                    correct: false, 
                },
                { 
                    title: 'Зелёный', 
                    correct: false, 
                },
                { 
                    title: 'Синий', 
                    correct: false, 
                },
            ],            
        },
        {
            title: 'Сколько месяцев в году?',
            answers: [
                { 
                    title: 'Одиннадцать',
                    correct: false,
                },
                { 
                    title: 'Восемь',
                    correct: false,
                },
                { 
                    title: 'Двенадцать',
                    correct: true,
                },
                { 
                    title: 'Шесть',
                    correct: false,
                },
            ],            
        },
        {
            title: 'В каком году появился JavaScript?',
            answers: [
                { 
                    title: '1847',
                    correct: false,
                },
                { 
                    title: '2000',
                    correct: false,
                },
                { 
                    title: '1995',
                    correct: true,
                },
                { 
                    title: '2020',
                    correct: false,
                },
            ],            
        }
    ],

    /**
     * Формирует строку с вопросом и вариантами ответов
     * @returns {string}
     */
    makeQuestionString() {
        const q = this.list[this.currentQuestionIdx];
        
        let msg = q.title + '\n';
        q.answers.forEach((answer, idx) => {
            msg += `${ idx+1 }. ${ answer.title }\n`;
        });

        return msg;
    },

    /**
     * Задаёт игроку очередной вопрос
     * @returns {int} Ответ игрока на вопрос. Либо null, в случае отмены игры или если вопросы закончились
     */
    askQuestion() {
        this.currentQuestionIdx++;
        if (this.currentQuestionIdx >= this.list.length) {
            // Вопросы закончились
            return null;
        }

        const msg = this.makeQuestionString();
        while (true) {            
            let userAnswer = parseInt(prompt(msg));
            if (isNaN(userAnswer))
            {
                return null;
            }

            // Провкеряю ввод игрока на корректность
            if (userAnswer < 1 || userAnswer > 4) {
                alert('Необходимо ввести число от 1 до 4.');
                continue;
            }

            // Если пользователь ввел корректное значение - отдаем его.
            return userAnswer - 1;
        }
    },

    /**
     * Проверяет корректность ответа игрока на вопрос
     * @param {int} answer 
     * @returns {boolean} true если ответ верный, false иначе
     */
    checkAnswer(answer) {
        const q = this.list[this.currentQuestionIdx];
        
        return (answer >= 0 && answer < q.answers.length)
            ? q.answers[answer].correct
            : false;
    },

    /**
     * Перемешивает варианты ответов
     */
    shuffle() {
        this.list.forEach(q => {
            for (let i = q.answers.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1)); // случайный индекс от 0 до i
        
                // поменять элементы местами
                let t = q.answers[i]; 
                q.answers[i] = q.answers[j]; 
                q.answers[j] = t;                
            }
        });
    },

    /**
     * Сбрасывавет в первоначальное состояние 
     */
    reset() {
        this.shuffle();
        this.currentQuestionIdx = -1;
    }
}