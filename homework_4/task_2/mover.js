let mover = {

    /**
     * Проверяет может ли игрок переместиться в указанную клетку.
     * @param {{x: int, y: int}} point клетка, в которую пытается переместиться игрок.     
     * @returns {boolean} true если игрок может переместиться в указанную точку, false если не может.
     */
    checkPlayerMove(point) { 
        return point.x >= 0 && point.x < config.colsCount &&
               point.y >= 0 && point.y < config.rowsCount;
    },

    /**
     * Получает и отдает направление от пользователя.
     * @returns {int} Возвращаем направление, введенное пользователем.
     */
    getDirection() {
        // Доступные значения ввода.
        const availableDirections = [2, 4, 6, 8, 1, 3, 7, 9];

        while (true) {
            // Получаем от пользователя направление.
            let direction = parseInt(prompt('Введите число (2, 4, 6 или 8), куда вы хотите переместиться, "Отмена" для выхода.'));
            if (isNaN(direction)) {
                return null;
            }

            // Если направление не одно из доступных, то сообщаем что надо ввести корректные данные
            // и начинаем новую итерацию.
            if (!availableDirections.includes(direction)) {
                alert('Для перемещения необходимо ввести одно из чисел 2, 4, 6 или 8.');
                continue;
            }

            // Если пользователь ввел корректное значение - отдаем его.
            return direction;
        }
    },

    /**
    * Смещает позицию игрока влево на 1 клетку
    * @param {{x: int, y: int}} pos Текущее положение игрока
    * @returns {{x: int, y: int}} Следующая позиция игрока.
    */
    moveLeft(pos) {
        return {
            x: pos.x - 1,
            y: pos.y,
        };
    },

    /**
    * Смещает позицию игрока вправо на 1 клетку
    * @param {{x: int, y: int}} pos Текущее положение игрока
    * @returns {{x: int, y: int}} Следующая позиция игрока.
    */
    moveRight(pos) {
        return {
            x: pos.x + 1,
            y: pos.y,
        };
    },

    /**
    * Смещает позицию игрока вверх на 1 клетку
    * @param {{x: int, y: int}} pos Текущее положение игрока
    * @returns {{x: int, y: int}} Следующая позиция игрока.
    */
    moveUp(pos) {
        return {
            x: pos.x,
            y: pos.y - 1,
        };
    },

    /**
    * Смещает позицию игрока вниз на 1 клетку
    * @param {{x: int, y: int}} pos Текущее положение игрока
    * @returns {{x: int, y: int}} Следующая позиция игрока.
    */
    moveDown(pos) {
        return {
            x: pos.x,
            y: pos.y + 1,
        };
    },

    /**
    * Смещает позицию игрока влево и вверх на 1 клетку
    * @param {{x: int, y: int}} pos Текущее положение игрока
    * @returns {{x: int, y: int}} Следующая позиция игрока.
    */
    moveLeftUp(pos) {
        return {
            x: pos.x - 1,
            y: pos.y - 1,
        };
    },

    /**
    * Смещает позицию игрока вправо и вверх на 1 клетку
    * @param {{x: int, y: int}} pos Текущее положение игрока
    * @returns {{x: int, y: int}} Следующая позиция игрока.
    */
    moveRightUp(pos) {
        return {
            x: pos.x + 1,
            y: pos.y - 1,
        };
    },

    /**
    * Смещает позицию игрока влево и вниз на 1 клетку
    * @param {{x: int, y: int}} pos Текущее положение игрока
    * @returns {{x: int, y: int}} Следующая позиция игрока.
    */
    moveLeftDown(pos) {
        return {
            x: pos.x - 1,
            y: pos.y + 1,
        };
    },

    /**
    * Смещает позицию игрока вправо и вниз на 1 клетку
    * @param {{x: int, y: int}} pos Текущее положение игрока
    * @returns {{x: int, y: int}} Следующая позиция игрока.
    */
    moveRightDown(pos) {
        return {
            x: pos.x + 1,
            y: pos.y + 1,
        };
    },

    /**
    * Вычисляет следующую точку в которой будет находиться игрок после движения.
    * @param {{x int, y: int}} pos Текущее положение игрока.
    * @param {int} direction Направление движения игрока.
    * @returns {{x: int, y: int}} Следующая позиция игрока.
    */
    getNextPosition(pos, direction) {
        // не люблю длинные switch/case
        const movers = {
            1: this.moveLeftDown,
            2: this.moveDown,
            3: this.moveRightDown,
            4: this.moveLeft,
            6: this.moveRight,
            7: this.moveLeftUp,
            8: this.moveUp,
            9: this.moveRightUp,
        };

        // обновляем положение игрока в зависимости от направления.
        if (direction in movers)
            return movers[direction](pos);

        return pos;
    },
};