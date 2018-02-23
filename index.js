// blackjack simulator
const GameSimulator = require('./js/GameSimulator');
const decisionMap = require('./js/decisionTable');

(function(){

    var game = new GameSimulator({
        betAmount: 10,
        hands: 10,
        decisionMap: decisionMap
    });

    game.start();

})();
