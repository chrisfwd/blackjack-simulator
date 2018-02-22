// blackjack simulator
const GameSimulator = require('./js/GameSimulator.js');

(function(){

    var game = new GameSimulator({
        betAmount: 10
    });

    game.start();

})();
