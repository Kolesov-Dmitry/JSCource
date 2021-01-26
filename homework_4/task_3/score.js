'use strict'

const score = {
    value: 0,

    /**
     * Увеличивает счёт на 50 очков
     */
    enlarge() {
        this.value += 50;
    },

    /**
     * Уменьшает счёт на 25 очков
     */
    reduce() {
        this.value = (this.value > 25)
            ? this.value - 25
            : 0;
    },

    // Сбрасывает счёт в ноль
    reset() {
        this.value = 0;
    }
}