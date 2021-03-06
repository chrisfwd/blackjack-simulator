const Dealer = require('./Dealer');
const Player = require('./Player');
const Deck = require('./Deck');
const defaultDecisionMap = require('./decisionTable');

module.exports = class GameSimulator {

    constructor(settings){

        this.betAmount = parseFloat(settings.betAmount) || 10.00;
        this.hands = settings.hands || 10;

        this.deck = new Deck({numDecks:4});
        this.dealer = new Dealer({deck: this.deck});
        this.player = new Player({
            cash:100.00,
            deck: this.deck,
            decisionMap: settings.decisionMap || defaultDecisionMap
        });

    }


    start(){


        for(let i = 0; i < this.hands; i++){

            console.log('----- starting new game -----');

            //let playing = true,
            //    dealerCard = this.dealer.hand[0],
            //    betAmount = this.player.bet;

            // clear player's and dealer's hands & bets
            this.player.reset();
            this.dealer.reset();

            // place bets
            let playerDidBet = this.player.bet(this.betAmount);

            if(!playerDidBet){
                console.log('player out of money. Game over.');
                break;
            }

            // deal
            this.deal();

            this.player.playHand({
                dealerShows: this.dealer.hand[0]
            });

            this.dealer.playHand();

            this.determineWinner();

            console.log('----- GAME OVER -----');

        }

    }


    determineWinner(){

        let playerScore = this.player.cardTotal();
        let dealerScore = this.dealer.cardTotal();

        let playerWins = playerScore > dealerScore;
        let push = playerScore === dealerScore;

        if(playerWins){
            this.player.cash += this.player.betAmount * 2;
            console.log('Winner: Player', '$'+this.player.betAmount * 2);
        } else if(push){
            this.player.cash += this.player.betAmount;
        } else {
            // dealer wins
            console.log('Winner: House');
            // betAmount goes to house
        }

        console.log('player cash', this.player.cash);

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

        console.log('player cards', this.player.hand, this.player.cardTotal());
        console.log('dealer shows', this.dealer.hand[0]);

    }

}