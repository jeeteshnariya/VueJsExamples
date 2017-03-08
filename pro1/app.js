/*** strating programming *******/



var app = new Vue({
    el: '#app',
    data: {
        gameIsRuning: false,
        playerHealth: 100,
        monsterHealth: 100,
    },
    methods: {
        startNewGame: function() {
            this.gameIsRuning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
        },
        attack: function() {

            this.monsterHealth -= this.calculateAttack(3, 10);

            this.playerHealth -= this.calculateAttack(5, 12);

        },
        spAttack: function() {
            this.monsterHealth -= this.calculateAttack(8, 10);
        },
        heal: function() {
            this.playerHealth += 10;
        },
        giveUp: function() {
            this.startNewGame();
            this.gameIsRuning = false;
        },
        calculateAttack: function(min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        }
    }
})
