class GuessingGame {
    constructor() {
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
        return this.guess();
    }

    guess() {
        this.rand = Math.floor(((this.max + 1)  + this.min) / 2);
        return this.rand;
    }

    lower() {
        this.max = this.rand;
        return this.max;
    }

    greater() {
        this.min = this.rand;
                return this.min;

    }
}

module.exports = GuessingGame;

// const number = 598;
// const game = new GuessingGame();
// game.setRange(591, 606);