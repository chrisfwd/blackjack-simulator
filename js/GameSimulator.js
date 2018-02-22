const Dealer = require('./Dealer');
const Player = require('./Player');
const Deck = require('./Deck');
//const decisionTable = require('decisionTable');

module.exports = class GameSimulator {

    constructor(settings){

        this.betAmount = parseFloat(settings.betAmount) || 10.00;
        this.hands = settings.hands || 10;

        this.deck = new Deck({numDecks:4});
        this.dealer = new Dealer({});
        this.player = new Player({cash:100.00, deck: this.deck});

    }


    start(){


        for(let i = 0; i < this.hands; i++){

            console.log('----- starting new game -----');

            //let playing = true,
            //    dealerCard = this.dealer.hand[0],
            //    betAmount = this.player.bet;

            // place bets
            this.player.bet(this.betAmount);

            // deal
            this.deal();

            this.player.playHand({
                dealerShows: this.dealer.hand[0]
            });

            //this.dealer.playHand();

        }

    }


    deal(){

        console.log('dealing...');

        // clear hands
        this.player.hand = [];
        this.dealer.hand = [];


        //deal the cards
        this.player.hand.push(this.deck.pickCard());
        this.dealer.hand.push(this.deck.pickCard());
        this.player.hand.push(this.deck.pickCard());
        this.dealer.hand.push(this.deck.pickCard());

        console.log('player has', this.player.hand);
        console.log('dealer shows', this.dealer.hand[0]);

    }

}