const decisionTable = require('./decisionTable');

module.exports = class Player {

    constructor(params){

        this.cash = params.cash || 10.00;
        this.deck = params.deck;
        this.betAmount = 0;
        this.hand = [];

    }

    playHand(options){

        let stay = false,
            dealerCard = options.dealerShows,
            cardTotal = 0;

        // decide to hit, stay, double, split
        while(!stay){

            cardTotal = this.cardTotal();

            if(!decisionTable[cardTotal]) {
                stay = true;
                break;
            }

            let action = decisionTable[cardTotal][dealerCard];
            console.log('player action', action);

            if(action === 'DH'){
                if(this.canDouble){
                    action = 'D';
                } else {
                    action = 'H';
                }
            }

            switch(action){
                case 'D': // Double down
                    this.betAmount *= 2;
                    break;
                case 'P': // sPlit
                    // split functionality
                    stay = true;
                    break;
                case 'H': // Hit
                    this.hand.push(this.deck.pickCard());
                    console.log('player has', this.cardTotal());
                    break;
                case 'S': // Stay
                    stay = true;
                    break;
                default: break;
            }

        }

        console.log('player done', this.hand, this.cardTotal());

    }


    cardTotal(){

        let total = 0;

        this.hand.forEach((cardValue) => {

            total += cardValue;

        });

        return total;

    }


    bet(amount){

        this.betAmount = amount;

    }

}