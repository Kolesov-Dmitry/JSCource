 let game = {
    /**
     * Запускает игру.
     */
    run() {
        questions.reset();
        alert('Добро пожаловать в игру "Кто хочет стать миллионером".');

        // Игровой цикл
        while (true) {
            // Задаю новый вопрос
            const answer = questions.askQuestion();

            // Если игрок сказал что хочет выйти, то игра заканчивается.
            if (answer === null) {                
                if (confirm(`Ваш счёт ${score.value}.\nХотите сыграть ещё разок?`)) {
                    this.restart();
                    continue;
                }

                console.log("Игра окончена.");
                return;
            }

            // Проверяю ответ на корректность. Увеличиваю счёт если ответ верный,
            // иначе уменьшаю
            if (questions.checkAnswer(answer)) {                
                alert('Верно!');
                score.enlarge()
            } else {                
                alert('Неверно :(');
                score.reduce();
            }            
        }
    },

    /**
     * Перезапускает игру
     */
    restart() {
        score.reset();
        questions.reset();
    },    
};

game.run();