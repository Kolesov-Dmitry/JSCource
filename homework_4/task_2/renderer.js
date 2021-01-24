let renderer = {
    // Сюда запишем все что надо отобразить.
    map: "",

    /**
     * Отображает игру в консоли.
     */
    render() {
        // Цикл перебирает все строки, которые надо отобразить.
        // В каждой строке отображаем для каждой колонки (x - клетка, o - игрок).
        for (let row = 0; row < config.rowsCount; row++) {
            for (let col = 0; col < config.colsCount; col++) {
                // Проверяем, если на данной позиции должен быть игрок
                this.map += (player.y === row && player.x === col)
                    ? 'o '      // игрок
                    : 'x ';     // пустое поле                
            }

            this.map += '\n';
        }
        
        // Выводим все что надо отобразить в игре.
        console.log(this.map);
    },

    clear() {
        console.clear();
        this.map = "";
    }
};

